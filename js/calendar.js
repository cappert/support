define(["require", "exports", "./date-utils", "./http"], function (require, exports, date_utils_1, http_1) {
    "use strict";
    var CAL_URL = 'https://www.googleapis.com/calendar/v3/calendars/simplon.co_7sc0sp073u3svukpopmhob9fmg%40group.calendar.google.com/events?key=AIzaSyADm7UvQFnHmkfo_sei1oZoLvx_X-_mhFI';
    /**
     * nombre d'events affichés ds le widget
     * @type {number}
     */
    var NUM_CAL_EVENTS = 8;
    /**
     * classe du Widget calendrier
     */
    var CalendarWidget = (function () {
        function CalendarWidget(src, targetElement) {
            this.targetElement = targetElement;
            //console.log('CalendarWidget...');
            //this.targetElement = targetElement;
            this.model = new EventModel();
            var loader = new CalLoader(src, this.onCalData.bind(this), true);
        }
        CalendarWidget.prototype.onCalData = function (data) {
            this.model.init(data.items);
            this.view = new CalendarView(this.targetElement, this.model.events);
        };
        return CalendarWidget;
    }());
    exports.CalendarWidget = CalendarWidget;
    var CalLoader = (function () {
        function CalLoader(url, onData, autoLoad) {
            this.url = url;
            this.onData = onData;
            this.onData = onData;
            if (autoLoad)
                this.load();
        }
        CalLoader.prototype.load = function () {
            var _this = this;
            http_1.http('GET', this.url).then(function (value) {
                var data = JSON.parse(value);
                _this.onData(data);
            }, function (reason) { return console.log('reason:', reason); });
        };
        return CalLoader;
    }());
    var CalendarView = (function () {
        function CalendarView(target, events, numEvents) {
            if (numEvents === void 0) { numEvents = NUM_CAL_EVENTS; }
            this.target = target;
            this.events = events;
            this.numEvents = numEvents;
            if (events) {
                this.render();
            }
        }
        CalendarView.prototype.render = function () {
            var _this = this;
            var eventViews = this.events.map(function (e) {
                var v = document.createElement('li');
                var dt = document.createElement('div');
                dt.classList.add('event-date');
                var dateFormatOptions = { weekdays: 'short', day: 'numeric', month: '2-digit', year: '2-digit', hour: 'numeric', minute: 'numeric', };
                dt.innerText = date_utils_1.stringToDate(e.start.dateTime).toLocaleString('fr-FR', dateFormatOptions);
                v.appendChild(dt);
                var titre = document.createElement('div');
                titre.innerText = e.summary;
                v.appendChild(titre);
                return v;
            });
            _.first(eventViews, this.numEvents).forEach(function (v) { return _this.target.appendChild(v); });
        };
        return CalendarView;
    }());
    var EventModel = (function () {
        function EventModel() {
        }
        EventModel.prototype.init = function (events) {
            this.events = this.prepare(events);
        };
        EventModel.prototype.prepare = function (events) {
            return this.filterEvents(events).sort(this.chronoSort);
        };
        EventModel.prototype.filterEvents = function (events) {
            var limit = Date.now() - (12 * 60 * 60 * 1000);
            return events.filter(function (e) {
                return (e.start != undefined) && (e.start.dateTime != undefined);
            }).filter(function (e) {
                var start = Date.parse(e.start.dateTime);
                return start >= limit;
            });
        };
        EventModel.prototype.chronoSort = function (a, b) {
            if (!a || !b)
                return 0;
            if ((a.start != undefined && a.start.dateTime != undefined)
                && (b.start != undefined && a.start.dateTime != undefined)) {
                if (Date.parse(a.start.dateTime) < Date.parse(b.start.dateTime))
                    return -1;
                if (Date.parse(a.start.dateTime) > Date.parse(b.start.dateTime))
                    return 1;
            }
            return 0;
        };
        return EventModel;
    }());
    if (document.getElementById('calendar')) {
        var widget = new CalendarWidget(CAL_URL, document.getElementById('calendarList'));
    }
});
