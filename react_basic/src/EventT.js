import { Component } from "react";

class EventT extends Component {
  //그냥 alert 창에 바로 this.props.message해도 된다
  clickButton = (str) => {
    alert(str);
  };

  render() {
    const { message } = this.props;
    return (
      <>
        <button onClick={() => this.clickButton(message)}>Show Message</button>
      </>
    );
  }
}

export default EventT;
