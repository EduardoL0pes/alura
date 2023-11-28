const html = document.querySelector('html');
const focoBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longoBt = document.querySelector('.app__card-button--longo');
const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');
const botoes = document.querySelectorAll('.app__card-button');
const startPauseBt = document.querySelector('#start-pause');
const musicaFocoInput = document.querySelector('#alternar-musica');
const playOuPause = document.querySelector('#start-pause span');
const imagemPause = document.querySelector('#start-pause img');
const tempoNaTela = document.querySelector('#timer');
const musica = new Audio('./sons/luna-rise-part-one.mp3');
const musicaPause = new Audio('./sons/pause.mp3');
const musicaInicio = new Audio('./sons/play.wav');
const musicaTempoEsgotado = new Audio('./sons/beep.mp3');
musicaTempoEsgotado.currentTime = 3;
musica.loop = true;
//musica.currentTime = 10; //avança 10sec do audio
//musica.valume = 0.5; //define o volume para metade (50%)

let tempoDecorridoEmSegundos = 1500;
let intervaloId = null;

musicaFocoInput.addEventListener('change', () => { //Change é mais comum de se utilizar quando se trabalha com elementos tipo input checkbox
    if (musica.paused) {
        musica.play();
    } else {
        musica.pause();
    }
})

focoBt.addEventListener('click', () => {
    tempoDecorridoEmSegundos = 1500;
    alterarContexto('foco');
    focoBt.classList.add('active');
})

curtoBt.addEventListener('click', () => {
    tempoDecorridoEmSegundos = 300;
    alterarContexto('descanso-curto');
    curtoBt.classList.add('active');
})

longoBt.addEventListener('click', () => {
    tempoDecorridoEmSegundos = 900;
    alterarContexto('descanso-longo');
    longoBt.classList.add('active');
})

function alterarContexto(contexto) {
    mostrarTempo();
    botoes.forEach((contexto) => {
        contexto.classList.remove('active');
    })
    html.setAttribute('data-contexto', contexto);
    banner.setAttribute('src', `./imagens/${contexto}.png`);

    switch (contexto) {
        case "foco":
            titulo.innerHTML = `
            Otimize sua produtividade,<br>
            <strong class="app__title-strong">mergulhe no que importa.</strong>
            `
            break;
        case "descanso-curto":
            titulo.innerHTML = `
            Que tal dar uma respirada? <strong class="app__title-strong">Faça uma pausa curta!</strong>
            `
            break;
        case "descanso-longo":
            titulo.innerHTML = `Hora de voltar à superfície. <strong class="app__title-strong">Faça uma pausa longa.</strong>`
            break;
        default:
            break;
    }
}

const contagemRegressiva = function () {
    if (tempoDecorridoEmSegundos <= 3) {
        musicaTempoEsgotado.play();
        if (tempoDecorridoEmSegundos <= 0) {
            alert('Tempo Esgotado!!');
            zerar();
            return
        }
    }
    tempoDecorridoEmSegundos -= 1;
    //console.log('Temporizador: ' + tempoDecorridoEmSegundos);
    mostrarTempo();
}

startPauseBt.addEventListener('click', iniciarOuPausar);

function iniciarOuPausar() {
    if (intervaloId) {
        zerar();
        musicaPause.play();
        return
    } 
    musicaInicio.play();
    intervaloId = setInterval(contagemRegressiva, 1000);
    playOuPause.textContent = 'Pausar';
    imagemPause.setAttribute('src', './imagens/pause.png');
}

function zerar() {
    clearInterval(intervaloId);
    playOuPause.textContent = 'Iniciar';
    imagemPause.setAttribute('src', './imagens/play_arrow.png');
    intervaloId = null;
}

function mostrarTempo() {
    const tempo = new Date(tempoDecorridoEmSegundos * 1000);
    const tempoFormatado = tempo.toLocaleTimeString('pt-br', {minute: '2-digit', second: '2-digit'});
    tempoNaTela.innerHTML = `${tempoFormatado}`;
}

mostrarTempo(); //Obs: para que o tempo fique a mostra de forma recorrente na tela 