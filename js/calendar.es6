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

function parseDate(t) {
    let dt = t.split('T');
    let day = dt[0].split('-');
    let tm = dt[1].split(':');
    let time = [tm[0], tm[1]];
    return day[2] + '/' + day[1] + '/' + day[0] + ' ' + time.join(':');
}

function onCalData(data) {
    displayEvents(data.items);
}

function displayEvents(events) {
    var view = document.querySelector("#calendarList");
    events = filterEvents(events);
    events.sort(chronoSort);
    var eventViews = events.map(e => {
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

    _.first(eventViews, NUM_CAL_EVENTS).forEach(v =>view.appendChild(v));
}

function filterEvents(events) {
    let limit = Date.now() - (12 * 60 * 60 * 1000);
    return events.filter(e => {
        return (e.start != undefined) && (e.start.dateTime != undefined);
    }).filter(e => {
        let start = Date.parse(e.start.dateTime);
        return start >= limit;
    });
}

function chronoSort(a, b) {
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

class CalLoader {

    constructor(url, onData) {
        this.url = url;
        this.onData = onData;
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
    var cal = new CalLoader(CAL_URL, onCalData);
    cal.load();
}

