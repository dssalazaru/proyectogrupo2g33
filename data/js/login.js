function ir (){

  var c="admin";
  var u="admin";
  
  var usuario = document.getElementById("inputmail").value
  
  var nill="";
  var contra = document.getElementById("inputpassword").value
  
      if (contra==c & usuario==u){
      alert("Bienvenido a G2 Inventory");
      window.location="inventory.html";}
        else if (contra==nill){
        alert("No ingreso contraseña intentelo de nuevo.");}
        else if (usuario==nill){
          alert("No ingreso un usuario intentelo de nuevo.");}
          else if (contra==nill & contra==nill){
            alert("No ingreso contraseña ni usuario intentelo de nuevo.");}
           else{ 
           alert("Porfavor ingrese, nombre y usuario correcto.");
        
      }
      
      
      
      }
    