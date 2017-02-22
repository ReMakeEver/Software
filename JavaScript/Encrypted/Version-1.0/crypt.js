var CRYPT = {
 "Encrypt": function(string){encryptString(string);},
 "Decrypt": function(string){decryptString(string);}
};
function encryptString(string){
 var data = "";
 for(var i = 0;i<string.length;i++){
  if(i==1){data = readOne(string,"en");}
 }
 return data;
}
 function readOne(string,type){
  var data = "";
  if(type=="en"){
   if(string[0]=="a"){data = "b";}if(string[0]=="b"){data = "c";}if(string[0]=="c"){data = "d";}if(string[0]=="d"){data = "e";}
   if(string[0]=="e"){data = "f";}if(string[0]=="f"){data = "g";}if(string[0]=="g"){data = "h";}if(string[0]=="h"){data = "i";}
   if(string[0]=="j"){data = "k";}if(string[0]=="k"){data = "l";}if(string[0]=="l"){data = "m";}if(string[0]=="m"){data = "n";}
   if(string[0]=="o"){data = "p";}if(string[0]=="p"){data = "q";}if(string[0]=="q"){data = "r";}if(string[0]=="r"){data = "s";}
   if(string[0]=="s"){data = "t";}if(string[0]=="t"){data = "u";}if(string[0]=="v"){data = "w";}if(string[0]=="w"){data = "x";}
   if(string[0]=="y"){data = "z";}if(string[0]=="z"){data = "a";}
   return data;
  }else{
   if(type=="de"){
   }
  }
 }
function decryptString(string){
 var dat = string;var len = dat.length;
}
