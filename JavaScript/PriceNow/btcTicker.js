function getBTCPrice(id){
 var xml;
 if(window.XMLHttpRequest){
  xml = new XMLHttpRequest();
 }else{
  xml = new ActiveXObject("Microsoft.XMLHTTP");
 }
 xml.onreadystatechange = function(){
  if(this.readyState == 4 && this.status == 200){
   var text = this.responseText;
   var price = JSON.parse(text);
   document.getElementById(id).innerHTML = price;
  }
 };
 xml.open("GET", "https://api.cryptonator.com/api/ticker/btc-usd", true);
 xml.send();
}
