// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDgmhbNcQv95A2HvW2LnMQWJuVrA7n0xGo",
    authDomain: "hortiturkey-b9816.firebaseapp.com",
    projectId: "hortiturkey-b9816",
    databaseURL: "https://hortiturkey-b9816-default-rtdb.firebaseio.com/",
    storageBucket: "hortiturkey-b9816.appspot.com",
    messagingSenderId: "182743069045",
    appId: "1:182743069045:web:aaebd8839e3e9e5943233c"
    
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
var AuthPromise = new Promise(function (resolve, reject) {

    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            console.log('Already logged in.');
            resolve(true)
        } else {

            firebase.auth().signInAnonymously().then(() => {
                console.log('Logged in anonymously.')
                resolve(true)
            })

        }
    });

});
