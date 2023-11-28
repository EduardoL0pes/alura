const nome = 'Eduardo';
const idade = 27;

console.log('Meu nome é ' + nome + ' eu tenho ' + idade + ' anos');

/*console.log(idade);
console.log(idade+2);
console.log(idade/2);
console.log(idade-2);
console.log(idade*2);

//-----------------------------------------

const mateAritmetica = 12;

console.log(mateAritmetica);
console.log(mateAritmetica/2*5-2);

//------------------------------------------

console.log(parseInt("2") + parseInt("2"));

console.log((10 + 8) *5);
console.log('Eduardo' / '2'); // not a number */

//-------------------------------------------

// const listaDeDestino = new Array(
//     `Salvado`,
//     `Rio de Janeiro`,
//     `São Paulo`,
//     `Curitiba`,
// );


// const listaDeDestino = [
//     `Salvador`,
//     `São Paulo`,
//     `Rio de Janeiro`
// ];
// listaDeDestino.push(`Santa Catarina`);

// console.log(`Lista de Destinos`);

// listaDeDestino.splice(1,1);   //.splice remove algum item na lista 1(primeiro item), 1(quantidade de item a ser removido)
// console.log(listaDeDestino);

// console.log(listaDeDestino[0], listaDeDestino[1]);

//-------------------------------------------

/*const listaDeDestino = [
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
]

const idadeComprador = 18;
const estaAcompanhada = true;
const temPassagemComprada = true;*/

/*if (idadeComprador >= 18) {
    listaDeDestino.splice(1, 1);  //.splice remove algum item na lista 1(primeiro item), 1(quantidade de item a ser removido)
    console.log(`Comprador maior de idade`);
} else if (estaAcompanhada) {
    listaDeDestino.splice(1, 1);
    console.log(`Comprador está acompanhado, compra efetuada!`);
} else {
    console.log(`[ERRO]Comprador menor de idade`);
}*/

//---

/*if(idadeComprador >= 18 || estaAcompanhada) {
    listaDeDestino.splice(1,1);
    console.log(`Compra efetuada!`);
} else {
    console.log(`Não foi possível efetuar a compra`);
}


console.log(`Embarque: \n\n`); //Caractere especial "Pula duas linhas (funciona como a tag </br>)"
if(temPassagemComprada && idadeComprador >= 18 || estaAcompanhada) {
    console.log(`Boa Viagem!`);
} else {
    console.log(`Não sera possível embarcar`);
}

console.log(listaDeDestino); */

//-------------------------------------------------

const listaDeDestino = new Array(
    'Salvador',
    'São Paulo',
    'Rio de Janeiro'
);

const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = 'São Paulo';

console.log(listaDeDestino);

const podeCompra = idadeComprador >= 18 || estaAcompanhada == true; 

let contador = 0;
let destinoExiste = false;
while(contador<3){

    if(listaDeDestino[contador] == destino) {
        destinoExiste = true;
        break;
    }

    contador += 1;
}

console.log('Destino Existe: ', destinoExiste);

if(podeCompra && destinoExiste) {
    console.log('Boa Viagem!!');
}else {
    console.log('Desculpe mas algo deu errado!');
}
