function connect(key,databaseName){
 var config = {
  apiKey: key.substring(),
  authDomain: databaseName.substring+".firebaseapp.com",
  databaseUrl: "https://"+databaseName.substring()+"firebaseio.com",
  storageBucket: databaseName.substring()+".appspot.com"
 }
 firebase.initializeApp(config);
}
