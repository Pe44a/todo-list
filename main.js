(()=>{"use strict";document.querySelector("#content").innerHTML='\n        <div class="header">To-do</div>\n        <div class="sidebar">\n            <a href="" class="project-name">#General</a>\n            <div class="project-name">#Projects</div>\n                <div class="projects">\n                    <a href="" class="project">Default</a>\n                </div>\n        </div>\n        <div class="task"></div>\n        <button id="pop-up-task-form">+</button>\n\n\n        \x3c!--Form--\x3e\n        <form class="task-form hidden" action="" method="get">\n            <div class="form-headline-container">\n                <legend class="form-headline">Add task</legend>\n                <button id="remove-form-button">x</button>\n            </div> \n\n            <div>\n                <label for="title"></label>\n                    <input type="text" name="title" id="task-title"  class="input" placeholder="Title">\n            </div>\n\n            <div>\n                <label for="description"></label>\n                    <textarea name="description" id="task-description" class="input" cols="21" rows="10" placeholder="Description"></textarea>\n            </div>\n\n            <div>\n                <label for="dueDate">Due Date:</label>\n                <input type="date" name="dueDate" id="task-dueDate" class="input">\n            </div>\n\n            <div>\n                <label for="priority">Priority: </label>\n                <select name="priority" id="task-priority" class="input">\n                    <option value="low">Low</option>\n                    <option value="medium">Medium</option>\n                    <option value="high">High</option>\n                </select>\n            \n            \n                <input type="submit" value="Submit" id="submit-task">\n            </div>\n        </form>\n            ',(e=>{const t=document.querySelector("#pop-up-task-form"),n=document.querySelector("#remove-form-button"),i=document.querySelector(".task-form");t.addEventListener("click",(function(e){e.preventDefault(),i.classList.remove("hidden")})),n.addEventListener("click",(function(e){e.preventDefault(),i.classList.add("hidden"),i.reset()}))})(),document.querySelector("form.task-form").addEventListener("submit",(function(e){e.preventDefault();(e=>{let t=JSON.parse(localStorage.getItem("tasks"))||[];t.push(e),localStorage.setItem("tasks",JSON.stringify(t))})({tittle:document.querySelector("#task-title").value,description:document.querySelector("#task-description").value,dueDate:document.querySelector("#task-dueDate").value,priority:document.querySelector("#task-priority").value})}))})();
//# sourceMappingURL=main.js.map