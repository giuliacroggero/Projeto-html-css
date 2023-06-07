document.addEventListener("DOMContentLoaded",function(){
    //mudaça 1

    Elemento_digitado = document.createElement('h5');
    Card = document.querySelectorAll(".xx");
    Qntd = Card.length;
    Main = document.querySelector("main");
    Main.appendChild(Elemento_digitado);
    H1 = document.querySelector("h5");
    H1.innerHTML = "Metas Ativas: " + Qntd;



    //mudaça 2

    selec1 = document.querySelectorAll(".check1")
    linha1 = document.querySelectorAll(".bordaplanejamento")

    cont = 0 

    selec1[0].addEventListener('click', function(event) {
        if (cont == 0) {
        
            linha1[0].style.borderColor = 'red'
            cont = cont + 1
        }
        else {
       
            linha1[0].style.borderColor = 'grey'
            cont = cont - 1
        }

       })


    selec1[1].addEventListener('click', function(event) {
        if (cont == 0) {
        
            linha1[1].style.borderColor = 'red'
            cont = cont + 1
        }
        else {
       
            linha1[1].style.borderColor = 'grey'
            cont = cont - 1
        }

       })


    selec1[2].addEventListener('click', function(event) {
        if (cont == 0) {
        
            linha1[2].style.borderColor = 'red'
            cont = cont + 1
        }
        else {
       
            linha1[2].style.borderColor = 'grey'
            cont = cont - 1
        }

       })
    

    selec1[3].addEventListener('click', function(event) {
        if (cont == 0) {
        
            linha1[3].style.borderColor = 'red'
            cont = cont + 1
        }
        else {
       
            linha1[3].style.borderColor = 'grey'
            cont = cont - 1
        }

       })

});