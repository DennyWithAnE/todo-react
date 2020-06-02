import React from "react";
import { hot } from "react-hot-loader";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      list: "",
      toDoList: [],
    };
  }
  handleChange(event) {
    this.setState({
      list: event.target.value,
    });
  }
  handleSubmit(event) {
    var inputList = this.state.list;

    if (inputList.length < 3 || inputList.length > 200) {
      this.setState({
        inputError: "Input should be between 3 and 200 characters!",
      });
    } else {
      var inputList = this.state.toDoList;
      inputList.push(this.state.list);
      this.setState({ list: "" });
    }
  }
  render() {
    var toDoList = this.state.toDoList.map((list) => {
      return <li>{list}</li>;
    });
    return (
      <div className="item">
        <button
          onClick={(event) => {
            this.handleSubmit();
          }}
        >
          Add to list
        </button>
        <ul>{toDoList}</ul>
        <p>{this.state.inputError}</p>
        <input
          className={this.state.inputClass}
          onChange={(event) => {
            this.handleChange(event);
          }}
          value={this.state.list}
        />
      </div>
    );
  }
}

export default hot(module)(App);
