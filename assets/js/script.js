document.getElementById("toggle").addEventListener("click",function(event){
	event.preventDefault();

  if(document.getElementById("menuPrincipal").classList.contains("abierto")){
    document.getElementById("menuPrincipal").className = "nav-menu cerrado";
  } else{
    document.getElementById("menuPrincipal").className = "nav-menu abierto";
  }
});
var ele = "";
function showSocial(el){
	ele = el;
	el.className="card over";
	ele.childNodes[5].className = "card__social__active";
}

function hideSocial(el){
	el.className="card out";
	ele.childNodes[5].className = "card__social";
}

document.getElementById("empezar").addEventListener("click", function(event){
	event.preventDefault();
	window.location="outfit.html";
});
