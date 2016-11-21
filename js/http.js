define(["require", "exports"], function (require, exports) {
    "use strict";
    /**
     * helper pour appel ajax via Promise
     * @param method
     * @param url
     * @param data x-www-form-urlencoded
     * @param withCred
     * @returns {Promise<string>|Promise}
     */
    function http(method, url, data, withCred) {
        if (data === void 0) { data = null; }
        if (withCred === void 0) { withCred = false; }
        return new Promise(function (onRequestComplete, onError) {
            var _this = this;
            var request = new XMLHttpRequest();
            request.withCredentials = withCred;
            request.onload = function (ev) {
                var req = ev.target;
                if (req.status === 200) {
                    onRequestComplete(req.response);
                }
                else {
                    onError(new Error(req.statusText));
                }
            };
            request.onerror = function () {
                return onError(new Error('XMLHttpRequest Error : ' + _this.status.toString()));
            };
            request.open(method, url, true);
            if (data) {
                request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                request.send(data);
            }
            else
                request.send();
        });
    }
    exports.http = http;
});
