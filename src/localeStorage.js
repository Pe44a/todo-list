    
    const saveTask = (task) => {
        
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push(task);

        localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    const getTasks = () => {
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

        return {tasks}
    };


export {saveTask, getTasks};