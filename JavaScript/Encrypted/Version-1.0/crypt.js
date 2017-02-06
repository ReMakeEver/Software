var a = "a";var b = "b";var c = "c";var d = "d";var e = "e";var f = "f";var g = "g":var h = "h";var i = "i";var j = "j";var k = "k";var l = "l";var m = "m";var n = "n";var o = "o";var p = "p";var q = "q";var r = "r";var s = "s";var t = "t";var u = "u";var v = "v";var w = "w";var x = "x";var y = "y";var z = "z";
var dataArray = new Array();
function layer1(text, array){
 var dat = text;var arr = array;
 if(dat.length==1){
  read1(dat, array);
 }else{
  if(dat.length==2){
   read2(dat, array);
  }else{
   if(dat.length==3){
    read3(dat, array);
   }
  }
 }
 return dataArray[arr];
}
function read1(text, array){
 var dat = text;var arr = array;
 var d1 = dat[0];var res = "";
 if(d1=="a"){res = b;}else{
 if(d1=="b"){res = c;}else{
 if(d1=="c"){res = d;}else{
 if(d1=="d"){res = e;}else{
 if(d1=="e"){res = f;}else{
 if(d1=="f"){res = g;}else{
 if(d1=="g"){res = h;}else{
 if(d1=="h"){res = i;}else{
 if(d1=="i"){res = j;}else{
 if(d1=="j"){res = k;}else{
 if(d1=="k"){res = l;}else{
 if(d1=="l"){res = m;}else{
 if(d1=="m"){res = n;}else{
 if(d1=="n"){res = o;}else{
 if(d1=="o"){res = p;}else{
 if(d1=="p"){res = q;}else{
 if(d1=="q"){res = r;}else{
 if(d1=="r"){res = s;}else{
 if(d1=="s"){res = t;}else{
 if(d1=="t"){res = u;}else{
 if(d1=="u"){res = v;}else{
 if(d1=="v"){res = w;}else{
 if(d1=="w"){res = x;}else{
 if(d1=="x"){res = y;}else{
 if(d1=="y"){res = z;}else{
 if(d1=="z"){res = a;}
 }}}}}}}}}}}}}}}}}}}}}}}}}
 addTo(res, arr);
}
function read2(text, array){
 var dat = text;var arr = array;
 var d1 = dat[0];var d2 = dat[1];var res = "";
 if(d1=="a"){res = c;}else{
 if(d1=="b"){res = d;}else{
 if(d1=="c"){res = e;}else{ 
 if(d1=="d"){res = f;}else{
 if(d1=="e"){res = g;}else{
 if(d1=="f"){res = h;}else{
 if(d1=="g"){res = i;}else{
 if(d1=="h"){res = j;}else{
 if(d1=="i"){res = k;}else{
 if(d1=="j"){res = l;}else{
 if(d1=="k"){res = m;}else{
 if(d1=="l"){res = n;}else{
 if(d1=="m"){res = o;}else{
 if(d1=="n"){res = p;}else{
 if(d1=="o"){res = q;}else{
 if(d1=="p"){res = r;}else{
 if(d1=="q"){res = s;}else{
 if(d1=="r"){res = t;}else{
 if(d1=="s"){res = u;}else{
 if(d1=="t"){res = v;}else{
 if(d1=="u"){res = w;}else{
 if(d1=="v"){res = x;}else{
 if(d1=="w"){res = y;}else{
 if(d1=="x"){res = z;}else{
 if(d1=="y"){res = a;}else{
 if(d1=="z"){res = b;}
 }}}}}}}}}}}}}}}}}}}}}}}}}
 if(d2=="a"){res += c;}else{
 if(d2=="b"){res += d;}else{
 if(d2=="c"){res += e;}else{
 if(d2=="d"){res += f;}else{
 if(d2=="e"){res += g;}else{
 if(d2=="f"){res += h;}else{
 if(d2=="g"){res += i;}else{
 if(d2=="h"){res += j;}else{
 if(d2=="i"){res += k;}else{
 if(d2=="j"){res += l;}else{
 if(d2=="k"){res += m;}else{
 if(d2=="l"){res += n;}else{
 if(d2=="m"){res += o;}else{
 if(d2=="n"){res += p;}else{
 if(d2=="o"){res += q;}else{
 if(d2=="p"){res += r;}else{
 if(d2=="q"){res += s;}else{
 if(d2=="r"){res += t;}else{
 if(d2=="s"){res += u;}else{
 if(d2=="t"){res += v;}else{
 if(d2=="u"){res += w;}else{
 if(d2=="v"){res += x;}else{
 if(d2=="w"){res += y;}else{
 if(d2=="x"){res += z;}else{
 if(d2=="y"){res += a;}else{
 if(d2=="z"){res += b;}
 }}}}}}}}}}}}}}}}}}}}}}}}}
 addTo(res, array);
}
function read3(text, array){
 var dat = text;var arr = array;
 var d1 = dat[0];var d2 = dat[1];var d3 = dat[2];var res = "";
 if(d1=="a"){res = d;}else{
 if(d1=="b"){res = e;}else{
 if(d1=="c"){res = f;}else{
 if(d1=="d"){res = g;}else{
 if(d1=="e"){res = h;}else{
 if(d1=="f"){res = i;}else{
 if(d1=="g"){res = j;}else{
 if(d1=="h"){res = k;}else{
 if(d1=="i"){res = l;}else{
 if(d1=="j"){res = m;}else{
 if(d1=="k"){res = n;}else{
 if(d1=="l"){res = o;}else{
 if(d1=="m"){res = p;}else{
 if(d1=="n"){res = q;}else{
 if(d1=="o"){res = r;}else{
 if(d1=="p"){res = s;}else{
 if(d1=="q"){res = t;}else{
 if(d1=="r"){res = u;}else{
 if(d1=="s"){res = v;}else{
 if(d1=="t"){res = w;}else{
 if(d1=="u"){res = x;}else{
 if(d1=="v"){res = y;}else{
 if(d1=="w"){res = z;}else{
 if(d1=="x"){res = a;}else{
 if(d1=="y"){res = b;}else{
 if(d1=="z"){res = c;}
 }}}}}}}}}}}}}}}}}}}}}}}}}
 if(d2=="a"){res += a;}else{
 if(d2=="b"){res += b;}else{
 if(d2=="c"){res += c;}else{
 if(d2=="d"){res += d;}else{
 if(d2=="e"){res += e;}else{
 if(d2=="f"){res += f;}else{
 if(d2=="g"){res += g;}else{
 if(d2=="h"){res += h;}else{
 if(d2=="h"){res += h:}else{
 if(d2=="i"){res += i;}else{
 if(d2=="j"){res += k;}else{
 if(d2=="l"){res += l;}else{
 if(d2=="m"){res += m;}else{
 if(d2=="n"){res += n;}else{
 
 addTo(res, array);
}
function addTo(text, array){
 var dat = text;var arr = array;
 if(dataArray[arr]==null||dataArray[arr].length==0){
  dataArray[arr] = dat;
 }
}
