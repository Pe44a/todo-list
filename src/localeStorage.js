    
    const saveTask = (task) => {
        
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push(task);

        localStorage.setItem('tasks', JSON.stringify(tasks));
    };


    const getTasks = () => {

        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

        return {tasks}
    };



    const saveProject = (project) => {
        
        let projects = JSON.parse(localStorage.getItem('projects')) || [];
        project.tasksIndex = [];
        projects.push(project);        

        localStorage.setItem('projects', JSON.stringify(projects));
    };


    const getProjects = () => {

        let projects = JSON.parse(localStorage.getItem('projects')) || [];

        return {projects}
    };


    // You save last 'tasks' array index, for 'projects' tasksIndex property
    // Push that task index in tasksIndex
    const saveTaskIndex = (index) => {


        const tasks = getTasks();
        const projects = getProjects();

        projects.projects[index].tasksIndex.push(tasks.tasks.length);      

        localStorage.setItem('projects', JSON.stringify(projects.projects));
    };

export {saveTask, getTasks, saveProject, getProjects, saveTaskIndex};