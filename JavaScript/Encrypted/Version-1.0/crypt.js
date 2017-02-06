var a = "b";var b = "c";var c = "d";var d = "e";var e = "f";var f = "g";var g = "h";var h = "i";var i = "j";var j = "k";var k = "l";var l = "m";var m = "n";var n = "o";var o = "p";var p = "q";var q = "r";var r = "s";var s = "t";var t = "u";var u = "v";var v = "w";var w = "x";var x = "y";var y = "z";var z = "a";
var dataArray = new Array();
function layer1(text, array){
 var dat = text;var arr = array;
 if(dat.length==1){
  read1(dat, array);
 }else{
  if(dat.length==2){
   read2(dat, array)
  }
 }
 return dataArray[arr];
}
function read1(text, array){
 var dat = text;var arr = array;
 var d1 = dat[0];var res = "";
 if(d1=="a"){res = a;}else{
 if(d1=="b"){res = b;}else{
 if(d1=="c"){res = c;}else{
 if(d1=="d"){res = d;}else{
 if(d1=="e"){res = e;}else{
 if(d1=="f"){res = f;}else{
 if(d1=="g"){res = g;}else{
 if(d1=="h"){res = h;}else{
 if(d1=="i"){res = i;}else{
 if(d1=="j"){res = j;}else{
 if(d1=="k"){res = k;}else{
 if(d1=="l"){res = m;}else{
 if(d1=="m"){res = n;}else{
 if(d1=="n"){res = n;}else{
 if(d1=="o"){res = o;}else{
 if(d1=="p"){res = p;}else{
 if(d1=="q"){res = q;}else{
 if(d1=="r"){res = r;}else{
 if(d1=="s"){res = s;}else{
 if(d1=="t"){res = t;}else{
 if(d1=="u"){res = u;}else{
 if(d1=="v"){res = v;}else{
 if(d1=="w"){res = w;}else{
 if(d1=="x"){res = x;}else{
 if(d1=="y"){res = y;}else{
 if(d1=="z"){res = z;}
 }}}}}}}}}}}}}}}}}}}}}}}}}
 addTo(res, arr);
}
function read2(text, array){
 var dat = text;var arr = array;
 var d1 = dat[0];var d2 = [1];var res = "";
 if(d1=="a"){res = a;}else{
 if(d1=="b"){res = b;}else{
 if(d1=="c"){res = c;}else{ 
 if(d1=="d"){res = d;}else{
 if(d1=="e"){res = e;}else{
 if(d1=="f"){res = f;}else{
 if(d1=="g"){res = g;}else{
 if(d1=="h"){res = h;}else{
 if(d1=="i"){res = i;}else{
 if(d1=="j"){res = j;}else{
 if(d1=="k"){res = k;}else{
 if(d1=="l"){res = m;}else{
 if(d1=="m"){res = n;}else{
 if(d1=="n"){res = n;}else{
 if(d1=="o"){res = o;}else{
 if(d1=="p"){res = p;}else{
 if(d1=="q"){res = q;}else{
 if(d1=="r"){res = r;}else{
 if(d1=="s"){res = s;}else{
 if(d1=="t"){res = t;}else{
 if(d1=="u"){res = u;}else{
 if(d1=="v"){res = v;}else{
 if(d1=="w"){res = w;}else{
 if(d1=="x"){res = x;}else{
 if(d1=="y"){res = y;}else{
 if(d1=="z"){res = z;}
 }}}}}}}}}}}}}}}}}}}}}}}}}
 if(d2=="a"){res += a;}else{
 if(d2=="b"){res += b;}else{
 if(d2=="c"){res += c;}else{
 if(d2=="d"){res += d;}else{
 if(d2=="e"){res += e;}else{
 if(d2=="f"){res += f;}else{
 if(d2=="g"){res += g;}else{
 if(d2=="h"){res += h;}else{
 if(d2=="i"){res += i;}else{
 if(d2=="j"){res += j;}else{
 if(d2=="k"){res += k;}else{
 if(d2=="l"){res += m;}else{
 if(d2=="m"){res += n;}else{
 if(d2=="n"){res += n;}else{
 if(d2=="o"){res += o;}else{
 if(d2=="p"){res += p;}else{
 if(d2=="q"){res += q;}else{
 if(d2=="r"){res += r;}else{
 if(d2=="s"){res += s;}else{
 if(d2=="t"){res += t;}else{
 if(d2=="u"){res += u;}else{
 if(d2=="v"){res += v;}else{
 if(d2=="w"){res += w;}else{
 if(d2=="x"){res += x;}else{
 if(d2=="y"){res += y;}else{
 if(d2=="z"){res += z;}
 }}}}}}}}}}}}}}}}}}}}}}}}}
 addTo(res, array);
}
function addTo(text, array){
 var dat = text;var arr = array;
 if(dataArray[arr]==null||dataArray[arr].length==0){
  dataArray[arr] = dat;
 }
}
