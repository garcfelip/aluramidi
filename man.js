/**
 * @author felipe
 */

// Constante
const listaDeTeclas = document.querySelectorAll(".tecla");

function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    //elemento === elemento != null
    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    } else {
        console.log("Elemento não encontrado ou seletor inválido!");

    }

}

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumeto = tecla.classList[1];
    const idAudio = `#som_${instrumeto}`; // template string

    tecla.onclick = function () {
        tocaSom(idAudio);
    };

    tecla.onkeydown = function (evento) {

        console.log(evento.code);

        if (evento.code === "Enter" || evento.code === "Space") {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function (evento) {

        if (evento.code === "Enter" || evento.code === "Space") {
            tecla.classList.remove("ativa");
        }
    }

    //console.log(tecla.classList);

}


