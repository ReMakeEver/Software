function writeToDataSeg(number, ads){
 var theNum = number.substring();
 if(theNum==1){
  company1(ads);
 }
 if(theNum==2){
  company2(ads);
 }
 if(theNum==3){
  company3(ads);
 }
 if(theNum==4){
  company4(ads);
 }
 if(theNum==5){
  company5(ads);
 }
 if(theNum==6){
  company6(ads);
 }
}
function company1(ad){
 var adNum = ad.substring();
 if(adNum==1){
  var part = firebase.database().ref('company1/ads/ad1');
  part.child('ad1').set(1);
 }
 if(adNum==2){
 }
 if(adNum==3){
 }
}
