import {Task} from '/src/task.js';
import {Project} from '/src/project.js'; 
import {saveTask, getTasks, saveProject, getProjects, saveTaskIndex, deleteTask} from '/src/localeStorage.js';
import {popUp} from '/src/domManipulations.js';
import {renderTasks, renderProjects, renderProjectsSelection, renderProjectTasks, renderEditForm} from '/src/render.js';
import { last } from 'lodash';

let lastRenderEvent;



    const taskSubmitEvent = (()=> {
        const submitTask = document.querySelector('form.task-form');


        submitTask.addEventListener('submit', function(e) {
            e.preventDefault();

            const form = document.querySelector('.task-form');

            const title = document.querySelector('#task-title').value;
            const description = document.querySelector('#task-description').value;
            const dueDate = document.querySelector('#task-dueDate').value;
            const priority = document.querySelector('#task-priority').value;
            const project = document.querySelector('#project-name');
            const selectedOption = project.options[project.selectedIndex];

            // Creates task
            const task = Task(title, description, dueDate, priority);
            saveTask(task);

            if (selectedOption.hasAttribute('data-project-index')) {
                
                const optionProjectIndex = selectedOption.dataset.projectIndex;

                saveTaskIndex(optionProjectIndex);
            }

            popUp.removeForm(form); 
            });
        })();



    const projectSubmitEvent = (()=> {
        const submitProject = document.querySelector('form.project-form');


        submitProject.addEventListener('submit', function(e) {
            e.preventDefault();

            const form = document.querySelector('.project-form');

            const projectValue = document.querySelector('#project').value;


            // Creates task
            const project = Project(projectValue);

            
            saveProject(project);
            popUp.removeForm(form); 
            renderProjects(getProjects());
            });
        })();

        

    const taskPopUpEvent = (() => {
        const popUpTaskButton = document.querySelector('#pop-up-task-form');
        const removeButtonPopUpTask = document.querySelector('#remove-task-form-button');
        const form = document.querySelector('.task-form');
    

        popUpTaskButton.addEventListener('click', function (e) {
            e.preventDefault()
            popUp.addForm(form);
            renderProjectsSelection(getProjects());
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


    const renderProjectTasksEvent = (() => {

        const projects = document.querySelectorAll('.projects');

        projects.forEach((project)=> {
            project.addEventListener('click', (e) => {
                e.preventDefault();

                const projectIndex = e.target.dataset.projectIndex;


                renderProjectTasks(projectIndex);
                // lastRenderEvent = renderProjectTasks(`${projectIndex}`);
                // console.log(lastRenderEvent);
            });
        });
    })();


    const renderGeneral = (() => {
        const general = document.querySelector('#general');

        general.addEventListener('click', function(e) {
            e.preventDefault();

            renderTasks(getTasks());
            // lastRenderEvent = renderTasks(getTasks());
            // console.log(lastRenderEvent);
        }); 
    })();


    const deleteTaskEvent = () => {


        const deleteButtons = document.querySelectorAll('.delete-button');
       

        deleteButtons.forEach((deleteButton) => {
            deleteButton.addEventListener('click', (e) => {
                e.preventDefault();

                
                const tasksIndex = e.target.parentNode.parentNode.dataset.tasksIndex;
                deleteTask(tasksIndex);

                // lastRenderEvent();
            });
        });
    };


    const editTaskPopUpEvent = () => {
        
        const editButtons = document.querySelectorAll('.edit-button');


        editButtons.forEach((editButton) => {
            editButton.addEventListener('click', (e) => {
                e.preventDefault();

                
                const tasksIndex = e.target.parentNode.parentNode.dataset.tasksIndex;
                renderEditForm(tasksIndex);

                // lastRenderEvent();
            });
        });        
    };

    const submitEditFormEvent = () => {
        const editForm = document.querySelector('.edit-form');
        const taskIndex = editForm.dataset.taskIndex;
        const tasks = getTasks();

        editForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const formData = new FormData(editForm);
            const data = {};

            formData.forEach((value, key) => {
                data[key] = value;
            });

            tasks.tasks[Number(taskIndex)].title = data.title;
            tasks.tasks[Number(taskIndex)].description = data.description;
            tasks.tasks[Number(taskIndex)].dueDate = data.dueDate;
            tasks.tasks[Number(taskIndex)].priority = data.priority;

            localStorage.setItem('tasks', JSON.stringify(tasks.tasks));
            editForm.remove();
        });
    };

    const closeEditFormEvent = () => {
        const closeButton = document.querySelector('#remove-edit-form-button');

        closeButton.addEventListener('click', (e) => {
            e.preventDefault();

            const editForm = document.querySelector('.edit-form');

            editForm.remove();
        });
    }


export {taskSubmitEvent, taskPopUpEvent, deleteTaskEvent, editTaskPopUpEvent, closeEditFormEvent, submitEditFormEvent};