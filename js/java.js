// ===============Lavarg  Function==========
document.querySelectorAll(".photo").forEach( image =>{
   image.onclick = function( ) {
      if(image.webkitRequestFullscreen){
      image.webkitRequestFullscreen( );
   } 
   }
  
}

)
// ==================================

// =============Misr Function============

document.querySelectorAll(".photoMisr").forEach(imageMisr =>{
   imageMisr.onclick = ()=>{
      if( imageMisr.webkitRequestFullscreen ){
         imageMisr.webkitRequestFullscreen();
      }
   }  
})
// =======================================

// ==============CI Capital===================
document.querySelectorAll(".photoCI").forEach( imageCI =>{
imageCI.onclick = ( ) =>{
   if (imageCI.webkitRequestFullscreen ){
      imageCI.webkitRequestFullscreen();
   }
}

})


//================banks Function==============
function Banks( ) {
   var move1 = document.getElementById("box");
   var move2 = document.getElementById("box2");
   var box = document.getElementById("box");
   var h1 =  document.getElementById("h1");
   var h3left = document.getElementById("h3left");
   var h3left2 = document.getElementById("h3left2");
   var h3 = document.getElementById("h3");
   var h4 = document.getElementById("h33");
   var h1left = document.querySelector("#h1left");
    var icon = document.getElementById("icon");
    var banks = document.getElementById("banks");
    move1.classList.add("move1");
    move2.classList.add("move2");
   h1.innerHTML="";
   h1left.innerHTML="";
   h1.innerHTML=" <p class='animate__animated  animate__backInRight  animate__delay-1s  right-h fontright  ' > Projects Of Banks  </p>";
   h3.innerHTML=" ";
   h3.innerHTML = "<p class='animate__animated  animate__backInRight  animate__delay-1s   right-h  fontright2' > Contrade Engineers & Contractors  </p>"
   h4.innerHTML="";
   h4.innerHTML="<p class='animate__animated  animate__backInRight  animate__delay-1s  right-h ' >Projects  </p>";
   h3left2.innerHTML=``;
   h3left.innerHTML=``;
   
   icon.innerHTML="<p class='animate__animated  animate__backOutLeft      animate__slower 200000  ; '></p>"
   h3left.appendChild(banks);
   banks.classList.remove("beforlast3");
   banks.classList.add("beforlast3-1");
}