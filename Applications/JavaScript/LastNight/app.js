var lin = "Linear";var abs = "Absolute";
var lan = "Landscape";var por = "Portrait";
var x = "FillX";var y = "fFillY";var xy = "FillXY";
var xH = "FillX,Horizontal";var xV = "FillX,Vertical";var xL = "FillX,VLeft";var xC = "FillX,VCenter";var xR = "FillX,VRight";var xHL = "FillX,Horizontal,VLeft";var xHC = "FillX,Horizontal,VCenter";var xHR = "FillX,Horizontal,VRight";var xVL = "FillX,Vertical,VLeft";var xVC = "FillX,Vertical,VCenter";var xVR = "FillX,Vertical,VRight";
var yH = "FillY,Horizontal";var yV = "FillY,Vertical";var yL = "FillY,VLeft";var yC = "FillY,VCenter";var yR = "FillY,VRight";var yHL = "FillY,Horizontal,VLeft";var yHC = "FillY,Horizontal,VCenter";var yHR = "FillY,Horizontal,VRight";var yVL = "FillY,Vertical,VLeft";var yVC = "FillY,Vertical,VCenter";var yVR = "FillY,Vertical,VRight";
var xyH = "FillXY,Horizontal";var xyV = "FillXY,Vertical";var xyL = "FillXY,VLeft";var xyC = "FillXY,VCenter";var xyR = "FillXY,VRight";var xyHL = "FillXY,Horizontal,VLeft";var xyHC = "FillXY,Horizontal,VCenter";var xyHR = "FillXY,Horizontal,VRight";var xyVL = "FillXY,Vertical,VLeft";var xyVC = "FillXY,Vertical,VCenter";var xyVR = "FillXY,Vertical,VRight";
var black = "#000000";var blue = "#0000FF";var lime = "#00FF00";var night = "#5500AA";var violet = "#5500FF";var red = "#FF0000";var white = "#FFFFFF";
var root = "/storage/sdcard0/";
var game = root+"LastNight/";var gameJs = game+"game.js";var gameHt = game+"game.html";var startHt = game+"start.html";
var link1 = "http://software.remakenow.us/Applications/JavaScript/LastNight/game.html";var link2 = "http://software.remakenow.us/Applications/JavaScript/LastNight/start.html";var link3= "http://software.remakenow.us/Applications/JavaScript/LastNight/game.js";var link4 = "http://software.remakenow.us/Software/ThreeJS/three.min.js";
function OnStart(){
 lay1 = app.CreateLayout(abs, xyV);
  titleLay = app.CreateLayout(lin xH);
   title1 = app.CreateText("<i>Last</i>", .5,.2, "Html");
   title2 = app.CreateText("<i>Night</i>", .5,.2, "Html");
 
 app.AddLayout(lay1);
  lay1.AddChild(titleLay);
   titleLay.AddChild(title1);
   titleLay.AddChild(title2);
 
  gameTitle.SetSize(1,.2);
  gameTitle.SetPosition(.4,.0);
   title1.SetTextSize(72);
   title1.SetTextColor(violet);
   title2.SetTextSize(72);
   title2.SetTextColor(night);
 
 app.SetOrientation(lan);
 exist = app.FolderExists(root);
 if(exist==false){
  app.MakeFolder(game);
 }else{
 }
}
