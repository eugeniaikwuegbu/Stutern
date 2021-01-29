// Click on a close button to hide the current list item
// $(document).ready(function(){
//   $("a").click(function(){
//       for(var i = 0; i < $("li").length; i++){
//         $("li").eq(i).remove(i);
//       }
//     })
// })

 
class ToDoClass{
    constructor(){
      this.tasks = JSON.parse(localStorage.getItem("TASKS"));
        if (!this.tasks){
          this.tasks = [
            {
              task : 'Practice functions',
              isComplete : false
            },
            {
              task : 'Read up',
              isComplete : false
            },
            {
              task : 'See a movie',
              isComplete : false
            }
          ];
        }
      
      this.loadTasks();
    }
    loadTasks(){
      localStorage.setItem("TASKS", JSON.stringify(this.tasks))
      let tasksHtml = this.tasks.reduce((html, task, index) =>{
        return html+= this.generateTaskHtml(task,index)
      }, "");
      $("#taskList").html(tasksHtml);
    }
  
    generateTaskHtml(task, index){
      return  (
          '<li class="list-group-item checkbox">' +
          '<div class="row">' +
              '<div class="col-md-1 col-xs-1 col-lg-1 col-sm-1 checkbox">' +
                  '<label>' +
                  '<input' + 
                  'type="checkbox"' + 
                   'id="input"' +
                   onchange + '=' + toDo.toggleTaskStatus(index) +
                   task.isComplete ? "checked" : "" +'>' +
                   '</label>' +
              '</div>' +
              '<div class="col-md-10 col-xs-10 col-lg-10 col-sm-10">' +
                  task.task +
              '</div>' +
              '<div class="col-md-1 col-xs-1 col-lg-1 col-sm-1"' +
              onclick + '=' + toDo.deleteTask(event, index) + '>' +
                '<i class="fas fa-trash-alt delete-icon"></i>' +
              '</div>'+
          '</div>'+
      '</li>'
      )
    }
  
  
    addTaskClick(){
      let target = document.getElementById("addTask");
      this.addTask(target.value);
      target.value = ""
    }
  
  
    addTask(task) {
      let newTask = {
        task, // because the object name and its value are the same(or task: task,)
        isComplete : false
      }
      let parentDiv = document.getElementById("addTask").parentElement;
      if (task === ""){
        parentDiv.classList.add("has-error")
      }
      else{
        parentDiv.classList.remove("has-error")
        this.tasks.push(newTask);
        this.loadTasks();
  
      }
    }
  
  
  
      toggleTaskStatus(index){
        this.tasks[index].isComplete = !this.tasks[index].isComplete;
      }
      deleteTask(event, index){
        event.preventDefault();
        this.tasks.splice(index, 1);
        this.loadTasks();
      }
  }
      let toDo;
      window.addEventListener("load", () =>{
        toDo = new ToDoClass()
      })

