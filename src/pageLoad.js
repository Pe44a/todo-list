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
            `;
})();