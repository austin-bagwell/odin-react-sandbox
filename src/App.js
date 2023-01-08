import React, { Component } from "react";
import MyComponent from "./components/MyComponent";
import CounterWidget from "./components/CounterWidget";
import Header from "./components/Header";
import Clock from "./components/Clock";

class App extends Component {
  constructor(props) {
    super(props);

    this.onClickBtn = this.onClickBtn.bind(this);
  }

  onClickBtn() {
    console.log("Button has been clicked!");
  }

  render() {
    return (
      <div>
        <Header name="Austin" />
        <MyComponent title="React" onButtonClick={this.onClickBtn} />
        <CounterWidget />
        <Clock />
      </div>
    );
  }
}

export default App;
