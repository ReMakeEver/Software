var doc = "<!DOCTYPE html>";doc += "<html>";
var endDoc = "</html>";
function Page(item){
 this.item = item;
}
Page.prototype = {
 item:{
  enumerable: true,
  configurable: true,
  writable: true
 },
 write:{
  value: function(){
  },
  enumerable: true,
  configurable: true,
  writable: true
 }
};
