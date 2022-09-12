import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

import moment from 'moment/moment';

const myDate=moment().format('lll');
const myDate2=document.querySelector('.header__date');
myDate2.innerHTML=myDate;

let isDark=false;
const switchMode = document.querySelector('.header__dark--js');
switchMode.addEventListener('click', () =>{
    if(isDark) {
        document.documentElement.style.setProperty('--background-color', 'white');
        document.documentElement.style.setProperty('--text-color', 'black');
        document.documentElement.style.setProperty('--background-article', '#d1e2d1');
        isDark=false;
    }else{
        document.documentElement.style.setProperty('--background-color', 'black');
        document.documentElement.style.setProperty('--text-color', 'white');
        document.documentElement.style.setProperty('--background-article', '#386641');
        isDark=true;
    }
})


