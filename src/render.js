import {clearTasks} from './domManipulations.js';

    const renderTasks = (tasks) => {
        const tasksDiv = document.querySelector('.tasks');

        //Clears .tasks before renders
        tasksDiv.innerHTML = '';

            tasks.tasks.forEach(task => {
                

                const taskDiv = document.createElement('div');
                taskDiv.classList.add('task-container');
                taskDiv.innerHTML = `        
                <div class="task-div checkbox-wrapper"> <input type="checkbox"> <p>${task.tittle}</p> <p>${task.dueDate}</p> </div>
                <div class="task-div"> <a href="" class="edit-button">Edit</a> <a href="" class="delete-button">Delete</a> </div>
                `;
                tasksDiv.appendChild(taskDiv);
            });
    };

export {renderTasks};