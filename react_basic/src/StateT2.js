import { Component } from "react";

class StateT2 extends Component {
  state = {
    text: "사라져라",
    display: "",
  };

  displayText = () => {
    this.setState(() => {
      if (this.state.text === "사라져라") {
        return { text: "보여라", display: "none" };
      } else {
        return { text: "사라져라", display: "" };
      }
    });
  };

  render() {
    const style = {
      display: this.state.display,
    };
    return (
      <div>
        <button onClick={this.displayText}>{this.state.text}</button>
        <h2 style={style}>안녕하세요</h2>
      </div>
    );
  }
}

export default StateT2;
