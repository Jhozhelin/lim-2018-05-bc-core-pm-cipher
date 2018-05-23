var userName = prompt('Ingresa tu nombre :)');
console.log(userName);
if (userName!=" ") {
  var userNameP = document.getElementById('userName');
   userNameP.textContent =  userName.toUpperCase();
}
else {
  var tituloID = document.getElementById('titulo');
    tituloID.textContent = titulo + "usuario";
}
var choice = confirm ("¿List@ para jugar?");
if (choice){

}
