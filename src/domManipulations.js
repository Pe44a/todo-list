export const taskPopUp = ((e) => {
    const form = document.querySelector('.task-form');

    // Displays form
    const addForm = () => {
        form.classList.remove('hidden');
    };

    // Removes form
    const removeForm = () => {
        form.classList.add('hidden');
        form.reset();
    };

    return{addForm, removeForm};
})();




