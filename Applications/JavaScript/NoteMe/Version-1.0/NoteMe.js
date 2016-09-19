var lin = "Linear";
var x = "FillX";var y = "FillY";var xy = "FillXY";
var xH = "FillX,Horizontal";var xV = "FillX,Vertical";var xL = "FillX,VLeft";var xC = "FillX,VCenter";var xR = "FillX,VRight";var xHL = "FillX,Horizontal,VLeft";var xHC = "FillX,Horizontal,VCenter";var xHR = "FillX,Horizontal,VRight";var xVL = "FillX,Vertical,VLeft";var xVC = "FillX,Vertical,VCenter";var xVR = "FillX,Vertical,VRight";
var yH = "FillY,Horizontal";var yV = "FillY,Vertical";var yL = "FillY,VLeft";var yC = "FillY,VCenter";var yR = "FillY,VRight";var yHL = "FillY,Horizontal,VLeft";var yHC = "FillY,Horizontal,VCenter";var yHR = "FillY,Horizontal,VRight";var yVL = "FillY,Vertical,VLeft";var yVC = "FillY,Vertical,VCenter";var yVR = "FillY,Vertical,VRight";
var xyH = "FillXY,Horizontal";var xyV = "FillXY,Vertical";var xyL = "FillXY,VLeft";var xyC = "FillXY,VCenter";var xyR = "FillXY,VRight";var xyHL = "FillXY,Horizontal,VLeft";var xyHC = "FillXY,Horizontal,VCenter";var xyHR = "FillXY,Horizontal,VRight";var xyVL = "FillXY,Vertical,VLeft";var xyVC = "FillXY,Vertical,VCenter";var xyVR = "FillXY,Vertical,VRight";
var black = "#000000";var blue = "#0000FF";var lime = "#00FF00";var red = "#FF0000";var orange = "#FFAA00";var white = "#FFFFFF";
var t = true;var f = false;
var FL = "SlideFromLeft";var TL = "SlideToLeft";var FR = "SlideFromRight";var TR = "SlideToRight";
var h = "hide";var s = "show";
var root = "/storage/emulated/0/NoteMe/";
function OnStart(){
 lay1 = app.CreateLayout(lin, xy);
  fileName = app.CreateText("(none selected)", 1,.2);
  editScroll = app.CreateScroller(1,.5)
   edit = app.CreateTextEdit("", 1);
  menuLay = app.CreateLayout(lin, y);
 newLay = app.CreateLayou(lin, xyVC);
  nameFile = app.CreateTextEdit("", 1);
  createText = app.CreateText("Create Text");
 
 app.AddLayout(lay1);
  lay1.AddChild(fileName);
  lay1.AddChild(editScroll);
   editScroll.AddChild(edit);
  lay1.AddChild(menuLay);
 app.AddLayout(newLay);
  newLay.AddChild(nameFile);
  newLay.AddChild(createText);
 
 lay1.SetBackColor(orange);
  fileName.SetTextColor(white);
  fileName.SetTextSize(72);
  fileName.SetTouchable(t);fileName.SetOnTouch(newFile);
 newLay.SetVisibility(h);
}
 function newFile(){
  newLay.Animate(FR);
 }
