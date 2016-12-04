var vink = document.querySelector('figure > span');
var y = 0;


// Vink
var showVink = function(){
  if(y===0) {
    y=1;
      vink.innerHTML = "&#8722;";
  } else {
    y=0;
      vink.innerHTML = "&#43;";
  }
};

vink.addEventListener('click', showVink);
