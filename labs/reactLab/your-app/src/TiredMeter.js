import "./App.css";
import React from "react";

export default class App extends React.Component {
  state = { tired: 10 };
  render() {
    return (
      <div className="tired">
        <p>
          {" "}
          I am level {this.state.tired} tired. Importance: {""}{" "}
          {this.props.importance}
        </p>
      </div>
    );
  }
}
