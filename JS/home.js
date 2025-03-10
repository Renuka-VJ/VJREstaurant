
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.querySelector('.nav-bar ul').style.backgroundColor = '#333'; 
  } else {
    document.querySelector('.nav-bar ul').style.backgroundColor = '#24232346'; 
  }
}