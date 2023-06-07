document.addEventListener("DOMContentLoaded",function(){
    Elemento_digitado = document.createElement('h5');
    Card = document.querySelectorAll(".borda");
    Qntd = Card.length;
    Main = document.querySelector("main");
    Main.appendChild(Elemento_digitado);
  
    
   

    H1 = document.querySelector("h5");
    H1.innerHTML = "Cursos Ativos: " + Qntd;


    selec = document.querySelectorAll(".check")
    linha = document.querySelectorAll(".borda")

    cont = 0 

    selec[0].addEventListener('click', function(event) {
        if (cont == 0) {
        
            linha[0].style.borderColor = 'purple'
            cont = cont + 1
        }
        else {
       
            linha[0].style.borderColor = 'grey'
            cont = cont - 1
        }

       })


    selec[1].addEventListener('click', function(event) {
        if (cont == 0) {
        
            linha[1].style.borderColor = 'purple'
            cont = cont + 1
        }
        else {
       
            linha[1].style.borderColor = 'grey'
            cont = cont - 1
        }

       })


    selec[2].addEventListener('click', function(event) {
        if (cont == 0) {
        
            linha[2].style.borderColor = 'purple'
            cont = cont + 1
        }
        else {
       
            linha[2].style.borderColor = 'grey'
            cont = cont - 1
        }

       })
    

    selec[3].addEventListener('click', function(event) {
        if (cont == 0) {
        
            linha[3].style.borderColor = 'purple'
            cont = cont + 1
        }
        else {
       
            linha[3].style.borderColor = 'grey'
            cont = cont - 1
        }

       })

    
    selec[4].addEventListener('click', function(event) {
        if (cont == 0) {
        
            linha[4].style.borderColor = 'purple'
            cont = cont + 1
        }
        else {
       
            linha[4].style.borderColor = 'grey'
            cont = cont - 1
        }

       })


    selec[5].addEventListener('click', function(event) {
        if (cont == 0) {
        
            linha[5].style.borderColor = 'purple'
            cont = cont + 1
        }
        else {
       
            linha[5].style.borderColor = 'grey'
            cont = cont - 1
        }

       })
});