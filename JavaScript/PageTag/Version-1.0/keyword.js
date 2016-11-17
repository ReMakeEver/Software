var keyLog = "";
var elementObject = "";
var key = "itemscope  itemtype='http://remakenow.us/word' itemprop='keyword'>";
function Keyword(word, element){
 this.word = word;
 this.element = element;
}
Keyword.prototype = {
 word:{
  enumberable: true,
  configurable: true,
  writable: true
 },
 add:{ 
  value: function(word, element){
   var object = document.getElementsByTagName(element);
   for(var i = 0;i<object.length;i++){
    if(object[i].innerHTML==word){
     var elementObject = "<"+object[i].nodeName+key+word+"</"+object[i].nodeName+">";
     keyLog += elementObject;
    }
   }
  },
  enumerable: true,
  configurable: true,
  writable: true
 }
}
var keyword = new Keyword();
export { keyword, Keyword };
