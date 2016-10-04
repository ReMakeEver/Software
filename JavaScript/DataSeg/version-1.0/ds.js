var fire = document.createElement("SCRIPT");var fSrc = document.createAttribute("src");fSrc.value = "http://software.remakenow.us/JavaScript/DataSeg/external/fire.js";fire.setAttributeNode(fSrc);
var head = document.createElement("SCRIPT");var hSrc = document.createTextNode("var config = { apiKey: 'AIzaSyARjRu2rWLV8h8hh3_XCCAjhvSkx0umGIA', authDomain: 'remakenow-9726a.firebaseapp.com', databaseUrl: 'remakenow-9726a.firebaseio.com', storageBucket: 'remakenow-9726a.appspot.com', }; firebase.initializeApp(config);");head.appendChild(hSrc);
function addData(){
 document.head.appendChild(head);
 document.getElementsByTagName("DIV")[0].appendChild(fire);
}
