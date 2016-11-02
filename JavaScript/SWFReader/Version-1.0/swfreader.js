function getSWF(filename){
 var fn = filename.substring();
 var request = new XMLHttpRequest();
 request.open("GET", fn, true);
 request.onreadystatechange = function(){
  if(request.readyState===4){
   var allText = request.responseText;
  }
 }
 request.Send(null);
}
