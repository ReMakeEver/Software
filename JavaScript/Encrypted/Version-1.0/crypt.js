var datArr = new Array();
function layer1(text, array){
 var dat = text;var arr = array;
 if(dat.length==1){
  read1(dat, arr);
 }
}
function read1(text, array){
 var dat = text;var arr = array;
 var da = dat[0];var res = "";
 if(da=="a"){res = "b";}
 addTo(res, arr);
}
function addTo(text, array){
 var dat = text;var arr = array;
 if(dataArray[arr]==null||dataArray[arr]==undefined){
  dataArray[arr] = dat;
 }
}
