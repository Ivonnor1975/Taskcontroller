var dia=moment().format("dddd, MMMM Do YYYY");  //get the current date
var hora=moment().format("HH"); //get the current hour 
var tasks= []; 

var loadTasks=function(){
        auditTask();
        tasks = [];  //initialize array
        // read from local storage
        tasks = JSON.parse(localStorage.getItem("tasks"));
        if (tasks) { //if a task is saved on local storage then         
        //loop over array to recreate tasks on the webpage
              $.each(tasks, function(index,tasks){
              recreateTask(tasks.taskname, tasks.taskhour);
              });
        };
  };
  //Refresh screen when page load first time
  var recreateTask = function(taskn, taskh){
    //load task name on the textarea for the block hour
    $(("#task"+taskh)).val(taskn); //display the new value
   };

//save array to local storage
 var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};


var editTask = function (taskId) {
    // get textarea element that was modified.
    var taskDataObj = {
        taskname: $(("#task"+taskId)).val(),
        taskhour: parseInt(taskId)
    };
    if (!tasks){  //if it is first task that is going to be added 
        tasks= [];
        tasks.push(taskDataObj);
        saveTasks();
    }
    else{
        //search on array if hour already exist and replace on array with new data
        var index = -1;
        for(let y=0; y < tasks.length; y++){
                if (tasks[y].taskhour===taskDataObj.taskhour){
                    index=y;
                };
        };
        if (index < 0){  //the task does not previously exist. adding new task
            tasks.push(taskDataObj);
            tasks.sort(function(a, b){return a.taskhour - b.taskhour});
            saveTasks();
        }
        else{   //the task exist, update the array and save locally
            tasks[index].taskname= taskDataObj.taskname;
            saveTasks();
        }
    }
  };

  //waiting to capture answer for save buttons
  var taskButtonHandler = function (event) {
    // get target element from event
    var targetEl = event.target;
    if (targetEl.matches(".saveBtn")) {
      var taskId = targetEl.id;
      editTask(taskId);
    }
  };
 // set background to each task base on current hour (past, present or future)
var auditTask = function(){
        //get current date and format it    
        var dia=moment().format("dddd, MMMM Do YYYY");
        //Dispaly current day on web
        $("#currentDay").replaceWith(dia);
        //capture current hour
        hora=parseInt(moment().format("HH"));
        //loop to each button to apply color to areatext based on current hour time
        $(".saveBtn").each(function() {
            var timeblockhour= parseInt(this.id);
            if (timeblockhour < hora){
                $("#d"+this.id).removeClass( "past present future" ).addClass("past");
            }
            else{
            if (timeblockhour===hora){
                $("#d"+this.id).removeClass( "past present future" ).addClass("present");
            }
            else{
            if (timeblockhour > hora){
                $("#d"+this.id).removeClass( "past present future" ).addClass("future");
                }
            }
        }
        });
}

// run audit task past due hourly every 30 minutes
setInterval(function() {
    auditTask();
}, 1800000);
  
//Event listener
$("#target").click(taskButtonHandler);

// load tasks for the first time
loadTasks();
