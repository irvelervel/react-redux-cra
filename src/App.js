import React from "react";
import Button from "react-bootstrap/Button";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
  increment: () =>
    dispatch({
      type: "INCREMENT"
    })
});

function App(props) {
  return (
    <div className="App">
      {console.log("PROPS", props)}
      <header className="App-header">
        <Button variant="info" onClick={props.increment}>
          +
        </Button>
        {props.count}
        <Button variant="info">-</Button>
      </header>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
