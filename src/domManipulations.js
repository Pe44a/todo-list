    const popUp = (() => {
        

        // Displays form
        const addForm = (form) => {
            form.classList.remove('hidden');
        };

        // Removes form
        const removeForm = (form) => {
            form.classList.add('hidden');
            form.reset();
        };

        return{addForm, removeForm};
    })();


export {popUp};