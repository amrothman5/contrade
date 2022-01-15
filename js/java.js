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
   h1.innerHTML=" <p class='animate__animated  animate__backInRight  animate__delay-1s  right-h fontright  '  style='Cambria, Cochin; color: rgb(214, 30, 30);'> Projects Of Banks  </p>";
   h3.innerHTML=" ";
   h3.innerHTML = "<p class='animate__animated  animate__backInRight  animate__delay-1s   right-h  fontright2'  style='Cambria, Cochin; color: rgb(214, 30, 30);' > Contrade Engineers & Contractors  </p>"
   h4.innerHTML="";
   h4.innerHTML="<p class='animate__animated  animate__backInRight  animate__delay-1s  right-h '  style='Cambria, Cochin; color: rgb(214, 30, 30);' >Projects  </p>";
   h3left2.innerHTML=``;
   h3left.innerHTML=``;
   
   icon.innerHTML="<p class='animate__animated  animate__backOutLeft      animate__slower 200000  ; '></p>"
   h3left.appendChild(banks);
   banks.classList.remove("beforlast3");
   banks.classList.add("beforlast3-1");
}
// ================================

// ================= Reverce Funcation=================
function Banks2( ) {
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
    var pdetails = document.getElementById("pagedetails");
    move1.classList.remove("move1");
    move2.classList.remove("move2");
    move1.classList.add("move22");
    move2.classList.add("move11");
   h1.innerHTML="";
   h1left.innerHTML="";
   h1.innerHTML=" ";
   h3.innerHTML=" ";
   h3.innerHTML = ""
   h4.innerHTML="";
   h4.innerHTML=" ";
   h3left2.innerHTML=``;
   h3left.innerHTML=``;
   pdetails.style.opacity="100";
   icon.innerHTML="<p class='animate__animated  animate__backOutLeft      animate__slower 200000  ; '></p>"
   h3left.appendChild(banks);
   banks.classList.remove("beforlast3");
   banks.classList.add("beforlast3-1");
   // =======================================
   var full = document.getElementById("fullScreen");
   var bank1 = document.getElementById("bank1");
   full.style.width="100%";
   full.style.transition="all 3s ease-in-out 0s";
   full.classList.add("fullscreen2");
    bank1.style.display="flex";
    bank1.style.flex="row";
    bank1.style.wrap="wrap";
}

// function fullScreen2(){
//    var full = document.getElementById("fullScreen");
//    var bank1 = document.getElementById("bank1");
//    full.style.width="100%";
//    full.style.transition="all 3s ease 0s";
//    full.classList.add("fullscreen2");
//     bank1.style.display="flex";
//     bank1.style.flex="row";
//     bank1.style.wrap="wrap";
// }

function fullScreen3(){
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
    var pdetails = document.getElementById("pagedetails");
    move1.classList.remove("move1");
    move2.classList.remove("move2");
    move1.classList.add("move22");
    move2.classList.add("move11");
   h1.innerHTML="";
   h1left.innerHTML="";
   h1.innerHTML=" ";
   h3.innerHTML=" ";
   h3.innerHTML = ""
   h4.innerHTML="";
   h4.innerHTML=" ";
   h3left2.innerHTML=``;
   h3left.innerHTML=``;
   pdetails.style.opacity="100";
   icon.innerHTML="<p class='animate__animated  animate__backOutLeft      animate__slower 200000  ; '></p>"
   h3left.appendChild(banks);
   banks.classList.remove("beforlast3");
   banks.classList.add("beforlast3-1");
   // ======================================
   var full3 = document.getElementById("fullScreen");
   var bank2 = document.getElementById("bank2");
   full3.style.width="100%";
   full3.style.transition="all 3s ease-in-out 0s";
   full3.classList.add("fullscreen2");
    bank2.style.display="flex";
    bank2.style.flex="row";
    bank2.style.wrap="wrap";
}
// =================================================================
function fullScreen4(){
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
   var pdetails = document.getElementById("pagedetails");
   move1.classList.remove("move1");
   move2.classList.remove("move2");
   move1.classList.add("move22");
   move2.classList.add("move11");
  h1.innerHTML="";
  h1left.innerHTML="";
  h1.innerHTML=" ";
  h3.innerHTML=" ";
  h3.innerHTML = ""
  h4.innerHTML="";
  h4.innerHTML=" ";
  h3left2.innerHTML=``;
  h3left.innerHTML=``;
  pdetails.style.opacity="100";
  icon.innerHTML="<p class='animate__animated  animate__backOutLeft      animate__slower 200000  ; '></p>"
  h3left.appendChild(banks);
  banks.classList.remove("beforlast3");
  banks.classList.add("beforlast3-1");
  // ======================================
  var full4 = document.getElementById("fullScreen");
  var bank3 = document.getElementById("bank3");
  full4.style.width="100%";
  full4.style.transition="all 3s ease-in-out 0s";
  full4.classList.add("fullscreen2");
   bank3.style.display="flex";
   bank3.style.flex="row";
   bank3.style.wrap="wrap";
}

// =====================================================================
function Banks4(){
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
   var pdetails = document.getElementById("pagedetails");
   move1.classList.remove("move1");
   move2.classList.remove("move2");
   move1.classList.add("move22");
   move2.classList.add("move11");
  h1.innerHTML="";
  h1left.innerHTML="";
  h1.innerHTML=" ";
  h3.innerHTML=" ";
  h3.innerHTML = ""
  h4.innerHTML="";
  h4.innerHTML=" ";
  h3left2.innerHTML=``;
  h3left.innerHTML=``;
  pdetails.style.opacity="100";
  icon.innerHTML="<p class='animate__animated  animate__backOutLeft      animate__slower 200000  ; '></p>"
  h3left.appendChild(banks);
  banks.classList.remove("beforlast3");
  banks.classList.add("beforlast3-1");
  // ======================================
  const full5 = document.getElementById("fullScreen");
  const bank4 = document.getElementById("bank4");
  full5.style.width="100%";
  full5.style.transition="all 3s ease-in-out 0s";
  full5.classList.add("fullscreen2");
   bank4.style.display="flex";
   bank4.style.flex="row";
   bank4.style.wrap="wrap";
}
// ======================================================================

function Banks5(){
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
   var pdetails = document.getElementById("pagedetails");
   move1.classList.remove("move1");
   move2.classList.remove("move2");
   move1.classList.add("move22");
   move2.classList.add("move11");
  h1.innerHTML="";
  h1left.innerHTML="";
  h1.innerHTML=" ";
  h3.innerHTML=" ";
  h3.innerHTML = ""
  h4.innerHTML="";
  h4.innerHTML=" ";
  h3left2.innerHTML=``;
  h3left.innerHTML=``;
  pdetails.style.opacity="100";
  icon.innerHTML="<p class='animate__animated  animate__backOutLeft      animate__slower 200000  ; '></p>"
  h3left.appendChild(banks);
  banks.classList.remove("beforlast3");
  banks.classList.add("beforlast3-1");
  // ======================================
  const full6 = document.getElementById("fullScreen");
  const bank5 = document.getElementById("bank5");
  full6.style.width="100%";
  full6.style.transition="all 3s ease-in-out 0s";
  full6.classList.add("fullscreen2");
   bank5.style.display="flex";
   bank5.style.flex="row";
   bank5.style.wrap="wrap";
}
// ===================================================================

function Banks6(){
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
   var pdetails = document.getElementById("pagedetails");
   move1.classList.remove("move1");
   move2.classList.remove("move2");
   move1.classList.add("move22");
   move2.classList.add("move11");
  h1.innerHTML="";
  h1left.innerHTML="";
  h1.innerHTML=" ";
  h3.innerHTML=" ";
  h3.innerHTML = ""
  h4.innerHTML="";
  h4.innerHTML=" ";
  h3left2.innerHTML=``;
  h3left.innerHTML=``;
  pdetails.style.opacity="100";
  icon.innerHTML="<p class='animate__animated  animate__backOutLeft      animate__slower 200000  ; '></p>"
  h3left.appendChild(banks);
  banks.classList.remove("beforlast3");
  banks.classList.add("beforlast3-1");
  // ======================================
  const full7 = document.getElementById("fullScreen");
  const bank6 = document.getElementById("bank6");
  full7.style.width="100%";
  full7.style.transition="all 3s ease-in-out 0s";
  full7.classList.add("fullscreen2");
   bank6.style.display="flex";
   bank6.style.flex="row";
   bank6.style.wrap="wrap";
}
// ====================================================================
function Banks7(){
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
   var pdetails = document.getElementById("pagedetails");
   move1.classList.remove("move1");
   move2.classList.remove("move2");
   move1.classList.add("move22");
   move2.classList.add("move11");
  h1.innerHTML="";
  h1left.innerHTML="";
  h1.innerHTML=" ";
  h3.innerHTML=" ";
  h3.innerHTML = ""
  h4.innerHTML="";
  h4.innerHTML=" ";
  h3left2.innerHTML=``;
  h3left.innerHTML=``;
  pdetails.style.opacity="100";
  icon.innerHTML="<p class='animate__animated  animate__backOutLeft      animate__slower 200000  ; '></p>"
  h3left.appendChild(banks);
  banks.classList.remove("beforlast3");
  banks.classList.add("beforlast3-1");
  // ======================================
  const full8 = document.getElementById("fullScreen");
  const bank7 = document.getElementById("bank7");
  full8.style.width="100%";
  full8.style.transition="all 3s ease-in-out 0s";
  full8.classList.add("fullscreen2");
   bank7.style.display="flex";
   bank7.style.flex="row";
   bank7.style.wrap="wrap";
}
// ===================================================================
function Banks8(){
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
   var pdetails = document.getElementById("pagedetails");
   move1.classList.remove("move1");
   move2.classList.remove("move2");
   move1.classList.add("move22");
   move2.classList.add("move11");
  h1.innerHTML="";
  h1left.innerHTML="";
  h1.innerHTML=" ";
  h3.innerHTML=" ";
  h3.innerHTML = ""
  h4.innerHTML="";
  h4.innerHTML=" ";
  h3left2.innerHTML=``;
  h3left.innerHTML=``;
  pdetails.style.opacity="100";
  icon.innerHTML="<p class='animate__animated  animate__backOutLeft      animate__slower 200000  ; '></p>"
  h3left.appendChild(banks);
  banks.classList.remove("beforlast3");
  banks.classList.add("beforlast3-1");
  // ======================================
  const full9 = document.getElementById("fullScreen");
  const bank8 = document.getElementById("bank8");
  full9.style.width="100%";
  full9.style.transition="all 3s ease-in-out 0s";
  full9.classList.add("fullscreen2");
   bank8.style.display="flex";
   bank8.style.flex="row";
   bank8.style.wrap="wrap";
}
// ===================================================================
function Banks9(){
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
   var pdetails = document.getElementById("pagedetails");
   move1.classList.remove("move1");
   move2.classList.remove("move2");
   move1.classList.add("move22");
   move2.classList.add("move11");
  h1.innerHTML="";
  h1left.innerHTML="";
  h1.innerHTML=" ";
  h3.innerHTML=" ";
  h3.innerHTML = ""
  h4.innerHTML="";
  h4.innerHTML=" ";
  h3left2.innerHTML=``;
  h3left.innerHTML=``;
  pdetails.style.opacity="100";
  icon.innerHTML="<p class='animate__animated  animate__backOutLeft      animate__slower 200000  ; '></p>"
  h3left.appendChild(banks);
  banks.classList.remove("beforlast3");
  banks.classList.add("beforlast3-1");
  // ======================================
  const full10 = document.getElementById("fullScreen");
  const bank9 = document.getElementById("bank9");
  full10.style.width="100%";
  full10.style.transition="all 3s ease-in-out 0s";
  full10.classList.add("fullscreen2");
   bank9.style.display="flex";
   bank9.style.flex="row";
   bank9.style.wrap="wrap";
}
// ====================================================================
function Banks10(){
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
   var pdetails = document.getElementById("pagedetails");
   move1.classList.remove("move1");
   move2.classList.remove("move2");
   move1.classList.add("move22");
   move2.classList.add("move11");
  h1.innerHTML="";
  h1left.innerHTML="";
  h1.innerHTML=" ";
  h3.innerHTML=" ";
  h3.innerHTML = ""
  h4.innerHTML="";
  h4.innerHTML=" ";
  h3left2.innerHTML=``;
  h3left.innerHTML=``;
  pdetails.style.opacity="100";
  icon.innerHTML="<p class='animate__animated  animate__backOutLeft      animate__slower 200000  ; '></p>"
  h3left.appendChild(banks);
  banks.classList.remove("beforlast3");
  banks.classList.add("beforlast3-1");
  // ======================================
  const full11 = document.getElementById("fullScreen");
  const bank10 = document.getElementById("bank10");
  full11.style.width="100%";
  full11.style.transition="all 3s ease-in-out 0s";
  full11.classList.add("fullscreen2");
   bank10.style.display="flex";
   bank10.style.flex="row";
   bank10.style.wrap="wrap";
}
// ===================================================================
function Banks11(){
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
   var pdetails = document.getElementById("pagedetails");
   move1.classList.remove("move1");
   move2.classList.remove("move2");
   move1.classList.add("move22");
   move2.classList.add("move11");
  h1.innerHTML="";
  h1left.innerHTML="";
  h1.innerHTML=" ";
  h3.innerHTML=" ";
  h3.innerHTML = ""
  h4.innerHTML="";
  h4.innerHTML=" ";
  h3left2.innerHTML=``;
  h3left.innerHTML=``;
  pdetails.style.opacity="100";
  icon.innerHTML="<p class='animate__animated  animate__backOutLeft      animate__slower 200000  ; '></p>"
  h3left.appendChild(banks);
  banks.classList.remove("beforlast3");
  banks.classList.add("beforlast3-1");
  // ======================================
  const full12 = document.getElementById("fullScreen");
  const bank11 = document.getElementById("bank11");
  full12.style.width="100%";
  full12.style.transition="all 3s ease-in-out 0s";
  full12.classList.add("fullscreen2");
   bank11.style.display="flex";
   bank11.style.flex="row";
   bank11.style.wrap="wrap";
}
// ====================================================================
function Banks12(){
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
   var pdetails = document.getElementById("pagedetails");
   move1.classList.remove("move1");
   move2.classList.remove("move2");
   move1.classList.add("move22");
   move2.classList.add("move11");
  h1.innerHTML="";
  h1left.innerHTML="";
  h1.innerHTML=" ";
  h3.innerHTML=" ";
  h3.innerHTML = ""
  h4.innerHTML="";
  h4.innerHTML=" ";
  h3left2.innerHTML=``;
  h3left.innerHTML=``;
  pdetails.style.opacity="100";
  icon.innerHTML="<p class='animate__animated  animate__backOutLeft      animate__slower 200000  ; '></p>"
  h3left.appendChild(banks);
  banks.classList.remove("beforlast3");
  banks.classList.add("beforlast3-1");
  // ======================================
  const full13 = document.getElementById("fullScreen");
  const bank12 = document.getElementById("bank12");
  full13.style.width="100%";
  full13.style.transition="all 3s ease-in-out 0s";
  full13.classList.add("fullscreen2");
   bank12.style.display="flex";
   bank12.style.flex="row";
   bank12.style.wrap="wrap";
}
// ===================================================================
function Banks13(){
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
   var pdetails = document.getElementById("pagedetails");
   move1.classList.remove("move1");
   move2.classList.remove("move2");
   move1.classList.add("move22");
   move2.classList.add("move11");
  h1.innerHTML="";
  h1left.innerHTML="";
  h1.innerHTML=" ";
  h3.innerHTML=" ";
  h3.innerHTML = ""
  h4.innerHTML="";
  h4.innerHTML=" ";
  h3left2.innerHTML=``;
  h3left.innerHTML=``;
  pdetails.style.opacity="100";
  icon.innerHTML="<p class='animate__animated  animate__backOutLeft      animate__slower 200000  ; '></p>"
  h3left.appendChild(banks);
  banks.classList.remove("beforlast3");
  banks.classList.add("beforlast3-1");
  // ======================================
  const full14 = document.getElementById("fullScreen");
  const bank13 = document.getElementById("bank13");
  full14.style.width="100%";
  full14.style.transition="all 3s ease-in-out 0s";
  full14.classList.add("fullscreen2");
   bank13.style.display="flex";
   bank13.style.flex="row";
   bank13.style.wrap="wrap";
}

// ==================================================================
function Banks14(){
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
   var pdetails = document.getElementById("pagedetails");
   move1.classList.remove("move1");
   move2.classList.remove("move2");
   move1.classList.add("move22");
   move2.classList.add("move11");
  h1.innerHTML="";
  h1left.innerHTML="";
  h1.innerHTML=" ";
  h3.innerHTML=" ";
  h3.innerHTML = ""
  h4.innerHTML="";
  h4.innerHTML=" ";
  h3left2.innerHTML=``;
  h3left.innerHTML=``;
  pdetails.style.opacity="100";
  icon.innerHTML="<p class='animate__animated  animate__backOutLeft      animate__slower 200000  ; '></p>"
  h3left.appendChild(banks);
  banks.classList.remove("beforlast3");
  banks.classList.add("beforlast3-1");
  // ======================================
  const full15 = document.getElementById("fullScreen");
  const bank14 = document.getElementById("bank14");
  full15.style.width="100%";
  full15.style.transition="all 3s ease-in-out 0s";
  full15.classList.add("fullscreen2");
   bank14.style.display="flex";
   bank14.style.flex="row";
   bank14.style.wrap="wrap";
}

// ===================================================================
function Banks15(){
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
   var pdetails = document.getElementById("pagedetails");
   move1.classList.remove("move1");
   move2.classList.remove("move2");
   move1.classList.add("move22");
   move2.classList.add("move11");
  h1.innerHTML="";
  h1left.innerHTML="";
  h1.innerHTML=" ";
  h3.innerHTML=" ";
  h3.innerHTML = ""
  h4.innerHTML="";
  h4.innerHTML=" ";
  h3left2.innerHTML=``;
  h3left.innerHTML=``;
  pdetails.style.opacity="100";
  icon.innerHTML="<p class='animate__animated  animate__backOutLeft      animate__slower 200000  ; '></p>"
  h3left.appendChild(banks);
  banks.classList.remove("beforlast3");
  banks.classList.add("beforlast3-1");
  // ======================================
  const full16 = document.getElementById("fullScreen");
  const bank15 = document.getElementById("bank15");
  full16.style.width="100%";
  full16.style.transition="all 3s ease-in-out 0s";
  full16.classList.add("fullscreen2");
   bank15.style.display="flex";
   bank15.style.flex="row";
   bank15.style.wrap="wrap";
}
// =========================================================================
function Banks16(){
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
   var pdetails = document.getElementById("pagedetails");
   move1.classList.remove("move1");
   move2.classList.remove("move2");
   move1.classList.add("move22");
   move2.classList.add("move11");
  h1.innerHTML="";
  h1left.innerHTML="";
  h1.innerHTML=" ";
  h3.innerHTML=" ";
  h3.innerHTML = ""
  h4.innerHTML="";
  h4.innerHTML=" ";
  h3left2.innerHTML=``;
  h3left.innerHTML=``;
  pdetails.style.opacity="100";
  icon.innerHTML="<p class='animate__animated  animate__backOutLeft      animate__slower 200000  ; '></p>"
  h3left.appendChild(banks);
  banks.classList.remove("beforlast3");
  banks.classList.add("beforlast3-1");
  // ======================================
  const full17 = document.getElementById("fullScreen");
  const bank16 = document.getElementById("bank16");
  full17.style.width="100%";
  full17.style.transition="all 3s ease-in-out 0s";
  full17.classList.add("fullscreen2");
   bank16.style.display="flex";
   bank16.style.flex="row";
   bank16.style.wrap="wrap";
}
// ====================================================================
function closeNav( ){
   var bank1 = document.getElementById("bank1");
   var bank4 = document.getElementById("bank4");
   var bank10 = document.getElementById("bank10");
   var bank2 = document.getElementById("bank2");
   var bank3 = document.getElementById("bank3");
   var bank9 = document.getElementById("bank9");
   var bank13 = document.getElementById("bank13");
   var bank11 = document.getElementById("bank11");
   var bank16 = document.getElementById("bank16");

   document.getElementById("fullScreen").style.width="0px";
   bank1.style.display="none";
   bank2.style.display="none";
   bank3.style.display="none";
  bank4.style.display="none";
//   bank5.style.display="none";
//   bank6.style.display="none";
//   bank7.style.display="none";
//   bank8.style.display="none";
  bank9.style.display="none";
  bank10.style.display="none";
  bank11.style.display="none";
//   bank12.style.display="none";
  bank13.style.display="none";
  bank16.style.display="none";
//   bank14.style.display="none";
//   bank15.style.display="none";


}


// =============embassi page===================================================================
document.querySelectorAll(".small-img").forEach(image => {

   image.onclick= function(){
       document.querySelector(".big-img").src = image.getAttribute("src");
       document.querySelector(".big-img").style.width="1350px";
   }
})


document.querySelector(".embassi-basic1").addEventListener("click",function(){
      var bigImage = document.querySelector(".big-img");
      var moreImage = document.querySelector(".moreImage");
      var basic2 = document.querySelector(".embassi-basic2");
      var closebtn = document.querySelector(".embassi-closebtn");
      bigImage.style.width="1350px";
      bigImage.style.transition="all 2s ease-in-out 0s";
      basic2.style.transition="all 2s ease-in-out 0s";
      basic2.style.display="block";
      basic2.style.width="170px";
      moreImage.style.display="none";
      closebtn.style.display="block";

})

document.querySelector(".embassi-closebtn").addEventListener("click",function(){
   // var basic1 = document.querySelector(".embassi-basic");
   var bigImage = document.querySelector(".big-img");
   var moreImage = document.querySelector(".moreImage");
   var basic2 = document.querySelector(".embassi-basic2");
   var closebtn = document.querySelector(".embassi-closebtn");
   bigImage.style.width="1515px";
   bigImage.style.transition="all 2s ease-in-out 0s";
   basic2.style.transition="all 2s ease-in-out 0s";
   basic2.style.display="none";
   basic2.style.width="0px";
   moreImage.style.display="block";
   closebtn.style.display="none";
})

