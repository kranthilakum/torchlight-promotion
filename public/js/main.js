function changeIt()
{
  var theImg = document.getElementById('app'),
           x = theImg.src.split("/"),
           t = x.length-1,
           y = x[t];

  if(y == 'torchlight_off.png')
  {
      theImg.src='./img/torchlight_on.png'
  }

  if(y == 'torchlight_on.png')
  {
      theImg.src='./img/torchlight_off.png'
  }
}