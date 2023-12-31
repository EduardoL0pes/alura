const btnAdicionarTarefa = document.querySelector('.app__button--add-task');
const adicionarTarefa = document.querySelector('.app__form-add-task');
const textarea = document.querySelector('.app__form-textarea');
const ulTarefa = document.querySelector('.app__section-task-list');

const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];

function atualizarTarefa() {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}

function criarElementoTarefa(tarefa) {
    const li = document.createElement('li');
    li.classList.add('app__section-task-list-item');

    const svg = document.createElement('svg');
    svg.innerHTML = `   
        <svg class="app__section-task-icon-status" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="12" fill="#FFF"></circle>
            <path d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z" fill="#01080E"></path>
        </svg>
    `;

    const paragrafo = document.createElement('p');
    paragrafo.classList.add('app__section-task-list-item-description');
    paragrafo.textContent = tarefa.descricao

    const botao = document.createElement('button');
    botao.classList.add('app_button-edit');

    botao.onclick = () => {
        //debugger  //para ajudar a debuggar o código
        const novaDescricao = prompt('Qual será o nome da nova tarefa?');
        //console.log('nova descrição: ', novaDescricao);
        if(novaDescricao) {
            paragrafo.textContent = novaDescricao
            tarefa.descricao = novaDescricao
            atualizarTarefa()
        }   
    };

    const botaoImagem = document.createElement('img');
    botaoImagem.setAttribute('src', './imagens/edit.png');
    botao.append(botaoImagem);

    li.append(svg);
    li.append(paragrafo);
    li.append(botao);

    return li
};

btnAdicionarTarefa.addEventListener('click', () => {
    adicionarTarefa.classList.toggle('hidden');
});

adicionarTarefa.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const tarefa = {
        descricao: textarea.value
    };
    tarefas.push(tarefa);
    atualizarTarefa()
});

tarefas.forEach(tarefa => {
    const elementoTarefa = criarElementoTarefa(tarefa);
    ulTarefa.append(elementoTarefa);
});