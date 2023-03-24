// STORE
function createStore(reducer) {

  // 1. El estado
  // 2. Forma de obtener el estado
  // 3. Escuchar cambios de ese estado
  // 4. Actualiza el estado

  let state
  let listeners = []

  const getState = () => state

  const subscribe = (listener) => {
    listeners.push(listener)

    return () => {
      listeners = listeners.filter(l => l !== listener)
    }
  }

  const dispatch = (action) => {
    state = reducer(state, action)
    listeners.forEach((listener) => listener())
  }

  return {
    getState,
    subscribe,
    dispatch
  }
}

// REDUCER todos
function todos(state = [], action) {
  if (action.type === 'ADD_TODO') {
    return state.concat([action.payload])
  }

  if (action.type === 'REMOVE_TODO') {
    return state.filter((todo) => todo !== action.payload)
  }

  return state
}

const store = createStore(todos)

console.log(store.getState())