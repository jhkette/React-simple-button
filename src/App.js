import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


function Child({ onAction }) {
  return (
    <button onClick={onAction}>
      Click Me!
    </button>
  );
}

function Reset({resetButton}){
  return(
    <button onClick={resetButton}>
      Reset
    </button>
  )
}


class CountingParent extends
React.Component {
  state = {
    actionCount: 0
  };

  reset = press => {
    console.log(press);

    this.setState({
      actionCount: 0
    });

  };

  handleAction = action => {
    console.log(
      "Child says",
      action
    );

    // actionCount is incremented,
    // and the new count replaces
    // the existing one
    this.setState({
      actionCount:
        this.state.actionCount + 1
    });
  };

  render() {
    return (
      <div>
        <Child
          onAction={
            this.handleAction
          }
        />
        <Reset resetButton ={
          this.reset}/>
        <p>
          Clicked
          {" "}
          {this.state.actionCount}
          {" "}
          times
        </p>
      </div>
    );
  }
}
 

export default CountingParent;
