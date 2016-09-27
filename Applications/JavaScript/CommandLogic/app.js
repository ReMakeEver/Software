var lin = "Linear";var abs = "Absolute";
var x = "FillX";var y = "FillY";var xy = "FillXY";
var xH = "FillX,Horizontal";var xV = "FillX,Vertical";var xL = "FillX,VLeft";var xC = "FillX,VCenter";var xR = "FillX,VRight";var xHL = "FillX,Horizontal,VLeft";var xHC = "FillX,Horizontal,VCenter";var xHR = "FillX,Horizontal,VRight";var xVL = "FillX,Vertical,VLeft";var xVC = "FillX,Vertical,VCenter";var xVR = "FillX,Vertical,VRight";
var yH = "FillY,Horizontal";var yV = "FillY,Vertical";var yL = "FillY,VLeft";var yC = "FillY,VCenter";var yR = "FillY,VRight";var yHL = "FillY,Horizontal,VLeft";var yHC = "FillY,Horizontal,VCenter";var yHR = "FillY,Horizontal,VRight";var yVL = "FillY,Vertical,VLeft";var yVC = "FillY,Vertical,VCenter";var yVR = "FillY,Vertical,VRight";
var xyH = "FillXY,Horizontal";var xyV = "FillXY,Vertical";var xyL = "FillXY,VLeft";var xyC = "FillXY,VCenter";var xyR = "FillXY,VRight";var xyHL = "FillXY,Horizontal,VLeft";var xyHC = "FillXY,Horizontal,VCenter";var xyHR = "FillXY,Horizontal,VRight";var xyVL = "FillXY,Vertical,VLeft";var xyVC = "FillXY,Vertical,VCenter";var xyVR = "FillXY,Vertical,VRight";
var t = true;var f = false;
var s = "Show";var h = "Hide";
var root = "/storage/sdcard0/";
var game = root+"CommandLogic/";var gameJs = game+"game.js";var gameEx = game+"three.min.js";var gameHt = game+"game.html";var startJs = game+"start.js";var startHt = game+"start.html";
var gameFile1 = "http://software.remakenow.us/Applications/JavaScript/CommandLogic/game.js";var gameFile2 = "http://software.remakenow.us/Extensions/three.min.js";var gameFile3 = "http://software.remakenow.us/Applications/JavaScript/CommandLogic/game.html";
var startFile1 = "http://software.remakenow.us/Applications/JavaScript/CommandLogic/start.js";var startFile2 = "http://software.remakenow.us/Applications/JavaScript/CommandLogic/start.html";
function OnStart(){
 download = app.CreateDownloader();
 
 gameExist = app.FolderExists(game);gjsExist = app.FileExists(gameJs);gexExist = app.FileExists(gameEx);ghtExist = app.FileExists(gameHt);
 sjsExist = app.FileExists(startJs);shtExist = app.FileExists(startHt);
 if(gameExist==f){
  app.CreateFolder(game);
 }else{
  if(gjsExist==f){
   download.Download(gameFile1, game);
  }else{
   if(gexExist==f){
    download.Download(gameFile2, game);
   }else{
    if(ghtExist==f){
     download.Download(gameFile3, game);
    }else{
     if(sjsExist==f){
      download.Download(startFile1, game);
    }else{
     if(shtExist==f){
      download.Download(startFile2, game);
     }
    }
   }
  }
 }
}
