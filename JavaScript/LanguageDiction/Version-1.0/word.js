var english = document.createElement("SCRIPT");var enSrc = document.createAttribute("src");enSrc.value = "http://software.remakenow.us/JavaScript/LanguageDictioon/English/words.js";english.setAttributeNode(enSrc);
function addWords(){
 document.getElementByTagName("DIV")[0].appendChild(english);
}
