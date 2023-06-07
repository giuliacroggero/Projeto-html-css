document.addEventListener("DOMContentLoaded",function(){

    var salvarBotao = document.getElementById("salvar_nova_tarefa");
  salvarBotao.addEventListener("click", function(event) {
    var textoInput = document.getElementById("texto");
    var texto = textoInput.value.trim(); // Remover espaços em branco extras no início e no final

    if (texto === "") {
      event.preventDefault(); // Impede o envio do formulário ou a navegação para outra página

      var erroMensagem = document.querySelector(".erro-mensagem");
      if (erroMensagem) {
        erroMensagem.remove(); // Remove a mensagem de erro existente, se houver
      }

      erroMensagem = document.createElement("p");
      erroMensagem.classList.add("erro-mensagem");
      erroMensagem.innerText = "Ops, você não digitou nada";

      var botaoPai = salvarBotao.parentNode;
      botaoPai.insertBefore(erroMensagem, salvarBotao);
    }
  });
});
