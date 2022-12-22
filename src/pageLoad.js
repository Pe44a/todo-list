export const pageLoad = (() => {
    const content = document.querySelector('#content');


      content.innerHTML = `
        <div class="header">To-do</div>
        <div class="sidebar">
            <a href="" class="project-name">#General</a>
            <div class="project-name">#Projects</div>
                <div class="projects">
                    <a href="" class="project">Default</a>
                </div>
        </div>
        <div class="task"></div>
        <button id="pop-up-task-form">+</button>


        <!--Form-->
        <form class="task-form hidden" action="" method="get">
            <div class="form-headline-container">
                <legend class="form-headline">Add task</legend>
                <button id="remove-form-button">x</button>
            </div> 

            <div>
                <label for="title"></label>
                    <input type="text" name="title" id="title"  class="input" placeholder="Title">
            </div>

            <div>
                <label for="description"></label>
                    <textarea name="description" id="description" class="input" cols="21" rows="10" placeholder="Description"></textarea>
            </div>

            <div>
                <label for="dueDate">Due Date:</label>
                <input type="date" name="dueDate" id="dueDate" class="input">
            </div>

            <div>
                <label for="priority">Priority: </label>
                <select name="priority" id="priority" class="input">
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
            
            
                <input type="submit" value="Submit" id="submit-task">
            </div>
        </form>
            `;
})();