import { Component } from "react";
import DownCounter from "./DownCounter";
import UpCounter from "./UpCounter";

class CounterWidget extends Component {
  constructor(props) {
    super(props);

    this.state = { counter: 0 };
    this.countUp = this.countUp.bind(this);
    this.countDown = this.countDown.bind(this);
  }

  logMessage() {
    console.log(`You clicked a counter button... idk which one lol`);
  }

  countUp() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  countDown() {
    this.setState({
      counter: this.state.counter - 1,
    });
  }

  render() {
    return (
      <div>
        <p>Count is: {this.state.counter}</p>
        <UpCounter onButtonClick={this.countUp} />
        <DownCounter onButtonClick={this.countDown} />
      </div>
    );
  }
}

export default CounterWidget;
