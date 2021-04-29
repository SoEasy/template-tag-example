// что, с чем, когда

// ввод в инпут
// кнопка
// добавление новой строки

const button = document.querySelector('.add__button');
const input = document.querySelector('#add-todo');
const tasksContainer = document.querySelector('.tasks__list');

button.addEventListener('click', function() {
    const taskValue = input.value;

    tasksContainer.insertAdjacentHTML('beforeend', `<li class="tasks__item">
        <label class="field tasks__label">
          <input class="visually-hidden tasks__input" type="checkbox"> 
          <span class="tasks__indicator"></span>
          <span class="tasks__text">${taskValue}</span>
          <span class="tasks__trash"></span>
        </label>
      </li>`);
});