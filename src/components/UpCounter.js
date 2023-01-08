import React, { Component } from "react";

class UpCounter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { onButtonClick } = this.props;
    return (
      <div>
        <button onClick={onButtonClick}>Count Up</button>
      </div>
    );
  }
}

export default UpCounter;
