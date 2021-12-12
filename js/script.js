window.addEventListener('DOMContentLoaded', () => {
    const tabs = require('./modules/tabs'),
        timer = require('./modules/timer'),
        modal = require('./modules/modal'),
        form = require('./modules/form'),
        menuCard = require('./modules/menuCard'),
        slider = require('./modules/slider'),
        calc = require('./modules/calc');

    tabs();
    timer();
    modal();
    form();
    menuCard();
    slider();
    calc();    

});