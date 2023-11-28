const listaDeDestino = [
    'Salvador',
    'São Paulo',
    'Rio de Janeiro'
]

const maiorDeIdade = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = 'São Paulo';

console.log(listaDeDestino);

const podeCompra = maiorDeIdade >= 18 || estaAcompanhada == true;

let destinoExiste = false;
for(let i = 0 ; i < 3 ; i++ ) {
    if(listaDeDestino[i] == destino){
        destinoExiste = true;
        break;
    }
}

if(podeCompra && destinoExiste) {
    console.log('Boa Viagem!!');
}else {
    console.log('Desculpe mas algo deu errado!');
}

console.log('Destino Disponível ', destinoExiste);


