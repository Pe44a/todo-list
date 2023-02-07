// import {pageLoad} from '/src/pageLoad.js';
import {taskPopUpEvent, createTaskEvent} from '/src/events.js';
import {getTasks, getProjects} from '/src/localeStorage.js';
import {renderTasks, renderProjects} from '/src/render.js';





(() => {
   window.addEventListener('DOMContentLoaded', function() {
       renderTasks(getTasks());
       renderProjects(getProjects());
   });
})();





