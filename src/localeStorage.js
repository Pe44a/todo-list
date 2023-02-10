    
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

        projects.projects[index].tasksIndex.push(tasks.tasks.length -1);      

        localStorage.setItem('projects', JSON.stringify(projects.projects));
    };


    const deleteTask = (tasksIndex) => {
        let tasks = getTasks();
        let projects = getProjects();
       
 
 
        // Removes tasks
        tasks.tasks.splice(Number(tasksIndex), 1);
        localStorage.setItem('tasks', JSON.stringify(tasks.tasks));
        if(tasks.tasks.length === 0){
            localStorage.removeItem('tasks');
        }
 
 
        // Removes tasksIndex from projects.tasksIndex 
        projects.projects.forEach((project, projectIndex) => {
            projects.projects[projectIndex].tasksIndex.forEach((task, taskIndex)  => {
                task === Number(tasksIndex) ? projects.projects[projectIndex].tasksIndex.splice(taskIndex, 1) : null;
            });
        });
 

        localStorage.setItem('projects', JSON.stringify(projects.projects));
    }

    const editTask = (taskIndex) => {
        
    }
 

export {saveTask, getTasks, saveProject, getProjects, saveTaskIndex, deleteTask};