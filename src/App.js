import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';


class App extends Component {

  handleOnClickItems() {
    this.props.dispatch({
      type: 'GET_COUNT_OF_ITEMS',
    });
  }

  handleOnClickUsers() {
    this.props.dispatch({
      type: 'GET_COUNT_OF_USERS',
    });
  }

  render() {
    // debugger;
    return (
      <div className="App">
          <button onClick={() => this.handleOnClickItems()}>
            Click to change items count
            </button>
          <button onClick={() => this.handleOnClickUsers()}>
            Click to change user count
          </button>
          <p>{this.props.items.length}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // the mapStateToProps method is executed with each change to the store's state
  // these are the facts of the case and they are undisputed
  debugger;
  return { items: state.items }
}

export default connect(mapStateToProps)(App);
// the actual function name doesn't have to be mapStateToProps, it's just easier and more coherent than 'milkshake' 
// the return value of mapStateToProps is added to the App's props.
