import { Component } from "react";

class Test extends Component {
  render() {
    const name = "다빈";
    const myStyle = {
      backgroundColor: "blue",
      color: "orange",
      fontSize: "40px",
      padding: "12px",
    };
    return (
      <>
        <div style={myStyle}>{name}</div>
      </>
    );
  }
}

export default Test;
