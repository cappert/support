export function stringToDate(t:string):Date{
    let dt = t.split('T');
    let day = dt[0].split('-').map((t:string)=>parseInt(t));
    day[1] = day[1] - 1; // js month index
    let tm = dt[1].split('+')[0].split(':').map(t=>parseInt(t));
    return new Date( day[0],day[1],day[2], tm[0], tm[1]);
    //return (<any>new Date)( ...day, ...tm);
}

export function parseDateTime(t:string):string {
    let dt = t.split('T');
    let day = dt[0].split('-');
    let tm = _.first(dt[1].split(':'),2);
    return day[2] + '/' + day[1] + '/' + day[0] + ' ' + tm.join(':');
}