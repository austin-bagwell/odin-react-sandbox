import React, { Component } from "react";

class DownCounter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { onButtonClick } = this.props;
    return (
      <div>
        <button onClick={onButtonClick}>Count Down</button>
      </div>
    );
  }
}

export default DownCounter;
