let popUp = document.getElementById("popup-wrapper")
let text = document.getElementById("resultado")

let buttonPlay = document.querySelector(".buttonJogada")

buttonPlay.addEventListener("click", jogada)


function showModal(texto){
    popUp.style.display = "block"
    text.innerHTML = texto
}

function jogada(){
    //a jogada do computador será um número entre 1 e 3
    let jogadaComputador = Math.round(Math.random()*2+1)
    //.value pega o valor que está no input
    let jogadaPessoa = document.querySelector('input').value.toUpperCase() 
    //transformando a jogada em número
    switch(jogadaPessoa){
        case 'PEDRA':
            jogadaPessoa = 1
            break;
        case "PAPEL":
            jogadaPessoa = 2
            break;
        case "TESOURA":
            jogadaPessoa = 3
            break;
        default: showModal("Jogada Inválida!")
    }
    //comparando a jogada do pc com a do jogador
    switch(jogadaPessoa){
        case 1:
            return jogadaComputador == 1?showModal("Empate"):jogadaComputador == 2?showModal("O pc ganhou"):showModal("Você ganhou!")
        case 2:
            return jogadaComputador ==1?showModal("Você venceu!"):jogadaComputador==2?showModal("empate")
            :showModal("Você perdeu!")
        case 3:
            return jogadaComputador ==1?showModal("Você perdeu"):jogadaComputador==2?showModal("Você venceu")
            :showModal("empate!")
    }
}