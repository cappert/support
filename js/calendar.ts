import {stringToDate} from "./date-utils";
import {http} from "./http";

const CAL_URL:string = 'https://www.googleapis.com/calendar/v3/calendars/simplon.co_7sc0sp073u3svukpopmhob9fmg%40group.calendar.google.com/events?key=AIzaSyADm7UvQFnHmkfo_sei1oZoLvx_X-_mhFI';

/**
 * nombre d'events affichés ds le widget
 * @type {number}
 */
const NUM_CAL_EVENTS:number = 8;

/**
 * classe du Widget calendrier
 */
export class CalendarWidget {
    private model:EventModel;
    private view:CalendarView;

    constructor(src:string, private targetElement:HTMLElement) {
        //console.log('CalendarWidget...');
        //this.targetElement = targetElement;
        this.model = new EventModel();
        let loader = new CalLoader(src, this.onCalData.bind(this), true);
    }

    onCalData(data) {
        this.model.init(data.items);
        this.view = new CalendarView(this.targetElement, this.model.events);
    }
}

class CalLoader {

    constructor(private url:string, private onData:Function, autoLoad:boolean) {
        this.onData = onData;

        if (autoLoad)
            this.load();
    }

    load() {
        http('GET', this.url).then(
            (value:string)=> {
                let data = JSON.parse(value);
                this.onData(data);
            },
            reason=>console.log('reason:', reason)
        );
    }
}

class CalendarView{
    constructor(private target:HTMLElement, private events:Array<Event>, public numEvents:number = NUM_CAL_EVENTS){
        if( events ){
            this.render();
        }
    }

    render() {
        var eventViews = this.events.map((e:Event) => {
            var v = document.createElement('li');
            var dt = document.createElement('div');
            dt.classList.add('event-date');
            let dateFormatOptions = {weekdays:'short', day:'numeric', month:'2-digit', year:'2-digit', hour:'numeric',minute:'numeric', };
            dt.innerText = stringToDate(e.start.dateTime).toLocaleString('fr-FR', dateFormatOptions);
            v.appendChild(dt);
            let titre:HTMLDivElement = document.createElement('div');
            titre.innerText = e.summary;
            v.appendChild(titre);
            return v;
        });

        _.first(eventViews, this.numEvents).forEach(v =>this.target.appendChild(v));
    }
}

class EventModel {
    events:Array<Event>;
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

interface Event{
    summary:string;
    start:{dateTime};
    end:Object;
}

if (document.getElementById('calendar')) {
    let widget:CalendarWidget = new CalendarWidget(CAL_URL, document.getElementById('calendarList') );
}

