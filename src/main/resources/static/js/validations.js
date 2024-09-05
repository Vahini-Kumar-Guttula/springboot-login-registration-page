function validarLogin(){
    let usuario = document.form.usuario.value;
    let password = document.form.password.value;
    
    if(usuario==null || usuario==""){
        alert("Please enter username");
        return false;
    }
    if(password== null || password==""){
        alert("Please enter password");
        return false;
    }
    
}

let form = document.querySelector(".registerForm");
form.addEventListener('submit', checkRegister);

function checkRegister(e){
	
	let name = form.name.value;
	let email = form.email.value;
    let password = form.password.value;
	let validatePassword = form.validatePassword.value;
	let validationFailed = false;
	
	if(email==null || email==""){
		alert("enter email");
		e.preventDefault();
		return false;
    }
    if(name==null || name==""){
		alert("enter name");
		e.preventDefault();
		return false;
    }
    if(password== null || password==""){
		alert("enter password");
		e.preventDefault();
		return false;
    }
    if(validatePassword== null || validatePassword==""){
		alert("enter validatePassword");
		e.preventDefault();
		return false;
    }
    if(validatePassword !== password){
		alert("passord mismatch");
		e.preventDefault();
		return false;
	}  
	
	if(validationFailed){
		return true;
	}
}

function validarRegistro(){
    let usuario = document.form.usuario.value;
    let password = document.form.password.value;
    let valiarPassword = document.form.validarPassword.value;
    let email = document.form.email.value;
    console.log("Hola");
    if(email==null || email==""){
        alert("El email es requerido");
        return false;
    }
    if(usuario==null || usuario==""){
        alert("El nombre de usuario es requerido");
        return false;
    }
    if(password== null || password==""){
        alert("La contraseña es requerida");
        return false;
    }
    if(valiarPassword== null || valiarPassword==""){
        alert("La contraseña es requerida");
        return false;
    }
    if(valiarPassword !== password){
        alert("La contraseña no coinciden");
        return false;
    }  
}

