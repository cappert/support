'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CAL_URL = 'https://www.googleapis.com/calendar/v3/calendars/simplon.co_7sc0sp073u3svukpopmhob9fmg%40group.calendar.google.com/events?key=AIzaSyADm7UvQFnHmkfo_sei1oZoLvx_X-_mhFI';

function http(method, url, data) {
    return new Promise(function (onRequestComplete, onError, withCred) {
        var request = new XMLHttpRequest();
        // nécessaire pour un appel ajax entre plusieurs domaines
        request.withCredentials = withCred ? true : false;
        request.onload = function () {
            if (this.status === 200) {
                onRequestComplete(this.response);
            } else {
                onError(new Error(this.statusText));
            }
        };
        request.onerror = function () {
            onError(new Error('XMLHttpRequest Error : ' + this.status.text));
        };
        request.open(method, url, true);

        //console.log("http data", data);
        if (data) {
            request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            request.send(data);
        } else request.send();
    });
}

function parseDate(t) {
    var dt = t.split('T');
    var day = dt[0].split('-');
    var tm = dt[1].split(':');
    var time = [tm[0], tm[1]];
    return day[2] + '/' + day[1] + '/' + day[0] + ' ' + time.join(':');
}

function onCalData(data) {
    //console.log('num events', data.items.length);
    displayEvents(data.items);
}

function displayEvents(events) {
    var view = document.querySelector("#calendarList");
    //console.log('sorted',events);
    events = filterEvents(events);
    events.sort(chronoSort);
    var eventViews = events.map(function (e) {
        //console.log('test');
        var v = document.createElement('li');
        var dt = document.createElement('div');
        dt.classList.add('event-date');
        dt.innerText = parseDate(e.start.dateTime);
        v.appendChild(dt);
        var titre = document.createElement('div');
        titre.innerText = e.summary;
        v.appendChild(titre);
        return v;
    });

    //console.log('displayEvents...', eventViews.length);
    _.first(eventViews, 5).forEach(function (v) {
        return view.appendChild(v);
    });
}

function filterEvents(events) {
    //console.log('filterEvents...');
    var limit = Date.now() - 12 * 60 * 60 * 1000;
    return events.filter(function (e) {
        return e.start != undefined && e.start.dateTime != undefined;
    }).filter(function (e) {
        var start = Date.parse(e.start.dateTime);
        //console.log('start / now', start, now);
        //console.log(start, Date.now());
        return start >= Date.now();
    });
}

function chronoSort(a, b) {
    if (!a || !b) return 0;
    if (a.start != undefined && a.start.dateTime != undefined && b.start != undefined && a.start.dateTime != undefined) {
        if (parseDate(a.start.dateTime) < parseDate(b.start.dateTime)) return -1;
        if (parseDate(a.start.dateTime) > parseDate(b.start.dateTime)) return 1;
    }
    return 0;
}

var CalLoader = function () {
    function CalLoader(url, onData) {
        _classCallCheck(this, CalLoader);

        this.url = url;
        this.onData = onData;
    }

    _createClass(CalLoader, [{
        key: 'load',
        value: function load() {
            var _this = this;

            http('GET', this.url).then(function (value) {
                console.log('value:', value);
                _this.data = JSON.parse(value);
                _this.onData(_this.data);
            }, function (reason) {
                return console.log('reason:', reason);
            });
        }
    }]);

    return CalLoader;
}();

var cal = new CalLoader(CAL_URL, onCalData);
cal.load();

//# sourceMappingURL=calendar.js.map