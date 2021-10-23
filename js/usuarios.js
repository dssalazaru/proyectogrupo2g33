
const boton = document.querySelector("#registrar");
boton.addEventListener("click", (event)=>{
    event.preventDefault();
    var tipo, nombre, apellido, correo, contraseña, expresion;

    tipo =  document.getElementById("tipo").value;
    nombre =  document.getElementById("nombre").value;
    apellido =  document.getElementById("apellido").value;
    correo =  document.getElementById("correo").value;
    contraseña =  document.getElementById("contraseña").value;
    expresion = /\w+@\w+\.[a-z]/;
    if(nombre === "" || apellido === "" || correo === ""|| contraseña === ""){
        alert("Todos los campos debe ser diligenciados");
        return false;
    }
    else if ( nombre.length > 30 || apellido.length > 30 || correo.length > 30|| contraseña.length > 30){ 
        alert("Los textos en los campos son muy largos");
        return false;
    }
    else if ( nombre.length > 30 || apellido.length > 30 || correo.length > 30|| contraseña.length > 30){ 
        alert("Los textos en los campos son muy largos");
        return false;
    }
    else if (!expresion.test(correo)){
        alert("El correo no es valido");
        return false;
    }
    
    let usuario = {
        "tipo":tipo,
        "nombre":nombre,
        "apellido":apellido,
        "correo":correo,
        "contraseña":contraseña,
    }
    
    console.log(usuario)
});
