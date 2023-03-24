import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import store from './store'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))

console.log(store.getState())

const todoInput = document.getElementById('todo-input')
const todosList = document.getElementById('todo-list')

document.getElementById('add-todo-btn').addEventListener('click', () => {
  store.dispatch({
    type: 'ADD_TODO',
    payload: todoInput.value
  })
}) 

function render() {
  const todos  = store.getState()
  const renderedTodoList = todos.map((todo) => `<li class="todo">${todo}</li>`).join('')
  todosList.innerHTML = renderedTodoList
}

render()

store.subscribe(render)
