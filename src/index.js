import "./styles.css";

// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
//
import "./scripts/providers/initApp";
import "auth";
import db from "database";

//get a single document from a collection
db.collection("EXAMPLE_COLLECTION")
  .doc("JP00qzimyYjhEyHDa48b")
  .get()
  .then((doc) => {
    if (doc.exists) {
      document.body.append(JSON.stringify(doc.data()));
    } else {
      console.log("No such document!");
    }
  })
  .catch((error) => {
    console.log("Error getting document:", error);
  });

//get all documents from a collection
db.collection("EXAMPLE_COLLECTION")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      document.body.append(JSON.stringify(doc.data()));
    });
  });

function signOut() {
  console.log("signed out user");
  firebase
    .auth()
    .signOut()
    .then(() => console.log("signed out"))
    .catch((error) => console.log(error));
}

document.getElementById("signout").addEventListener("click", signOut);
