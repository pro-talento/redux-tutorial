
function createStore() {

  // 1. El estado
  // 2. Forma de obtener el estado

  let state = {
    name: 'Misale'
  }

  const getState = () => state

  return {
    getState
  }

}

const store = createStore()

console.log(store.getState())