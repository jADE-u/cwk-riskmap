window.addEventListener("load", function(){

setTimeout(function(){

document.getElementById("loader").style.opacity="0";

setTimeout(function(){

document.getElementById("loader").style.display="none";

},800);

},2000);

});
const menuBtn=document.getElementById("menu-toggle");
const nav=document.getElementById("nav-menu");

menuBtn.addEventListener("click",()=>{

nav.classList.toggle("active");

if(nav.classList.contains("active")){

menuBtn.innerHTML='<i class="fas fa-times"></i>';

}else{

menuBtn.innerHTML='<i class="fas fa-bars"></i>';

}

});
document.querySelectorAll("#nav-menu a").forEach(link=>{

link.addEventListener("click",()=>{

nav.classList.remove("active");

menuBtn.innerHTML='<i class="fas fa-bars"></i>';

});

});