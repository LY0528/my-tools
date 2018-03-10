function getRandomColor1(){
  return '#' + (function(color){
    return (color +=  '0123456789abcdef'[Math.floor(Math.random()*16)])
    && (color.length === 6) ?  color : arguments.callee(color);
  })('');
}

function getRandomColor2(){
  const r = Math.floor(Math.random()*255);
  const g = Math.floor(Math.random()*255);
  const b = Math.floor(Math.random()*255);
  return 'rgba('+ r +','+ g +','+ b +',0.1)'
}