var lin = "Linear";
var x = "FillX";var y = "FillY";var xy = "FillXY";
var xH = "FillX,Horizontal";var xV = "FillX,Vertical";var xL = "FillX,VLeft";var xC = "FillX,VCenter";var xR = "FillX,VRight";var xHL = "FillX,Horizontal,VLeft";var xHC = "FillX,Horizontal,VCenter";var xHR = "FillX,Horizontal,VRight";var xVL = "FillX,Vertical,VLeft";var xVC = "FillX,Vertical,VCenter";var xVR = "FillX,Vertical,VRight";
var yH = "FillY,Horizontal";var yV = "FillY,Vertical";var yL = "FillY,VLeft";var yC = "FillY,VCenter";var yR = "FillY,VRight";var yHL = "FillY,Horizontal,VLeft";var yHC = "FillY,Horizontal,VCenter";var yHR = "FillY,Horizontal,VRight";var yVL = "FillY,Vertical,VLeft";var yVC = "FillY,Vertical,VCenter";var yVR = "FillY,Vertical,VRight";
var xyH = "FillXY,Horizontal";var xyV = "FillXY,Vertical";var xyL = "FillXY,VLeft";var xyC = "FillXY,VCenter";var xyR = "FillXY,VRight";var xyHL = "FillXY,Horizontal,VLeft";var xyHC = "FillXY,Horizontal,VCenter";var xyHR = "FillXY,Horizontal,VCenter";var xyHR = "FillXY,Horizontal,VRight";var xyVL = "FillXY,Vertical,VLeft";var xyVC = "FillXY,Vertical,VCenter";var xyVR = "FillXY,Vertical,VRight";
var srcReady;
var src = "/storage/emulated/0/GoBrowse/";var root = "/storage/emulated/0/GB/";var local = "file://"+root;
function OnStart(){
 lin = app.CreateLayout(lin, xyV);
  web = app.CreateWebView(1,1);
  down = app.CreateDownloader();
 
 app.AddLayout(lin);
  lin.AddChild(web);
 
 if(app.FolderExists(root)==f){
  app.MakeFolder(root);
 }else{
  if(app.FolderExists(root)==t){
   loadFiles();
  }
 }
 if(app.FolderExists(src)==f){
  app.MakeFolder(src);
 }else{
  if(app.FolderExists(src)==t){
   srcReady = "ready";
  }
 }
}
 function loadFiles(){
  var fold = app.ListFolder(root);
  
 }
function OnData(){
}
function OnPause(){
}
