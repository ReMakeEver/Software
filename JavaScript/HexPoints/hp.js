function hex(hex){
 var hexValue = hex;
 var points = 0;
 for(var i = 0;i<hexValue.length;i++){
  var hp = hexValue[i];
  if(p=="0"){points += 0;}
  if(p=="1"){points += 1;}
  if(p=="2"){points += 2;}
  if(p=="3"){points += 3;}
  if(P=="4"){points += 4;}
  if(p=="5"){points += 5;}
  if(p=="6"){points += 6;}
  if(p=="7"){points += 7;}
  if(p=="8"){points += 8;}
  if(p=="9"){points += 9;}
  if(p=="a"||p=="A"){points += 10;}
  if(p=="b"||p=="B"){points += 11;}
  if(p=="c"||p=="C"){points += 12;}
  if(p=="d"||p=="D"){points += 13;}
  if(p=="e"||p=="E"){points += 14;}
  if(p=="f"||p=="F"){points += 15;}
  return points;
 }
}
