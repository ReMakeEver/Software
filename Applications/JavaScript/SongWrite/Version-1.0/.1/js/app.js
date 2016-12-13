var lin = "Linear";
var x = "FillX";var y = "FillY";var xy = "FillXY";
var xH = "FillX,Horizontal";var xV = "FillX,Vertical";var xHL = "FillX,Horizontal,VLeft";var xHC = "FillX,Horizontal,VCenter";var xHR = "FillX,Horizontal,VRight";var xVL = "FillX,Vertical,VLeft";var xVC = "FillX,Vertical,VCenter";var xVR = "FillX,Vertical,VRight";
var yH = "FIllY,Horizontal";var yV = "FillY,Vertical";var yHL = "FillY,Horizontal,VLeft";var yHC = "FillY,Horizontal,VCenter";var yHR = "FillY,Horizontal,VRight";var yVL = "FillY,Vertical,VLeft";var yVC = "FillY,Vertical,VCenter";var yVR = "FillY,Vertical,VRight";
var xyH = "FillXY,Horizontal";var xyV = "FillXY,Vertical";var xyHL = "FillXY,Horizontal,VLeft";var xyHC = "FillXY,Horizontal,VCenter";var xyHR = "FillXY,Horizontal,VRight";var xyVL = "FillXY,Horizontal,VLeft";var xyVC = "FillXY,Vertical,VCenter";var xyVR = "FillXY,Vertical,VRight";
var t = true;var f = false;var fl = "SlideFromLeft";var tl = "SlideToLeft";var fr = "SlideFromRight";var tr = "SlideToRight";var fb = "SlideFromBottom";var tb = "SlideToBottom";var ft = "SlideFromTop";var tt = "SlideToTop";
var l = "Landscape";var p = "Portrait";
var black = "#000000";var blue = "#0000FF";var lime = "#00FF00";var aqua = "#00FFFF";var red = "#FF0000";var orange = "#FFAA00";var white = "#FFFFFF";
var comp = "/sdcard/ReMakeEver/SongWrite";var root = "/sdcard/SongWrite";
function OnStart(){
 main = app.CreateLayout(lin, xyV);
 
 app.SetOrientation(p);
 app.PreventScreenLock(t);
 
 if(app.FolderExists(comp)==f){app.MakeFolder(comp);}
 if(app.FolderExists(root)==f){app.MakeFolder(root);}
}
function OnData(){
}
function OnPause(){
}
function GetKey(){
}
