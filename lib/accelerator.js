/*
 * Accelerator / accelerator.js
 * copyright (c) 2014 Susisu
 */

"use strict";

function end() {
    module.exports = accelerator;
}


function accelerator(iterator) {
    return new Accelerator(iterator);
}

Object.defineProperties(accelerator, {
    "async": {
        "value": require("./async.js")
    },

    "Accelerator": {
        "value": Accelerator
    },

    "map": {
        "value": map
    },
    "filter": {
        "value": filter
    }
});


function Accelerator(iterator) {
    this.iterator = iterator;
}

Object.defineProperties(Accelerator.prototype, {
    "end": {
        "get": function () {
            return this.iterator;
        }
    },

    "map": {
        "value": function (func) {
            return new Accelerator(map(func, this.iterator));
        }
    },
    "filter": {
        "value": function (func) {
            return new Accelerator(filter(func, this.iterator));
        }
    }
});


function map(func, iterator) {
    return Object.freeze({
        "next": function () {
            var result = iterator.next();
            if (result.done) {
                return { value: result.value, done: true };
            }
            else {
                return { value: func(result.value), done: false };
            }
        }
    });
}

function filter(func, iterator) {
    return Object.freeze({
        "next": function () {
            var result;
            do {
                result = iterator.next();
            } while (!result.done && !func(result.value));
            if (result.done) {
                return { value: result.value, done: true };
            }
            else {
                return {value: result.value, done: false };
            }
        }
    });
}


end();
