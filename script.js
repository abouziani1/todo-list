let taskInput = document.querySelector(".prompt__task");
let btnInput = document.querySelector(".prompt__btn");
let taskList = document.querySelector(".task__list")
let errorText = document.querySelector(".prompt__error")


btnInput.addEventListener("click", ()=>{
    if (taskInput.value.trim().length > 2) {
        createTask();
        errorText.style.display = "none";
    }
    else{
        errorText.style.display = "grid"
    }
})

addEventListener("keydown", (e)=>{
    if (e.code == "Enter") {
        if (taskInput.value.trim().length > 2) {
            createTask();
            errorText.style.display = "none";
        }
        else{
            errorText.style.display = "grid"
        }
    }
    taskInput.focus()
})

taskList.addEventListener("click", (e)=>{
    if (e.target.classList.contains("task__check")) {
        const checkbox = e.target
        const task = checkbox.closest(".task");
        const text = task.querySelector(".task__text")

        text.classList.toggle("completed")
    }
    else if (e.target.classList.contains("garbage")) {
        const removeList = e.target;
        const task = removeList.closest(".task")

        task.remove()
    }
})

function createTask() {
    let htmlContent = 
    `<div class="task">
        <div class="checkbox-container">
            <input class="task__check" type="checkbox">
        </div>
        <div class="text-container">
            <p class="task__text">${taskInput.value.trim()}</p>
        </div>
        <div class="remove__task">
                <img src="Papelera.png" class="garbage">
            </div>
    </div>`
    taskList.insertAdjacentHTML("beforeend", htmlContent)
    taskInput.value = "";
}
