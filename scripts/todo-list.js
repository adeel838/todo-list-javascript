let myTodoList = [{
  name: "make dinner",
  date: "23/12/2024"
}, {
  name: "wash dishes",
  date: "23/12/2024"
}];

renderTodoList();
function renderTodoList (){
  let todoHTML = '';

  for (let i = 0; i < myTodoList.length; i++
  ) {
    const todoObj = myTodoList[i];
    const {name,date} = todoObj;
    let html = `
      <div>${name}</div>
      <div>${date}</div>
      <button class = "delete-button" onclick = "
        myTodoList.splice(${i},1);
        renderTodoList();
      ">
        Delete
      </button>
    `;
    todoHTML += html;
  }

  document.querySelector('.js-todo-div').innerHTML = todoHTML;
}


function getInputText () {
  let inputElement = document.querySelector ('.js-input')
  const name = inputElement.value;

  let inputDateElement = document.querySelector ('.js-date-input')
  const date = inputDateElement.value;

  myTodoList.push({
     name:name,
    date:date
  });
  inputElement.value = ''; 

  renderTodoList ();
}
