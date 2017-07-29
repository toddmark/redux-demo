import React, { Component } from 'react';
import { connect } from 'react-redux';

// actions
import { changeInput, addTodo, complete } from '../action/todos.js';

@connect(state => ({
  inputVal: state.todos.inputValue,
  todos: state.todos.todos
}))
class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: ''
    }
  }
  render() {
    const { dispatch, inputVal } = this.props;
    return (
      <div>
        <input value={this.state.inputVal} onChange={(e)=> {
          this.setState({
            inputVal: e.target.value
          })
          dispatch(changeInput(e.target.value))
        }} type="text"/>
        <button onClick={()=>{
          this.setState({
            inputVal: ''
          });
          dispatch(addTodo(this.state.inputVal))
        }}>Add</button>
        <ul>
          {this.props.todos.map(item => (
            <li style={{cursor: 'pointer', textDecoration: item.completed ? 'line-through' : 'none'}} 
              onClick={() => dispatch(complete(item.id))} key={item.id}
            >{item.text}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Todos;

/*
1.https://facebook.github.io/react/docs/forms.html#controlled-components what is controlled components?
 */