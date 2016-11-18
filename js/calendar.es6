const CAL_URL = 'https://www.googleapis.com/calendar/v3/calendars/simplon.co_7sc0sp073u3svukpopmhob9fmg%40group.calendar.google.com/events?key=AIzaSyADm7UvQFnHmkfo_sei1oZoLvx_X-_mhFI';

const NUM_CAL_EVENTS = 8;

function http(method, url, data) {
    return new Promise(
        function (onRequestComplete, onError, withCred) {
            const request = new XMLHttpRequest();
            // nécessaire pour un appel ajax entre plusieurs domaines
            request.withCredentials = withCred ? true : false;
            request.onload = function () {
                if (this.status === 200) {
                    onRequestComplete(this.response);
                } else {
                    onError(new Error(this.statusText));
                }
            }
            request.onerror = function () {
                onError(new Error('XMLHttpRequest Error : ' + this.status.text));
            }
            request.open(method, url, true);

            if (data) {
                request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                request.send(data);
            } else
                request.send();
        }
    )
}

function parseDateTime(t) {
    let dt = t.split('T');
    let day = dt[0].split('-');
    let tm = dt[1].split(':');
    let time = [tm[0], tm[1]];
    return day[2] + '/' + day[1] + '/' + day[0] + ' ' + time.join(':');
}

function stringToDate(t){
    let dt = t.split('T');
    let day = dt[0].split('-');
    day[1] = day[1] - 1; // js month index
    let tm = dt[1].split('+')[0].split(':');
    return new Date(...day, ...tm);
}

class CalendarWidget {
    constructor(src, targetElement) {
        //console.log('CalendarWidget...');
        this.targetElement = targetElement;
        this.model = new EventModel();
        let loader = new CalLoader(src, this.onCalData.bind(this), true);
    }

    onCalData(data) {
        this.model.init(data.items);
        this.view = new CalendarView(this.targetElement, this.model.events);
    }
}



class CalendarView{

    constructor(target, events){
        if( events ){
            this.target = target;
            this.events = events;
            this.render();
        }
    }

    render() {
        var eventViews = this.events.map(e => {
            var v = document.createElement('li');
            var dt = document.createElement('div');
            dt.classList.add('event-date');
            let dateFormatOptions = {weekdays:'short', day:'numeric', month:'2-digit', year:'2-digit', hour:'numeric',minute:'numeric', };
            dt.innerText = stringToDate(e.start.dateTime).toLocaleString('fr-FR', dateFormatOptions);
            v.appendChild(dt);
            var titre = document.createElement('div');
            titre.innerText = e.summary;
            v.appendChild(titre);
            return v;
        });

        _.first(eventViews, NUM_CAL_EVENTS).forEach(v =>this.target.appendChild(v));
    }
}

class EventModel {
    init(events) {
        this.events = this.prepare(events);
    }

    prepare(events) {
        return this.filterEvents(events).sort(this.chronoSort);
    }

    filterEvents(events) {
        let limit = Date.now() - (12 * 60 * 60 * 1000);
        return events.filter(e => {
            return (e.start != undefined) && (e.start.dateTime != undefined);
        }).filter(e => {
            let start = Date.parse(e.start.dateTime);
            return start >= limit;
        });
    }

    chronoSort(a, b) {
        if (!a || !b) return 0;
        if ((a.start != undefined && a.start.dateTime != undefined)
            && (b.start != undefined && a.start.dateTime != undefined)) {
            if (Date.parse(a.start.dateTime) < Date.parse(b.start.dateTime))
                return -1;
            if (Date.parse(a.start.dateTime) > Date.parse(b.start.dateTime))
                return 1;
        }
        return 0;
    }
}

class CalLoader {

    constructor(url, onData, autoLoad) {
        this.url = url;
        this.onData = onData;

        if (autoLoad)
            this.load();
    }

    load() {
        http('GET', this.url).then(
            value=> {
                //console.log('value:', value);
                this.data = JSON.parse(value);
                this.onData(this.data);
            },
            reason=>console.log('reason:', reason)
        );
    }
}

if (document.getElementById('calendar')) {
    let widget = new CalendarWidget(CAL_URL, document.getElementById('calendarList') );
}

