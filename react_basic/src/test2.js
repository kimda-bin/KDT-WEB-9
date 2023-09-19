import { Component } from "react";
import image from "./동물1.PNG";

class Test2 extends Component {
  render() {
    const style = {
      color: "orange",
      fontSize: "40px",
      marginTop: "20px",
    };
    return (
      <>
        <div style={style}>
          <h2>안녕하세요</h2>
          <img src={image}></img>
        </div>
      </>
    );
  }
}

export default Test2;
