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


var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };


// audit task due dates every 30 minutes
setInterval(function() {
    $(".card .list-group-item").each(function() {
      auditTask($(this));
    });
  }, 1800000);
  

// load tasks for the first time
loadTasks();
