import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import store from './store/index.js'
import DevTools from './tool/devTool.js';

//action
import { add, minus } from './action/index.js';


@connect(state =>  ({count: state.count.count}))
class Index extends Component {
  render() {
    const { dispatch } = this.props;
    let value = this.props.count
    return (
      <div>
        <button onClick={() => {
          dispatch(add(++value))}
        }> + </button>
        <button onClick={() => {
          dispatch(minus(--value))}
        }> - </button>
         <span>{value}</span> 
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
      <div>
        <Index />
        <DevTools />
      </div>
    </Provider>
  </AppContainer>
), document.getElementById('app'));


if (module.hot) {
  module.hot.accept()
}