// что, с чем, когда

const button = document.querySelector('.add__button');
const input = document.querySelector('#add-todo');
const tasksContainer = document.querySelector('.tasks__list');
const taskTemplate = document.querySelector('#task-template');

const initialData = [
    'Научиться динамически добавлять контент',
    'Оптимизировать код',
    'Понять замыкания',
    'Поработать с гит-флоу',
];

initialData.forEach(function(currentItem) {
    const newTask = taskTemplate.content.querySelector('.tasks__item').cloneNode(true);

    newTask.querySelector('.tasks__text').textContent = currentItem;

    tasksContainer.append(newTask);
});

button.addEventListener('click', function() {
    const taskValue = input.value;
    const newTask = taskTemplate.content.querySelector('.tasks__item').cloneNode(true);

    newTask.querySelector('.tasks__text').textContent = taskValue;

    tasksContainer.append(newTask);
});