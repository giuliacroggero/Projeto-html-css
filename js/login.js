document.addEventListener("DOMContentLoaded",function(){

function criarElementoMensagemResposta(mensagem) {
    const section = document.createElement("section");
    section.classList.add("msg-resposta");

    const msgTitulo = document.createElement("div");
    msgTitulo.classList.add("msg-titulo-invertida");

    const h2 = document.createElement("h2");
    nomelog.textContent = "Nome do Usuário";


    const p = document.createElement("p");
    p.textContent = mensagem;

    msgTitulo.appendChild(h2);
    Resposta.appendChild(p);
    section.appendChild(msgTitulo);
    section.appendChild(Resposta);

    return section;
  }

});