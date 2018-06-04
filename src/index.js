//VARIABLES
let textE = document.getElementById('estiloE');
let textS = document.getElementById('estiloS');
let Numero = document.getElementById('Ndesplazamiento');

let ACifrado = document.getElementById('Bcifrado');
let ADescifrado = document.getElementById('Bdescifrado');

ACifrado.addEventListener('click', function (){
      textS.value = cipher.encode(parseInt(Numero.value), textE.value)
});

ADescifrado.addEventListener('click', function (){
      textS.value = cipher.decode(parseInt(Numero.value), textE.value)
});
