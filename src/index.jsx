import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore, bindActionCreators } from 'redux';
import { Provider, connect } from 'react-redux';
import { AppContainer } from 'react-hot-loader';

//reducer
import todo from './reducer/index.js';

//action
import { add } from './action/index.js';

let store = createStore(todo)

@connect(count => ({count}))
class Index extends Component {
  render() {
    const { dispatch } = this.props;
    return (
      <div>
        <button onClick={() => dispatch(add())}> + </button>
        <button> - </button>
        <span>{this.props.count}</span>
      </div>
    )
  }
}

// const mapStateToProps = count => ({ count })
// const mapDispatch = dispatch => ({ dispatch })
// Index = connect(mapStateToProps, mapDispatch)(Index)

ReactDOM.render((
  <AppContainer>
    <Provider store={store}>
      <Index />
    </Provider>
  </AppContainer>
), document.getElementById('app'));


if (module.hot) {
  module.hot.accept()
}