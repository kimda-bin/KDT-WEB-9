import { Component } from "react";

class StateT1 extends Component {
  state = {
    text: "검정색 글씨",
    color: "black",
  };

  redText = () => {
    this.setState(() => {
      return { text: "빨간색 글씨", color: "red" };
    });
  };

  blueText = () => {
    this.setState(() => {
      return { text: "파란색 글씨", color: "blue" };
    });
  };
  render() {
    const style = {
      color: this.state.color,
    };
    return (
      <div>
        <h1 style={style}>{this.state.text}</h1>
        <button onClick={this.redText}>빨간색</button>
        <button onClick={this.blueText}>파란색</button>
      </div>
    );
  }
}

export default StateT1;
