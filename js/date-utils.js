define(["require", "exports"], function (require, exports) {
    "use strict";
    function stringToDate(t) {
        var dt = t.split('T');
        var day = dt[0].split('-').map(function (t) { return parseInt(t); });
        day[1] = day[1] - 1; // js month index
        var tm = dt[1].split('+')[0].split(':').map(function (t) { return parseInt(t); });
        return new Date(day[0], day[1], day[2], tm[0], tm[1]);
        //return (<any>new Date)( ...day, ...tm);
    }
    exports.stringToDate = stringToDate;
    function parseDateTime(t) {
        var dt = t.split('T');
        var day = dt[0].split('-');
        var tm = _.first(dt[1].split(':'), 2);
        return day[2] + '/' + day[1] + '/' + day[0] + ' ' + tm.join(':');
    }
    exports.parseDateTime = parseDateTime;
});
