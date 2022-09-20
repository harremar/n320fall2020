import React from "react";

export default class UserName extends React.Component {
  state = { uname: "" };

  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }
  render() {
    return (
      <div className="uname">
        <p> {this.state.uname} </p>
        <input
          value={this.state.uname}
          onChange={(event) => {
            this.handleChange(event);
          }}
        ></input>
      </div>
    );
  }
  handleChange(event) {
    this.setState({ uname: event.target.value });
  }
}
