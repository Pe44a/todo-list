import {Task} from '/src/task.js'; 
import {saveTask} from '/src/localeStorage.js';

     export const createTaskObject = (()=> {
        const submitTask = document.querySelector('form.task-form');
        

        submitTask.addEventListener('submit', function(e) {
            e.preventDefault();

            const title = document.querySelector('#task-title').value;
            const description = document.querySelector('#task-description').value;
            const dueDate = document.querySelector('#task-dueDate').value;
            const priority = document.querySelector('#task-priority').value;

            const task = Task(title, description, dueDate, priority);

            saveTask(task);
            });
        })();