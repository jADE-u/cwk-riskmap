window.addEventListener("load", function(){

setTimeout(function(){

document.getElementById("loader").style.opacity="0";

setTimeout(function(){

document.getElementById("loader").style.display="none";

},800);

},2000);

});
const menu=document.getElementById("menu-toggle");
const nav=document.getElementById("nav-menu");
const overlay=document.getElementById("overlay");

menu.onclick=function(){

nav.classList.toggle("active");

overlay.classList.toggle("show");

if(nav.classList.contains("active")){

menu.innerHTML='<i class="fas fa-times"></i>';

}else{

menu.innerHTML='<i class="fas fa-bars"></i>';

}

}

overlay.onclick=function(){

nav.classList.remove("active");

overlay.classList.remove("show");

menu.innerHTML='<i class="fas fa-bars"></i>';

}

document.querySelectorAll("#nav-menu a").forEach(link=>{

link.onclick=function(){

nav.classList.remove("active");

overlay.classList.remove("show");

menu.innerHTML='<i class="fas fa-bars"></i>';

}

});