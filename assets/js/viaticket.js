function inicioSesion()
{
    let usuario = document.getElementById("login").value;
    let password = document.getElementById("password").value;
    if(usuario.trim().length>0 && password.trim().length>0){
        window.location = "index.html";
        return false;
    }
    else{
        alert("Login invalido");
    }
}