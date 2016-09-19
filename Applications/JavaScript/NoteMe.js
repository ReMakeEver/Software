var lin = "Linear";
var x = "FillX";var y = "FillY";var xy = "FillXY";
var xH = "FillX,Horizontal";var xV = "FillX,Vertical";var xL = "FillX,VLeft";var xC = "FillX,VCenter";var xR = "FillX,VRight";var xHL = "FillX,Horizontal,VLeft";var xHC = "FillX,Horizontal,VCenter";var xHR = "FillX,Horizontal,VRight";var xVL = "FillX,Vertical,VLeft";var xVC = "FillX,Vertical,VCenter";var xVR = "FillX,Vertical,VRight";
var yH = "FillY,Horizontal";var yV = "FillY,Vertical";var yL = "FillY,VLeft";var yC = "FillY,VCenter";var yR = "FillY,VRight";var yHL = "FillY,Horizontal,VLeft";var yHC = "FillY,Horizontal,VCenter";var yHR = "FillY,Horizontal,VRight";var yVL = "FillY,Vertical,VLeft";var yVC = "FillY,Vertical,VCenter";var yVR = "FillY,Vertical,VRight";
var xyH = "FillXY,Horizontal";var xyV = "FillXY,Vertical";var xyL = "FillXY,VLeft";var xyC = "FillXY,VCenter";var xyR = "FillXY,VRight";var xyHL = "FillXY,Horizontal,VLeft";var xyHC = "FillXY,Horizontal,VCenter";var xyHR = "FillXY,Horizontal,VRight";var xyVL = "FillXY,Vertical,VLeft";var xyVC = "FillXY,Vertical,VCenter";var xyVR = "FillXY,Vertical,VRight";
var black = "#000000";var blue = "#0000FF";var lime = "#00FF00";var red = "#FF0000";
var t = true;var f = false;
var FL = "SlideFromLeft";var TL = "SlideToLeft";var FR = "SlideFromRight";var TR = "SlideToRight";
var h = "hide";var s = "show";
function OnStart(){
 lay1 = app.CreateLayout(lin, xy);
 
 app.AddLayout(lay1);
}
