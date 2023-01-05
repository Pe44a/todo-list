import {Task} from '/src/task.js'; 
import {saveTask, getTasks} from '/src/localeStorage.js';
import {popUp} from '/src/domManipulations.js';
import {renderTasks} from '/src/render.js';

    const taskSubmitEvent = (()=> {
        const submitTask = document.querySelector('form.task-form');


        submitTask.addEventListener('submit', function(e) {
            e.preventDefault();

            const form = document.querySelector('.task-form');

            const title = document.querySelector('#task-title').value;
            const description = document.querySelector('#task-description').value;
            const dueDate = document.querySelector('#task-dueDate').value;
            const priority = document.querySelector('#task-priority').value;

            // Creates task
            const task = Task(title, description, dueDate, priority);

            
            saveTask(task);
            popUp.removeForm(form); 
            });
        })();


    const taskPopUpEvent = (() => {
        const popUpTaskButton = document.querySelector('#pop-up-task-form');
        const removeButtonPopUpTask = document.querySelector('#remove-task-form-button');
        const form = document.querySelector('.task-form');
    

        popUpTaskButton.addEventListener('click', function (e) {
            e.preventDefault()
            popUp.addForm(form);
        });
    
        removeButtonPopUpTask.addEventListener('click', function (e) {
            e.preventDefault();
            popUp.removeForm(form);
        });
    
    })();


    const projectPopUpEvent = (() => {
        const popUpProjectButton = document.querySelector('#pop-up-project-form');
        const closeProjectButton = document.querySelector('#remove-project-form-button');            
        const form = document.querySelector('.project-form');

        popUpProjectButton.addEventListener('click', function(e) {
            e.preventDefault()
            popUp.addForm(form);
        });

        closeProjectButton.addEventListener('click', function(e) {
            e.preventDefault();
            popUp.removeForm(form);
        });


    })();

    const renderGeneral = (() => {
        const general = document.querySelector('#general');

        general.addEventListener('click', function(e) {
            e.preventDefault();
            renderTasks(getTasks());
        });
    })();

export {taskSubmitEvent, taskPopUpEvent};