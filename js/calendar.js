'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var CAL_URL = 'https://www.googleapis.com/calendar/v3/calendars/simplon.co_7sc0sp073u3svukpopmhob9fmg%40group.calendar.google.com/events?key=AIzaSyADm7UvQFnHmkfo_sei1oZoLvx_X-_mhFI';

var NUM_CAL_EVENTS = 8;

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

        if (data) {
            request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            request.send(data);
        } else request.send();
    });
}

function parseDateTime(t) {
    var dt = t.split('T');
    var day = dt[0].split('-');
    var tm = dt[1].split(':');
    var time = [tm[0], tm[1]];
    return day[2] + '/' + day[1] + '/' + day[0] + ' ' + time.join(':');
}

function stringToDate(t) {
    var dt = t.split('T');
    var day = dt[0].split('-');
    day[1] = day[1] - 1; // js month index
    var tm = dt[1].split('+')[0].split(':');
    //console.log([...day, ...time]);
    return new (Function.prototype.bind.apply(Date, [null].concat(_toConsumableArray(day), _toConsumableArray(tm))))();
}

var CalendarWidget = function () {
    function CalendarWidget(src, targetElement) {
        _classCallCheck(this, CalendarWidget);

        console.log('CalendarWidget...');
        this.targetElement = targetElement;
        this.model = new EventModel();
        var loader = new CalLoader(src, this.onCalData.bind(this), true);
    }

    _createClass(CalendarWidget, [{
        key: 'onCalData',
        value: function onCalData(data) {
            this.model.init(data.items);
            this.view = new CalendarView(this.targetElement, this.model.events);
        }
    }]);

    return CalendarWidget;
}();

var CalendarView = function () {
    function CalendarView(target, events) {
        _classCallCheck(this, CalendarView);

        if (events) {
            this.target = target;
            this.events = events;
            this.render();
        }
    }

    _createClass(CalendarView, [{
        key: 'render',
        value: function render() {
            var _this = this;

            var eventViews = this.events.map(function (e) {
                var v = document.createElement('li');
                var dt = document.createElement('div');
                dt.classList.add('event-date');
                var dateFormatOptions = { weekdays: 'short', day: 'numeric', month: '2-digit', year: '2-digit', hour: 'numeric', minute: 'numeric' };
                dt.innerText = stringToDate(e.start.dateTime).toLocaleString('fr-FR', dateFormatOptions);
                //dt.innerText = parseDateTime(e.start.dateTime);
                console.log('stringToDate', e.start.dateTime, stringToDate(e.start.dateTime));
                v.appendChild(dt);
                var titre = document.createElement('div');
                titre.innerText = e.summary;
                v.appendChild(titre);
                return v;
            });

            _.first(eventViews, NUM_CAL_EVENTS).forEach(function (v) {
                return _this.target.appendChild(v);
            });
        }
    }]);

    return CalendarView;
}();

var EventModel = function () {
    function EventModel() {
        _classCallCheck(this, EventModel);
    }

    _createClass(EventModel, [{
        key: 'init',
        value: function init(events) {
            this.events = this.prepare(events);
        }
    }, {
        key: 'prepare',
        value: function prepare(events) {
            return this.filterEvents(events).sort(this.chronoSort);
        }
    }, {
        key: 'filterEvents',
        value: function filterEvents(events) {
            var limit = Date.now() - 12 * 60 * 60 * 1000;
            return events.filter(function (e) {
                return e.start != undefined && e.start.dateTime != undefined;
            }).filter(function (e) {
                var start = Date.parse(e.start.dateTime);
                return start >= limit;
            });
        }
    }, {
        key: 'chronoSort',
        value: function chronoSort(a, b) {
            if (!a || !b) return 0;
            if (a.start != undefined && a.start.dateTime != undefined && b.start != undefined && a.start.dateTime != undefined) {
                if (Date.parse(a.start.dateTime) < Date.parse(b.start.dateTime)) return -1;
                if (Date.parse(a.start.dateTime) > Date.parse(b.start.dateTime)) return 1;
            }
            return 0;
        }
    }]);

    return EventModel;
}();

var CalLoader = function () {
    function CalLoader(url, onData, autoLoad) {
        _classCallCheck(this, CalLoader);

        this.url = url;
        this.onData = onData;

        if (autoLoad) this.load();
    }

    _createClass(CalLoader, [{
        key: 'load',
        value: function load() {
            var _this2 = this;

            http('GET', this.url).then(function (value) {
                //console.log('value:', value);
                _this2.data = JSON.parse(value);
                _this2.onData(_this2.data);
            }, function (reason) {
                return console.log('reason:', reason);
            });
        }
    }]);

    return CalLoader;
}();

if (document.getElementById('calendar')) {
    var widget = new CalendarWidget(CAL_URL, document.getElementById('calendarList'));
}

//# sourceMappingURL=calendar.js.map