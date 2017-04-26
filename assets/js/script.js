document.getElementById("toggle").addEventListener("click",function(event){
	event.preventDefault();
  
  if(document.getElementById("menuPrincipal").classList.contains("abierto")){
    document.getElementById("menuPrincipal").className = "nav-menu cerrado";
  } else{
    document.getElementById("menuPrincipal").className = "nav-menu abierto";
  }
});
