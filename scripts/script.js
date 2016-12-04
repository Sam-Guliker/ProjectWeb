var fieldset = document.getElementById('inloggen');
var log = document.querySelector('body > header > nav > ul > li:nth-child(2)');
var sluit = document.querySelector('fieldset >span')
var asideSluit = document.querySelector('body > aside:nth-of-type(2) > header > ul > li')
var sectionSluit = document.querySelector('body > aside:first-of-type > header > ul > li')
var nav = document.querySelector('nav');
var button = document.querySelector('body > header > div> p');
var aside = document.querySelector('body > aside:nth-child(2)');
var asideKnop = document.querySelector('body > header > nav > ul > li:nth-of-type(3)');
var lijst = document.querySelector('aside:first-of-type');
var sectionKnop = document.querySelector('body > header > nav > ul > li:nth-of-type(4)');
var x = 0;

// Menu
var show = function(){
  if(x===0) {
    x=1;
    nav.classList.add('slide');
      button.innerHTML = "&#x02212 menu";
  } else {
    x=0;
    nav.classList.remove('slide');
      button.innerHTML = "&#43 menu";
  }
};

button.addEventListener('click', show);

// inloggen
var logShow = function(){
  fieldset.classList.toggle('slideTop');
};

log.addEventListener('click',logShow);
sluit.addEventListener('click', logShow);


// Genre
var asideShow = function(){
  aside.classList.toggle('slideLeft');
};

asideKnop.addEventListener('click',asideShow);
asideSluit.addEventListener('click', asideShow);

// lijst
var showLijst = function (){
  lijst.classList.toggle('slideLeft');
};

sectionKnop.addEventListener('click', showLijst);
sectionSluit.addEventListener('click', showLijst);
