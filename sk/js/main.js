
// document.getelementbyid("nm1").Addeventlistener(onclick){
//     if(style="bold")
//     return 

// }
function bolde(){
    event.preventDefault();
  var txt=  document.getElementById("txt");
  if(txt.style.fontWeight=="bold"){
    txt.style.fontWeight="normal";
  }
  else{
      txt.style.fontWeight="bold";
  }
}
function italique(){
    event.preventDefault();
  var txt= document.getElementById("txt");
  if(txt.style.fontStyle=="italic"){
    txt.style.fontStyle="normal";
  }
  else{
      txt.style.fontStyle="italic";
  }
}
function underlinede(){
    event.preventDefault();
var txt= document.getElementById("txt");
if(txt.style.textDecoration=="underline"){
    txt.style.textDecoration="none";
}
else{
    txt.style.textDecoration="underline";
}
}
function ChangeFontSize(){
    event.preventDefault();
var txt=document.getElementById("txt");
txt.style.fontSize=document.getElementById("pxls").value;
}
function ChangeFontFamily(){
    event.preventDefault();
    var txt=document.getElementById("txt");
    txt.style.fontFamily=document.getElementById("fntfml").value;
}