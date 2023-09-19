import { Component } from "react";

class PropsT1 extends Component {
  render() {
    const style = {
      color: "red",
    };
    return (
      <>
        <h2>
          내가 좋아하는 음식은 <span style={style}>{this.props.food}</span>
        </h2>
      </>
    );
  }
}

PropsT1.defaultProps = {
  food: "피자",
};

export default PropsT1;
