/*
 * Accelerator / async.js
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
    "Accelerator": {
        "value": Accelerator
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
    }
});


end();
