const count = (state = {count: 0}, action) => {
  switch(action.type) {
    case 'ADD':
      return {count: action.text};
    case 'MINUS':
      return {count: action.text};
    default:
      return state;
  }
}

export default count;