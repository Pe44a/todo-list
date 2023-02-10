import {clearTasks} from './domManipulations.js';
import {getTasks, getProjects} from '/src/localeStorage.js';
import {deleteTaskEvent, editTaskPopUpEvent, closeEditFormEvent, submitEditFormEvent} from '/src/events.js';
const _ = require('lodash');

    const renderTasks = (tasks) => {
        const tasksDiv = document.querySelector('.tasks');

        //Clears .tasks before renders
        tasksDiv.innerHTML = '';

        if(tasks !== undefined){
        tasks.tasks.forEach((task, index) => {
            

            const taskDiv = document.createElement('div');
            taskDiv.classList.add('task-container');
            taskDiv.dataset.tasksIndex = index;
            taskDiv.innerHTML = `        
            <div class="task-div checkbox-wrapper"> <input type="checkbox"> <p>${task.title}</p> <p>${task.dueDate}</p> </div>
            <div class="task-div"> <button href="" class="edit-button">Edit</button> <button href="" class="delete-button">Delete</button> </div>
            `;
            tasksDiv.appendChild(taskDiv);
        });
        }
        deleteTaskEvent();
        editTaskPopUpEvent();
    };


    const renderProjects = (projects) => {
        const projectsDiv = document.querySelector('.projects');

        //Clears .projects before renders
        projectsDiv.innerHTML = '';


        // Renders only if there's actually what to render 
        if(projects.projects.length > 0){
            projects.projects.forEach( (project, index) => {
                const projectLink = document.createElement('a');
                projectLink.href = '';

                projectLink.classList.add('project');
                projectLink.innerHTML = `${project.project}`;
                projectLink.dataset.projectIndex = index;

                projectsDiv.appendChild(projectLink);
            });
        }   
    };


    const renderProjectTasks = (projectIndex) => {
        const tasksDiv = document.querySelector('.tasks');

        //Clears .tasks before renders
        tasksDiv.innerHTML = '';

        const projects = getProjects();
        const tasks = getTasks();
        const projectTaskIndexes = [];


        if(projects.projects.length > 0) {
            
        const project = projects.projects.find((object, index) =>  (index === Number(projectIndex)) ?
        object : undefined);

     
        project.tasksIndex.forEach(taskIndex => {
            tasks.tasks.forEach((task, index) => {
                if (index === taskIndex) {
                    projectTaskIndexes.push(index);
                }
            });
        });
    }

        // Renders if projectTaskIndexes is equal to one of the tasks in 'tasks'
        projectTaskIndexes.forEach( taskIndex => {
            tasks.tasks.forEach((task, index) => {
            
            if(taskIndex === index) {
                const taskDiv = document.createElement('div');
                taskDiv.classList.add('task-container');
                taskDiv.dataset.tasksIndex = index;
                console
                taskDiv.innerHTML = `        
                <div class="task-div checkbox-wrapper"> <input type="checkbox"> <p>${task.title}</p> <p>${task.dueDate}</p> </div>
                <div class="task-div"> <button href="" class="edit-button">Edit</button> <button href="" class="delete-button">Delete</button> </div>
                `;
                tasksDiv.appendChild(taskDiv);
            };
            
        });
    });   

    deleteTaskEvent();

    };
    

    const renderProjectsSelection = (projects) => {
        const projectsSelections = document.querySelector('#project-name');

        //Clears .projects before renders
        projectsSelections.innerHTML = '';


        //Adds default selection 'General'
        const defaultSelection = document.createElement('option');
        defaultSelection.innerHTML = 'General';
        projectsSelections.appendChild(defaultSelection);

        
        if(projects.projects.length > 0){
        projects.projects.forEach( (project, index) => {
            const projectSelection = document.createElement('option');
            projectSelection.innerHTML = `${project.project}`;
            projectSelection.dataset.projectIndex = index;
            projectsSelections.appendChild(projectSelection);
        });
      }
    };


    const renderEditForm = (tasksIndex) => {
        const content = document.querySelector('#content');
        
        const tasks = getTasks();


        const editForm = document.createElement('form');
        editForm.dataset.taskIndex = Number(tasksIndex);
        editForm.classList.add('edit-form');


        editForm.innerHTML = `
            <div class="form-headline-container">
                <legend class="form-headline">Edit task</legend>
                <button id="remove-edit-form-button">x</button>
            </div> 

            <div>
                <label for="title"></label>
                    <input type="text" name="title" id="task-title"  class="input" value="${tasks.tasks[tasksIndex].title}" required>
            </div>

            <div>
                <label for="description"></label>
                    <textarea name="description" id="task-description" class="input" cols="21" rows="10" 
                    required>${tasks.tasks[tasksIndex].description}</textarea>
            </div>

            <div>
                <label for="dueDate">Due Date:</label>
                <input type="date" name="dueDate" id="task-dueDate" class="input" value="${tasks.tasks[tasksIndex].dueDate}" required>
            </div>

            <div>
                <label for="priority">Priority: </label>
                <select name="priority" id="task-priority" class="input" required>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
            </div>
            <input type="submit" value="Submit" class="submit">
            `;


            content.appendChild(editForm);
            closeEditFormEvent();
            submitEditFormEvent();
    };



export {renderTasks, renderProjects, renderProjectsSelection, renderProjectTasks, renderEditForm};