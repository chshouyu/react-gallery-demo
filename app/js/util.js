
var isType = function(type) {
    return function(obj) {
        return Object.prototype.toString.call(obj).replace(/\[object\s(.+)\]/, '$1').toLowerCase() === type;
    };
};

var isObject = isType('object');
var isArray = Array.isArray || isType('array');

var stringifyQuery = function(queryObject) {
    if (!queryObject || !isObject(queryObject)) {
        return '';
    }
    var r = [];

    for (var key in queryObject) {
        if (queryObject.hasOwnProperty(key)) {
            r.push(encodeURIComponent(key) + '=' + encodeURIComponent(queryObject[key]));
        }
    }
    return r.join('&');
};

var ajax = function(url, args) {

    return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();
        var uri = url;

        if (args && isObject(args)) {
            uri += '?' + stringifyQuery(args);
        }

        xhr.onload = function() {
            if (this.status === 200 || this.status === 304) {
                resolve(this.response);
            } else {
                reject(this.statusText);
            }
        };

        xhr.onerror = function() {
            reject(this.statusText);
        };

        xhr.open('GET', uri, true);
        xhr.responseType = 'json';
        xhr.send();
    });
};

exports.isArray = isArray;
exports.ajax = ajax;