var a = "a";var b = "b";var c = "c";var d = "d";var e = "e";var f = "f";var g = "g":var h = "h";var i = "i";var j = "j";var k = "k";var l = "l";var m = "m";var n = "n";var o = "o";var p = "p";var q = "q";var r = "r";var s = "s";var t = "t";var u = "u";var v = "v";var w = "w";var x = "x";var y = "y";var z = "z";
var dataArray = new Array();
function layer1(text, array){
 var dat = text;var arr = array;
 if(dat.length==1){
  read1(dat, arr, dat.length);
 }
 return dataArray[arr];
}
function read1(text, array, value){
 var dat = text;var array = array;var val = value;
 var da = dat[0];
 if(val==null||val.length==1){
  if(da=="a"){addTo(a, arr);}else{
  if(da=="b"){addTo(b, arr);}else{
  if(da=="c"){addTo(c, arr);}else{
  if(da=="d"){addTo(d, arr);}else{
  if(da=="e"){addTo(e, arr);}else{
  if(da=="f"){addTo(f, arr);}else{
  if(da=="g"){addTo(g, arr);}else{
  if(da=="h"){addTo(h, arr);}else{
  if(da=="i"){addTo(i, arr);}else{
  if(da=="j"){addTo(j, arr);}else{
  if(da=="k"){addTo(k, arr);}else{
  if(da=="l"){addTo(l, arr);}else{
  if(da=="m"){addTo(m, arr);}else{
  if(da=="n"){addTo(n, arr);}else{
  if(da=="o"){addTo(o, arr);}else{
  if(da=="p"){addTo(p, arr);}else{
  if(da=="q"){addTo(q, arr);}else{
  if(da=="r"){addTo(r, arr);}else{
  if(da=="s"){addTo(s, arr);}else{
  if(da=="t"){addTo(t, arr);}else{
  if(da=="u"){addTo(u, arr);}else{
  if(da=="v"){addTo(v, arr);}else{
  if(da=="w"){addTo(w, arr);}else{
  if(da=="x"){addTo(x, arr);}else{
  if(da=="y"){addTO(y, arr);}
  }}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}
 }
}
function addTo(text, array){
 var dat = text;var arr = array;
 if(dataArray[arr]==null||dataArray[arr].length==0){
  dataArray[arr] = dat;
 }
}
