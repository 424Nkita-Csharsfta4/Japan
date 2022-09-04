window.onscroll = function {scroollFunction()};

function scroolFunction(){
  if(document.body.scroolTop > 80 || document.documentElement.scroolTop > 80){
    document.getElementById("navbar").style.backgroundColor="#333";
    document.getElementById("navbar").style.display ="none";
  }else{
    document.getElementById("navbar").style.backgroundColor="#3330";
    document.getElementById("navbar").style.display="block";
  }
}

var canvas = $('#canvas')[0]; // or document.getElementById('canvas');
canvas.width = canvas.width;