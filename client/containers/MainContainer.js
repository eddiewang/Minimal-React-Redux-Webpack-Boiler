import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'; 
import * as testActions from '../actions/testActions';
import '../styles/style.scss';

const MainContainer = React.createClass({
  render () {
    return (
      <div>
      <div>Hello World</div>
      <button onClick={() => this.props.actions.testAction()}>Click Me</button>
      <h1>{this.props.count}</h1>
      </div>
    )
  }
})

function mapStateToProps(state) {
  return {
    count: state.testReducer
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(testActions, dispatch),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContainer);