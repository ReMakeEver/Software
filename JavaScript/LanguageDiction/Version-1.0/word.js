var english = document.createElement("SCRIPT");var enSrc = document.createAttribute("src");enSrc.value = "http://software.remakenow.us/JavaScript/LanguageDiction/English/language.js";english.setAttributeNode(enSrc);
var latin = document.createElement("SCRIPT");var laSrc = document.createAttribute("src");laSrc.value = "http://software.remakenow.us/JavaScript/LanguageDiction/Latin/language.js";latin.setAttributeNode(laSrc);
function addWords(){
 document.getElementByTagName("DIV")[0].appendChild(english);
 document.getElementByTagName("DIV")[0].appendChild(latin);
}
