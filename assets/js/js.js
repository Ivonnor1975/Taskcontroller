var dia=moment().format("dddd, MMMM Do YYYY");
var hora=moment().format("h");
//var tasks = [{textname:'pickup xyz', hour: 9}, {textname:'Daniel Meeting', hour: 10}, {textname:'Banker Lunch', hour: 11}];
var tasks= [];
    


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
        $.each(tasks, function(index,task){
            createTask(task.textname, task.hour);
         });
         //save on local storage
         saveTasks();  //may be not need it here since it is done only when loading page 
  };
  //Refresh screen when page load first time
  var createTask = function(taskn, taskh){
    //load task name  on the area for the var hour
    $(("#task"+taskh)).val(taskn); 
    //load intial and score to object
    var taskDataObj = {
        taskname: taskn,
        taskhour: taskh,
    };
    // save task as an object with name, and hour then push it into tasks array    
    tasks.push(taskDataObj);
 };

 var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};


var editTask = function (taskId) {
    console.log(taskId);
    //tasks.sort(function(a, b){return a.hour - b.hour});
    // get textarea element that was modified.
    var taskDataObj = {
        taskname: $(("#task"+taskId)).val(),
        taskhour: parseInt(taskId)};
    tasks.push(taskDataObj);
    tasks.sort(function(a, b){return a.hour - b.hour});
    saveTasks()
  };

  //waiting to capture answer for save buttons
  var taskButtonHandler = function (event) {
    // get target element from event
    var targetEl = event.target;
    if (targetEl.matches(".saveBtn")) {
      console.log(targetEl);
      var taskId = targetEl.id;
      console.log(taskId);
      editTask(taskId);
    }
  };
 
var auditTask=function(){
    var Currenthora=moment().format("h");
    //compare hours with textarea id and add class past, present and future
}

// audit task past due hourly every 30 minutes
setInterval(function() {
    $(".card .list-group-item").each(function() {
      auditTask($(this));
    });
  }, 1800000);

  
//Event listener
  $("#target").click(taskButtonHandler);
 // load tasks for the first time
loadTasks();
