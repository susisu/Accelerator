/*
 * Accelerator / accelerator.js
 * copyright (c) 2014 Susisu
 */

"use strict";

function end() {
    module.exports = accelerator;
}


function accelerator(generator) {
    return new Accelerator(generator);
}

Object.defineProperties(accelerator, {
    "Accelerator": {
        "value": Accelerator
    },
    "async": {
        "value": require("./async.js")
    }
});


function Accelerator(generator) {
    this.generator = generator;
}

Object.defineProperties(Accelerator.prototype, {
    "end": {
        "get": function () {
            return this.generator;
        }
    }
});


end();
