document.addEventListener("DOMContentLoaded", () => {
  // your code here


    document.getElementById("create-task-form").addEventListener("submit", function(event){
    event.preventDefault();
    event.target[0].value;
    
    let li = document.createElement("li");
    
    li.textContent = event.target[0].value;
    
    document.getElementById("tasks").append(li)
    
    });
    
  })