import {clearTasks} from './domManipulations.js';
import {getTasks, getProjects} from '/src/localeStorage.js';
const _ = require('lodash');

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


    const renderProjects = (projects) => {
        const projectsDiv = document.querySelector('.projects');

        //Clears .projects before renders
        projectsDiv.innerHTML = '';

        projects.projects.forEach( (project, index) => {
            const projectLink = document.createElement('a');
            projectLink.href = '';

            projectLink.classList.add('project');
            projectLink.innerHTML = `${project.project}`;
            projectLink.dataset.projectIndex = index;

            projectsDiv.appendChild(projectLink);
        });
    };


    const renderProjectTasks = (projectIndex) => {
        const tasksDiv = document.querySelector('.tasks');

        //Clears .tasks before renders
        tasksDiv.innerHTML = '';
        
        
        const projects = getProjects();
        const project = projects.projects.find((object, index) =>  (index === Number(projectIndex)) ?
        object : undefined);

        const tasks = getTasks();

        project.tasksIndex.forEach(taskIndex => {
            
            console.log(taskIndex);

            const projectTasks = tasks.tasks.find((project, index) => (index === taskIndex) ?
              project : undefined);

              let convertedProjectTasks = _.set({}, 'tasks[0]', projectTasks);

              renderTasks(convertedProjectTasks);
        });   
    };
    

    const renderProjectsSelection= (projects) => {
        const projectsSelections = document.querySelector('#project-name');

        //Clears .projects before renders
        projectsSelections.innerHTML = '';


        //Adds default selection 'General'
        const defaultSelection = document.createElement('option');
        defaultSelection.innerHTML = 'General';
        projectsSelections.appendChild(defaultSelection);


        projects.projects.forEach( (project, index) => {
            const projectSelection = document.createElement('option');
            projectSelection.innerHTML = `${project.project}`;
            projectSelection.dataset.projectIndex = index;
            projectsSelections.appendChild(projectSelection);
        });
    };


export {renderTasks, renderProjects, renderProjectsSelection, renderProjectTasks};