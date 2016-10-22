var lin = "Linear";var abs = "Absolute";
var x = "FillX";var y = "FillY";var xy = "FillXY";
var h = "Horizontal";var v = "Vertical";var l = "VLeft";var c = "VCenter";var r = "VRight";
var xH = x+h;var xV = x+v;var xL = x+l;var xC = x+c;var xR = x+r;var xHL = x+h+l;var xHC = x+h+c;var xHR = x+h+r;var xVL = x+v+l;var xVC = x+v+c;var xVR = x+v+r;
var yH = y+h;var yV = y+v;var yL = y+l;var yC = y+c;var yR = y+r;var yHL = y+h+l;var yHC = y+h+c;var yHR = y+h+r;var yVL = y+v+l;var yVC = y+v+c;var yVR = y+v+r;
var xyH = xy+h;var xyV = xy+v;var xyL = xy+l;var xyC = xy+c;var xyR = xy+r;var xyHL = xy+h+l;var xyHC = xy+h+c;var xyHR = xy+h+r;var xyVL = xy+v+l;var xyVC = xy+v+c;var xyVR = xy+v+r;
var t = true;var f = false;var  h = "Hide";var s = "Show";
var black = "#000000";var blue = "#0000FF";var lime = "#00FF00";var red = "#FF0000";var orange = "#FFAA00";var pink = "#FFCCFF";var white = "#FFFFFF"; 
var fl = "SlideFromLeft";var tl = "SlideToLeft";var fr = "SildeFromRight";var tr = "SlideToRight";var ft = "SlideFromTop";var tt = "SlideToTop";var fb = "SlideFromBottom";var tb = "SlideToBottom";
var root = "/sdcard/SoundAt/";
function OnStart(){
 main = app.CreateLayout(lin, xyV);
  tLay = app.CreateLayout(lin, xHC);
   title = app.CreateText("SoundAt", .8,.2);
   cat = app.CreateText("»", .2,.2);
  catLay = app.CreateLayout(lin, yV);
   catScroll = app.CreateScroller(.5,1);
    cats = app.CreateLayout(lin, yV);
     artist = app.CreateText("Artist", .5,.2);
    artists = app.CreateLayout(lin, yV);
     Pink = app.CreateText("P!nk", .5,.2);
   space = app.CreateLayout(lin, xV);
   selectedCat = app.CreateLayout(lin, xV);
    selectedScroll = app.CreateScroller(1);
     artPink = app.CreateLayout(lin, xV);
      pink1 = app.CreateText("Alice Through The Looking Glass")
       pinkA1 = app.CreateLayout(lin, xV);
        pA1T1 = app.CreateText("Just Like Fire");
 media = app.CreateMediaPlayer();
 
 app.AddLayout(main);
  main.AddChild(space);
  main.AddChild(selectedCat);
   selectedCat.AddChild(selectedScroll);
    artPink.AddChild(pink1);
     pinkA1.AddChild(pA1T1);
 app.AddLayout(tLay);
  tLay.AddChild(cat);
  tLay.AddChild(title);
 app.AddLayout(catLay);
  catLay.AddChild(catScroll);
   catScroll.AddChild(cats);
    cats.AddChild(artist);
   artists.AddChild(Pink);
 
 main.SetBackColor(orange);
  space.SetSize(1,.2);
  selectedCat.SetSize(1,.8);
   artPink.SetSize(1);artPink.SetBackColor(pink);
    pink1.SetTextColor(white);pink1.SetTouchable(t);pink1.SetOnTouch(pink1Album);
    pinkA1.SetBackColor(white);pinkA1.SetSize(1);
     pA1T1.SetTextColor(pink);pA1T1.SetTouchable(t);pA1T1.SetOnTouch(playP1T1);
 tLay.SetVisibility(h);
  cat.SetTextSize("64");cat.SetTextColor(white);cat.SetTouchable(t);cat.SetOnTouch(showCats);
  title.SetTextSize("72");title.SetTextColor(red);
 catLay.SetVisibility(h);catLay.SetBackColor(white);catLay.SetSize(.5,1);
  artist.SetTextSize("32");artist.SetTextColor(orange);artist.SetTouchable(t);artist.SetOnTouch(showArtist);
   artists.SetSize(.5,1);
    Pink.SetTextSize("32");Pink.SetTextColor(pink);Pink.SetTouchable(t);Pink.SetOnTouch(pinkMusic);
 
 titleIn();
 
 if(app.FolderExists(root)==f){
  app.MakeFolder(root);
 }else{
  loadFiles();
 }
}
 function titleIn(){
  tLay.Animate(ft);
 }
 function showCats(){
  catLay.Animate(fl);
 }
  function showArtist(){
   catScroll.RemoveChild(cats);
   catScroll.AddChild(artists);
  }
   function pinkMusic(){
    catLay.Animate(tl);
    selectedScroll.AddChild(artPink);
     selectedScroll.RemoveChild(pinkA1);
   }
    function pink1Album(){
     selectedScroll.RemoveChild(artPink);
     selectedScroll.AddChild(pinkA1);
    }
     function playP1T1(){ 
      media.SetFile("/storage/emulated/0/Music/Other/P!nk/Alice Through The Looking Glass/just-like-fire.mp3");
      media.SetOnReady(playP1T1N);
     }
     function playP1T1N(){
       media.Play();
      }
function loadFiles(){
}
