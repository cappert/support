/**
 * helper pour appel ajax via Promise
 * @param method
 * @param url
 * @param data x-www-form-urlencoded
 * @param withCred
 * @returns {Promise<string>|Promise}
 */
export function http(method: string, url: string, data: string = null, withCred: boolean = false) {
    return new Promise<string>(
        function (onRequestComplete, onError) {
            const request = new XMLHttpRequest();
            request.withCredentials = withCred;

            request.onload = (ev)=>{
                let req = (<XMLHttpRequest> ev.target);
                if (req.status === 200) {
                    onRequestComplete(req.response);
                } else {
                    onError(new Error(req.statusText));
                }
            };
            request.onerror = ()=>
                onError(new Error('XMLHttpRequest Error : ' + this.status.toString()));

            request.open(method, url, true);

            if (data) {
                request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                request.send(data);
            } else
                request.send();
        }
    )
}