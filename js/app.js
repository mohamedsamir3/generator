const firebaseConfig = {
  apiKey: "AIzaSyBTvHgLDQNQe6dqL3cIPvAx_SkmXcL9tco",
  authDomain: "attendance-3cf44.firebaseapp.com",
  databaseURL: "https://attendance-3cf44-default-rtdb.firebaseio.com",
  projectId: "attendance-3cf44",
  storageBucket: "attendance-3cf44.appspot.com",
  messagingSenderId: "572212010438",
  appId: "1:572212010438:web:c23fe4f1bdc23e7c4b66c7"
};

firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in, see docs for a list of available properties
    console.log("you signed in");
    //show message
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    // ...
  } else {
    //show message
    console.log("you not signed in");
    // User is signed out
    // ...
  }
});

let subForm = document.getElementById("form");
function signin(event) {
  event.preventDefault();
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      // console.log("welcome you signed in");
      const user = userCredential.user;
      // ...
      if (user) {
        // return true;
        console.log("welcome user");
        subForm.submit();
      } else {
        console.log("no user");
        // return false;
      }
    })
    .catch((error) => {
      console.log("function you are not signed in");
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}

function logout() {
  firebase
    .auth()
    .signout()
    .then(() => {
      console.log("awaze you signout");
    });
}

// onAuthStateChanged(auth, (user) => {
// });

/** */
/** */
// function signin(event) {
//   let email = document.getElementById("email");
//   let password = document.getElementById("password");
//   signInWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       // Signed in
//       console.log("welcome you signed in");
//       const user = userCredential.user;
//       // ...
//     })
//     .catch((error) => {
//       console.log("you are not signed in");
//       const errorCode = error.code;
//       const errorMessage = error.message;
//     });
//   event.preventDefault;
// }

// firebase.auth().onAuthStateChanged(function(user)){

// }
// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/firebase.User
//     const uid = user.uid;
//     // ...
//   } else {
//     // User is signed out
//     // ...
//   }
// });
