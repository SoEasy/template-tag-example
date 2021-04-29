// что, с чем, когда

const button = document.querySelector('.add__button');
const input = document.querySelector('#add-todo');
const tasksContainer = document.querySelector('.tasks__list');
const taskTemplate = document.querySelector('#task-template');

console.log(taskTemplate);

button.addEventListener('click', function() {
    const taskValue = input.value;
    const newTask = taskTemplate.content.querySelector('.tasks__item').cloneNode(true);

    newTask.querySelector('.tasks__text').textContent = taskValue;

    tasksContainer.append(newTask);
});