
const loginForm = document.querySelector("form.login");

 const loginBtn = document.querySelector("label.login");

 const signupBtn = document.querySelector("label.signup");

 const signupLink = document.querySelector("form .signup-link a");
 
 const signupText = document.querySelector(".title-text .signup");

 const loginText = document.querySelector(".title-text .login");

 signupBtn.onclick = (()=>{
   loginForm.style.marginLeft = "-50%";
   loginText.style.marginLeft = "-50%";
 });

 signupLink.onclick = (()=>{
     signupBtn.click();
     return false;
 })

 loginBtn.onclick = (()=>{
   loginForm.style.marginLeft = "0%";
   loginText.style.marginLeft = "0%";
 });


document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  var username = document.getElementById("username").value
  var email = document.getElementById("email").value
  var pass1 = document.getElementById("pass1").value
  var pass2 = document.getElementById("pass2").value

  if(username.length < 5){
    alert("Username must be at least 5 character");
    return;
  }

  if(!validateEmail(email)){
    alert("Email is Invalid");
    return;
  }

  if(pass1.length < 6){
    alert("Password must be at least 6 character");
    return;
  }

  if(pass1 !== pass2 ){
    alert("Password not match");
    return;
  }

  var confirmation = confirm("Are you sure you want to register");
    if(confirmation){
        console.log ("form submitted");
    } else {
        console.log("Cancelled");
    }

})

function validateEmail(email){
  return (email.indexOf("@") != -1) && (email.endsWith(".com"));
}