var SCENE = {
 "NewScene": function(back,animated){
  var canvas = document.createElement("CANVAS");
  var width = document.createAttribute("width");width.value = window.innerWidth;canvas.setAttributeNode(width);
  var height = document.createAttribute("height");height.value = window.innerHeight;canvas.setAttributeNode(height);
  if(back=="morning"){
   if(animated=="yes"){
   }else{
    if(animated=="no"){
     var context = canvas.getContext("2d");
     var gradient = canvas.createLinearGradient(0,window.innerWidth,0,0);
     gradient.addColorStop(0, "#FF5500");gradient.addColorStop(1, "#0088FF");
     context.fillStyle = gradient;context.fillRect(0,0,window.innerWidth,window.innerHeight);
    }
   }
  }
 }
};
