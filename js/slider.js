'use strict'

const slider = {
    sliders: ['/img/6.jpg', '/img/7.jpg', '/img/8.jpg', '/img/9.jpg'],
    frame: 0,
    set: function(image) {
        document.getElementById('src').style.backgroundImage =
        'url('+image+')';
    },
    init: function() {
        this.set(this.sliders[this.frame]);
    },
    left: function() {
        this.frame--;
        if (this.frame < 0) {
            this.frame = this.sliders.length - 1;
        }
        this.set(this.sliders[this.frame]);
    },
    right: function() {
        this.frame++;
        if (this.frame === this.sliders.length) {
            this.frame = 0;
        }
        this.set(this.sliders[this.frame]);
    }
};

window.onload = function() {
    slider.init();
    setInterval(function() {
        slider.right();
    }, 5000)
};