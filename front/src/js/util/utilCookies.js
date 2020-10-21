export default class UtilCookies {

    static getCookie(name) {
        var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
        console.log(match[2])
        if (match && match[2] != 'undefined') {
            return match[2];
        }
        else {
            return ""
        }
    };


    static setCookie(inputs) {
        /* cookie name */
        var name = (inputs[0]) ? inputs[0] : "key" + document.cookie.length;
        /* cookie expire in 120 seconds */
        var date = new Date();
        date.setTime(date.getTime() + (120 * 1000));
        var expires = "; expires=" + date.toGMTString();
        /* sets cookie */
        document.cookie = name + "=" + inputs[1] + expires;
    };



    static clearCookies(elements) {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i];
            var eqPos = cookie.indexOf('=');
            var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
        }
        $(elements[0]).val('');
        $(elements[1]).val('');
        $(elements[2]).val('');
        $(elements[3]).html('No Cookie');
    };
}