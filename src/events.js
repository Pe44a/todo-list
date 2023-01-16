import {Task} from '/src/task.js';
import {Project} from '/src/project.js'; 
import {saveTask, getTasks, saveProject, getProjects, saveTaskIndex} from '/src/localeStorage.js';
import {popUp} from '/src/domManipulations.js';
import {renderTasks, renderProjects, renderProjectsSelection, renderProjectTasks} from '/src/render.js';



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

        const tasks = getTasks();

        projects.forEach((project)=> {
            project.addEventListener('click', (e) => {
                e.preventDefault();

                const projectIndex = e.target.dataset.projectIndex;

                renderProjectTasks(projectIndex);
            });
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