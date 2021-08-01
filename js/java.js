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