function setColor(color){
  // var alist = document.querySelectorAll('a');
  // for(i=0;i<alist.length;i++){
  //   alist[i].style.color=color;
  // }
  $('a').css('color',color);
}

function BodySetBackColor(color){
  document.querySelector('body').style.backgroundColor = color;
}

function BodySetColor(color){
  document.querySelector('body').style.color = color;
}

function nightDayHandler(self){
  var target = document.querySelector('body');
  if(self.value === 'night'){
    BodySetBackColor('black');
    BodySetColor('white');
    self.value = 'day';

    setColor('yellow');

  } else {
    BodySetBackColor('white');
    BodySetColor('black');
    self.value = 'night';

    setColor('blue');
  }
}
