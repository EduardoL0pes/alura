const listaDeDestino = [
    'Salvador',
    'São Paulo',
    'Rio de Janeiro'
]

const maiorDeIdade = 18;
let estaAcompanhado = false;
let passagemComprada = false;
const destino = 'São Paulo'

console.log(listaDeDestino);

const podeComprar = maiorDeIdade >=18 || estaAcompanhado == true;

let contador = 0;
let destinoExiste = false;
while(contador <3) {

    if(listaDeDestino[contador] == destino){
        destinoExiste = true;
        break;
    }

    contador ++
}

console.log('Destino existe: ', destinoExiste);

if(podeComprar && destinoExiste){
    console.log('Boa Viagem');
}else {
    console.log('OPS... Algo deu errado');
}