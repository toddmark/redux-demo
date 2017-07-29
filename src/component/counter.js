import React, { Component } from 'react';
import { connect } from 'react-redux';

//action
import { add, minus } from '../action/count.js';

// const mapStateToProps = count => ({ count })
// const mapDispatch = dispatch => ({ dispatch })
// Index = connect(mapStateToProps, mapDispatch)(Index)


@connect(state => ({count: state.count.count}))
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
         <span>counter: {value}</span> 
      </div>
    )
  }
}

export default Index;