"use strict"

importScripts('waveform.js');

var n;

self.onmessage = function(evt) {

    if (evt.data.canvas) {
        let canvas = evt.data.canvas;
        const buffer = evt.data.buffer;

        displayBuffer(canvas, buffer);
        postMessage({finished: true, number: this.n});
    }
    else if (evt.data.number){
    	n = parseInt(evt.data.number);
    }


    //self.terminate();
}