var tasks = {};

var loadTasks = function() {
  tasks = JSON.parse(localStorage.getItem("tasks"));
  // if nothing in localStorage, create a new object to track all task status arrays
  if (!tasks) {
    tasks = {
      toDo: [],
    };
  }
  // loop over object properties
  $.each(tasks, function(list, arr) {
    console.log(list, arr);
    // then loop over sub-array
    arr.forEach(function(task) {
      createTask(task.text, task.hour);
    });
  });
};

// task text was clicked
$(".list-group").on("click", "p", function() {
  // get current text of p element
  var text = $(this)
    .text()
    .trim();

  // replace p element with a new textarea
  var textInput = $("<textarea>").addClass("form-control").val(text);
  $(this).replaceWith(textInput);

  // auto focus new element
  textInput.trigger("focus");
});

// editable field was un-focused
$(".list-group").on("blur", "textarea", function() {
  // get current value of textarea
  var text = $(this).val();

  // get status type and position in the list
  var status = $(this)
    .closest(".list-group")
    .attr("id")
    .replace("list-", "");
  var index = $(this)
    .closest(".list-group-item")
    .index();

  // update task in array and re-save to localstorage
  tasks[status][index].text = text;
  saveTasks();

  // recreate p element
  var taskP = $("<p>")
    .addClass("m-1")
    .text(text);

  // replace textarea with new content
  $(this).replaceWith(taskP);
});


var saveTasks = function() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};


// load tasks for the first time
loadTasks();


///other from brainquiz

var saveScore=function(){
  //load intial and score to object
  var takerinitials = document.querySelector("input[name='initials']").value;
  var takerDataObj = {
      initiales: takerinitials.toUpperCase(),
      grado: score,
  };
  // save taker as an object with initials, score properties then push it into takers array
  takers.push(takerDataObj);
  takers.sort(function(a, b){return b.grado - a.grado});
  //save on local storage
  localStorage.setItem("takers", JSON.stringify(takers));
  
};

var saveScore=function(){
  //load intial and score to object
  var takerinitials = document.querySelector("input[name='initials']").value;
  var takerDataObj = {
      initiales: takerinitials.toUpperCase(),
      grado: score,
  };
  // save taker as an object with initials, score properties then push it into takers array
  takers.push(takerDataObj);
  takers.sort(function(a, b){return b.grado - a.grado});
  //save on local storage
  localStorage.setItem("takers", JSON.stringify(takers));
  
};


//waiting to capture answer for each quesion
var taskButtonHandler = function(event){
  // get target element from event what option was selected
  var targetEl = event.target;
  var taskId = targetEl.getAttribute("data-task-id");
  if (taskId=== resp){
      h4El.textContent = 'Your answer is Correct';
      h4El.textContent;
      score++;
  }else{
      h4El.textContent = 'Your answer is Wrong';
      h4El.textContent;
      timeleft-=10;
  }
  if (timeleft<0){
      timeleft=0;
  };
 i++;
 if(i < questions.length){
      cleanbtns();
      loadnextquestion(i); 
 }else{ 
      timeleft=0;
  }
};
