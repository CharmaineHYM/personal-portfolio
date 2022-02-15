'use strict';

const img = document.querySelectorAll(".lazyLoad");
const spinnerParent = document.querySelectorAll(".portfolio_content_figure");
const previous_btn =document.querySelector('.experience_btn_previous');
const next_btn =document.querySelector('.experience_btn_next');
const items = document.querySelectorAll('.experience_item')

// chrome css
const header = document.querySelector('.header');
const headerIcon = document.querySelector('.header_icon');
const header_title = document.querySelector('.header_title');
let isChrome = navigator.userAgent.match(/chrome|chromium|crios/i)

let media = window.matchMedia('(max-width: 550px)');


if(isChrome && media){
    header.classList.add('header_isChrome');
    header.classList.add('header_icon_isChrome');
}

// image load
let lazyLoad = function(img){
    img.src = img.dataset.src;
    spinnerParent.forEach(function(spinner){
        spinner.lastElementChild.classList.add('dis-none')
    })
}

img.forEach(function(img){
   img.onload = lazyLoad(img);
})

// scroll eduction section
let click = 0;

let goNext = function(){
    addClass();
    let item = document.querySelector(`.experience_item[data-item="${click}"]`);
    item.classList.remove('dis-none');
    click++;
    if(click >= items.length - 1){
        click = 0
    }
}

let goPrevious = function(){
    addClass();
    if(click <= 0){
        click = items.length -1
    }
    let item = document.querySelector(`.experience_item[data-item="${click}"]`);
    item.classList.remove('dis-none');
    click--;
    
}

let addClass = function(){
    items.forEach(function(items){
        items.classList.add('dis-none');
    })
}

next_btn.addEventListener('click', goNext);
previous_btn.addEventListener('click', goPrevious);

