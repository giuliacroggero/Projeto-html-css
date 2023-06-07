document.addEventListener("DOMContentLoaded",function(){

    var salvarBotao = document.getElementById("salvarmeta");
  salvarBotao.addEventListener("click", function(event) {
    var textoInput = document.getElementById("texto1");
    var texto = textoInput.value.trim(); 

    if (texto === "") {
      event.preventDefault();
      var erroMensagem = document.querySelector(".erro-mensagem");
      if (erroMensagem) {
        erroMensagem.remove(); 
      }

      erroMensagem = document.createElement("p");
      erroMensagem.classList.add("erro-mensagem");
      erroMensagem.innerText = "Ops, você não digitou nada";

      var botaoPai = salvarBotao.parentNode;
      botaoPai.insertBefore(erroMensagem, salvarBotao);
    }
  });
});
