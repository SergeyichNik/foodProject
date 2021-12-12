import tabs from './modules/tabs';
import timer from './modules/timer';
import modal from './modules/modal';
import form from './modules/form';
import menuCard from './modules/menuCard';
import slider from './modules/slider';
import calc from './modules/calc';
import {openModal} from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {

    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 50000);

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    timer('.timer', '2021-12-12');
    modal('[data-modal]', '.modal', modalTimerId);
    form('form', modalTimerId);
    menuCard();
    slider({
        slide: '.offer__slide',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner' 
    });
    calc();    

});