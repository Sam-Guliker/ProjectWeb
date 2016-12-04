var image = document.querySelector('#jap>img');
var j = 0;

// Vink
var showImg = function(){
  if(j===0) {
    j=1;
      image.src = "images/jap.png";
  } else {
    j=0;
      image.src = "images/jap2.png";
  }
};

image.addEventListener('click', showImg);
