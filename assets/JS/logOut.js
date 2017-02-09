//Get elements
const btnSignout = document.getElementById("btnSignout");
//Add Sign Out event
btnSignout.addEventListener("click", e=>{
    firebase.auth().signOut();
    window.location.href = "login.html";
});