// import logo from './logo.svg';
import "./App.css";
import React from "react";
import TiredMeter from "./TiredMeter";
import Clock from "./Clock";
import RandRoll from "./components/RandRoll";
import UserName from "./components/UserName";
import RecipeSearch from "./components/RecipeSearch";

export default class App extends React.Component {
  state = {
    pages: [
      <TiredMeter />,
      <Clock />,
      <RandRoll />,
      <UserName />,
      <RecipeSearch />,
    ],
    curPage: 0,
  };

  render() {
    return (
      <div className="App">
        <h1> Hello World</h1>
        <div>
          <button
            onClick={() => {
              this.swapProject(1);
            }}
          >
            Clock
          </button>

          <button
            onClick={() => {
              this.swapProject(4);
            }}
          >
            Recipe Search
          </button>
        </div>
        {this.state.pages[this.state.curPage]}
      </div>
    );
  }

  swapProject(projectIndex) {
    this.setState({ curPage: projectIndex });
  }
}
