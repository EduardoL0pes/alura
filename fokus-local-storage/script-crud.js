const btnAdicionarTarefa = document.querySelector('.app__button--add-task');
const adicionarTarefa = document.querySelector('.app__form-add-task');

btnAdicionarTarefa.addEventListener('click', () => {
    adicionarTarefa.classList.toggle('hidden');
});