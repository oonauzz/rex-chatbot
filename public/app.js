const { default: firebase } = require("firebase/compat/app");

document.addEventListener("DOMContentLoaded", (event) => {
  const app = firebase.app();
  const db = firebase.firestore();
  const myPost = db.collection("posts").doc("firstpost");
  myPost.onSnapshot((doc) => {
    const data = doc.data();
    document.write(data.title + "<br>");
    document.write(data.createdAt);
  });
});

function googleLogin() {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .aignInWithPopup(provider)

    .then((result) => {
      const user = result.user;
      document.write("Hello ${user.displayName}");
      console.log(user);
    })
    .catch(console.log);
}

function updatePost(e) {
  const db = firebase.firestore();
  const myPost = db.collection("posts").doc("firstpost");
  myPost.update({ title: e.target.value });
}
