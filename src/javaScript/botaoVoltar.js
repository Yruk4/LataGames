
let botaoVoltar = document.createElement("button"); 
botaoVoltar.innerText = "Voltar"; 
botaoVoltar.id = "btnVoltar"; 


botaoVoltar.addEventListener("click", function() {
    window.history.back();
});


botaoVoltar.style.backgroundColor = "#f80505dc";
botaoVoltar.style.color = "white";
botaoVoltar.style.padding = "10px 20px";
botaoVoltar.style.border = "none";
botaoVoltar.style.cursor = "pointer";
botaoVoltar.style.borderRadius = "5px";
botaoVoltar.style.position = "fixed";
botaoVoltar.style.bottom = "20px";
botaoVoltar.style.left = "20px";
botaoVoltar.style.fontSize = "20px"; 
botaoVoltar.style.boxShadow = "2px 2px 5px rgba(0, 0, 0, 0.3)"; 


document.body.appendChild(botaoVoltar);
