import {Task} from '/src/task.js'; 
import {saveTask, getTasks} from '/src/localeStorage.js';
import {taskPopUp} from '/src/domManipulations.js';
import {renderTasks} from '/src/render.js';

    const createTaskEvent = (()=> {
        const submitTask = document.querySelector('form.task-form');


        submitTask.addEventListener('submit', function(e) {
            e.preventDefault();

            const title = document.querySelector('#task-title').value;
            const description = document.querySelector('#task-description').value;
            const dueDate = document.querySelector('#task-dueDate').value;
            const priority = document.querySelector('#task-priority').value;

            // Creates task
            const task = Task(title, description, dueDate, priority);

            
            saveTask(task);
            taskPopUp.removeForm(); 
            });
        })();


    const taskPopUpEvent = (() => {
        const popUpTaskButton = document.querySelector('#pop-up-task-form');
        const removeButtonPopUpTask = document.querySelector('#remove-form-button');
        const form = document.querySelector('.task-form');
    

        popUpTaskButton.addEventListener('click', function (e) {
            e.preventDefault()
            taskPopUp.addForm();
        });
    
        removeButtonPopUpTask.addEventListener('click', function (e) {
            e.preventDefault();
            taskPopUp.removeForm();
        });
    
    })();

    const renderGeneral = (() => {
        const general = document.querySelector('#general');

        general.addEventListener('click', function(e) {
            e.preventDefault();
            renderTasks(getTasks());
        });
    })();

export {createTaskEvent, taskPopUpEvent};