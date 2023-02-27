var menuVisible = false;
let menu = document.getElementById("nav");

//Funcion para desplegar el menu lateral dependiendo del onclick sobre el mismo

function mostrarOcultarMenu(){
    if (menuVisible == false){
        menu.style.display = "block"
        menuVisible = true;
    }
    else{
        menu.style.display = "none"
        menuVisible = false 
    }
}

//ocultar menu post seleccion
let links = document.querySelectorAll("nav a");
for(var x=0; x < links.length; x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menuVisible = false;
    }
}