function getPoints(text){
 var y = text;
 var x = y.replace("#","");
 for(var i = 0;i<x.length;i++){
  var len = x.length;
  if(len=="1"){return gp1(x);}else{
   if(len=="2"){return gp2(x);}else{
    if(len=="3"){return gp3(x);}else{
     if(len=="4"){return gp4(x);}else{
      if(len=="5"){return gp5(x);}else{
       if(len=="6"){return gp6(x);}
      }
     }
    }
   }
  }
 }
}
function gp1(text){
 var x = text;
 var p1 = 0;
 if(x[0]=="0"){p1 = 0;}else{if(x[0]=="1"){p1 = 1;}else{if(x[0]=="2"){p1 = 2;}else{if(x[0]=="3"){p1 = 3;}else{if(x[0]=="4"){p1 = 4;}else{if(x[0]=="5"){p1 = 5;}else{if(x[0]=="6"){p1 = 6;}else{if(x[0]=="7"){p1 = 7;}else{if(x[0]=="8"){p1 = 8;}else{if(x[0]=="9"){p1 = 9;}else{if(x[0]=="a"||x[0]=="A"){p1 = 10;}else{if(x[0]=="b"||x[0]=="B"){p1 = 11;}else{if(x[0]=="c"||x[0]=="C"){p1 = 12;}else{if(x[0]=="d"||x[0]=="D"){p1 = 13;}else{if(x[0]=="e"||x[0]=="E"){p1 = 14;}else{if(x[0]=="f"||x[0]=="F"){p1 = 15;}}}}}}}}}}}}}}}
 }
 var points = p1;
 return points;
}
function gp2(text){
 var x = text;
 var p1 = 0;var p2 = 0;
 if(x[0]=="0"){p1 = 0;}else{if(x[0]=="1"){p1 = 1;}else{if(x[0]=="2"){p1 = 2;}else{if(x[0]=="3"){p1 = 3;}else{if(x[0]=="4"){p1 = 4;}else{if(x[0]=="5"){p1 = 5;}else{if(x[0]=="6"){p1 = 6;}else{if(x[0]=="7"){p1 = 7;}else{if(x[0]=="8"){p1 = 8;}else{if(x[0]=="9"){p1 = 9;}else{if(x[0]=="a"||x[0]=="A"){p1 = 10;}else{if(x[0]=="b"||x[0]=="B"){p1 = 11;}else{if(x[0]=="c"||x[0]=="C"){p1 = 12;}else{if(x[0]=="d"||x[0]=="D"){p1 = 13;}else{if(x[0]=="e"||x[0]=="E"){p1 = 14;}else{if(x[0]=="f"||x[0]=="F"){p1 = 15;}}}}}}}}}}}}}}} 
 if(x[1]=="0"){p2 = 0;}else{if(x[1]=="1"){p2 = 1;}else{}}
 var points = p1+p2;
 return points;
}
function gp3(text){
 var x = text;
 var p1 = 0;var p2 = 0;var p3 = 0;
 var points = p1+p2+p3;
 return points;
}
function gp4(text){
 var x = text;
 var p1 = 0;var p2 = 0;var p3 = 0;var p4 = 0;
 var points = p1+p2+p3+p4;
 return points;
}
function gp5(text){
 var x = text;
 var p1 = 0;var p2 = 0;var p3 = 0;var p4 = 0;var p5 = 0;
 var points = p1+p2+p3+p4+p5;
 return points;
}
function gp6(text){
 var x = text;
 var p1 = 0;var p2 = 0;var p3 = 0;var p4 = 0;var p5 = 0;var p6 = 0;
 var points = p1+p2+p3+p4+p5+p6;
 return points;
}
