var dia=moment().format("dddd, MMMM Do YYYY");
var hora=moment().format("h");
var tasks = {};


var loadTasks=function(){
        //get current date and format it
        var dia=moment().format("dddd, MMMM Do YYYY");
        //Dispaly current day on web
        $("#currentDay").replaceWith(dia);
        tasks = JSON.parse(localStorage.getItem("tasks"));
         // if nothing in localStorage, create a new object to track all task status arrays
        if (!tasks) {
            tasks = [];
              
        };
        //loop over array to create task
        $.each(tasks, function(){
        //createTask(task.text, task.hour);
        });
  };
  var createTask = function(taskText, taskhour){

  };

  var editTask = function (taskId) {
    console.log(taskId);
  
    // get task list item element
    var taskSelected = document.querySelector(
      ".task-item[data-task-id='" + taskId + "']"
    );
  
    // get content from task name and type
    var taskName = taskSelected.querySelector("h3.task-name").textContent;
    console.log(taskName);
  
    var taskType = taskSelected.querySelector("span.task-type").textContent;
    console.log(taskType);
  
    // write values of taskName and taskType to form to be edited
    document.querySelector("input[name='task-name']").value = taskName;
    document.querySelector("select[name='task-type']").value = taskType;
  
    // set data attribute to the form with a value of the task's id so it knows which one is being edited
    formEl.setAttribute("data-task-id", taskId);
    // update form's button to reflect editing a task rather than creating a new one
    formEl.querySelector("#save-task").textContent = "Save Task";
  };


  var taskButtonHandler = function (event) {
    // get target element from event
    var targetEl = event.target;
      if (targetEl.matches(".edit-btn")) {
      console.log("edit", targetEl);
      var taskId = targetEl.getAttribute("data-task-id");
      editTask(taskId);
    }
  };

    
var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
 };


// audit task past due hourly every 30 minutes
setInterval(function() {
    $(".card .list-group-item").each(function() {
      auditTask($(this));
    });
  }, 1800000);
  
 // load tasks for the first time
loadTasks();
