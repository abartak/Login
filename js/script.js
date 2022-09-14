function validateForm() {
var inEmail = document.getElementById("inEmail");
var inPassword = document.getElementById("inPassword");

var email = inEmail.value;
var password = inPassword.value;

  if (email == "") {
    alert("Please enter your email");
    inEmail.focus();
    return;
    
  }

  if (password == "") {
    alert("Please enter your password");
    inPassword.focus();
    return;
  }

  if(email == "teste@teste" && password=="123456"){
    alert("Login successful");
    /*inEmail.value = "";
    inPassword.value = "";
    inEmail.focus();*/
    window.location.href = "/POKEMONS/index.html";
    return true;
  }else{
    alert("Email ou senha incorretos");
    inEmail.value = "";
    inPassword.value = "";
    inEmail.focus();
    return false;
  }
    


}

var btnLogin = document.getElementById("btnLogin");
btnLogin.addEventListener("click", validateForm);