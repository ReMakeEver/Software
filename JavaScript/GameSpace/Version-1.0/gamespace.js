function newGame(){
}
newGame.prototype = {
 scene: {
  value: function(){
   var style = document.createElement("STYLE");var sTxt1 = "body{ margin: 0; }";var sTxt2 = "canvas{ width:100%;height:100%; }";var sTxt = document.createTextNode(sTxt1+sTxt2);style.appendChild(sTxt);
   var can = document.createElement("CANVAS");
  },
  enumerable: true,
  configurable: true,
  writable: true
 }
}
newGame.prototype.constructor = NG;
var ng = new NG();
