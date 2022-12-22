export const taskPopUp = ((e) => {
    const popUpTaskButton = document.querySelector('#pop-up-task-form');
    const removeButtonPopUpTask = document.querySelector('#remove-form-button');
    const form = document.querySelector('.task-form');

    
    const addForm = () => {
        form.classList.remove('hidden')
    };


    const removeForm = () => {
        form.classList.add('hidden')
    };

    popUpTaskButton.addEventListener('click', function (e) {
        e.preventDefault()
        addForm();
        console.log('hello');
    });

    removeButtonPopUpTask.addEventListener('click', function (e) {
        e.preventDefault();
        removeForm();
        form.reset();
        console.log('hello');
    });


})();




