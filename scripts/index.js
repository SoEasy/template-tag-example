// что, с чем, когда

const button = document.querySelector('.add__button');
const input = document.querySelector('#add-todo');
const tasksContainer = document.querySelector('.tasks__list');
const taskTemplate = document.querySelector('#task-template');
const countIndicator = document.querySelector('.footer__count');

const initialData = [
    'Научиться динамически добавлять контент',
    'Оптимизировать код',
    'Понять замыкания',
    'Поработать с гит-флоу',
];

function createTodo(itemData) {
    function handleRemoveTodo(e) {
        e.target.closest('.tasks__item').remove();
        recalculateCount();
    }

    const newTask = taskTemplate.content.querySelector('.tasks__item').cloneNode(true);
    const cardText = newTask.querySelector('.tasks__text');
    const cardRemoveButton = newTask.querySelector('.tasks__trash');

    cardText.textContent = itemData;

    cardRemoveButton.addEventListener('click', handleRemoveTodo);

    return newTask;
}

function recalculateCount() {
    const count = tasksContainer.querySelectorAll('.tasks__item').length;
    countIndicator.textContent = count;
}

initialData.forEach(function(currentItem) {
    const newCard = createTodo(currentItem);
    tasksContainer.append(newCard);
    recalculateCount();
});

button.addEventListener('click', function() {
    const taskValue = input.value;

    tasksContainer.append(createTodo(taskValue));
    recalculateCount();
});