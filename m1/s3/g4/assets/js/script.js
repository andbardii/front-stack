let controlAddTask = function () {
    if (document.querySelector('.addTask input').value.length === 0) {
      alert('Inserisci la Task')
    } else {
      addTask()
    }
}
const addTask = function () {
  let yourTasks = document.querySelector('#yourTasks')
  let newInput = document.querySelector('#newTask input')
  let newTask = 
    `<div class="task">
          <span id="taskname">
              ${inputField.value}
          </span>
          <button class="deleteTask">X</button>
      </div>`
 yourTasks.innerHTML += newTask
  newInput.value = ''
}