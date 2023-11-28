function tocaSom(idElementAudio) {

    const element = document.querySelector(idElementAudio);

    if(element != null && element.localName === 'audio') {

        element.play();

        //console.log(element.localName); 
        //element - mostra como é a estrutura do objeto  funcionalidades e propriedades
        //localName - para verificar o nome exibido
        //OBS: ***MELHOR VISUALIZAÇÃO NO NAVEGADOR FIREFOX

    } else {
        console.log('Elemento não encontrado ou seletor inválido.');
    }
}

//document.querySelector('.tecla_pom').onclick = tocaSomPom; //outro modo de selecionar uma tecla especifica

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    //console.log(instrumento);

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (event) { // 'event' nome dado para que possamos identificar o tipo de tecla/codigo ou outro evento relacionado a tecla

        console.log(event.code);  //verifica o tipo de tecla pressionado 

        if (event.code === 'Space' || event.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
    
    //console.log(contador);
}

//Outra forma de percorrer o código com loop 
/*
let contador = 0;

while (contador < listaDeTeclas.length) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    //console.log(instrumento);

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    contador++

    console.log(contador);
}*/

