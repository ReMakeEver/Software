var head = document.createElement("SCRIPT");var hSrc = document.createTextNode("var config = { apiKey: 'AIzaSyD8gNNEkjf85nJREgGEAgq1R6yJkWi0H-E', authDomain: 'dataseg-9badc.firebaseapp.com', databaseUrl: 'dataseg-9badc.firebaseio.com', storageBucket: 'dataseg-9badc.appspot.com', }; firebase.initializeApp(config);");head.appendChild(hSrc);
var fire = document.createElement("SCRIPT");var fSrc = document.createAttribute("src");fSrc.value = "http://software.remakenow.us/JavaScript/DataSeg/external/fire.js";fire.setAttributeNode(fSrc);
var table = document.createElement("SCRIPT");var tSrc = document.createAttribute("src");tSrc.value = "http://software.remakenow.us/JavaScript/DataSeg/parts/table.js";table.setAttributeNode(tSrc);
function addData(){
 document.head.appendChild(head);
 document.getElementsByTagName("DIV")[0].appendChild(fire);
 document.getElementsByTagName("DIV")[0].appendChild(table);
}
