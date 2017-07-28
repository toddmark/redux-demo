const todo = (state = 0, action) => {
  switch(action.type) {
    case 'ADD':
      console.log(action)
      return ++state;
  }
}

export default todo;