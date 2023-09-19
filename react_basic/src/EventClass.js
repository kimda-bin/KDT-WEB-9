import { Component } from "react";

class EventClass extends Component {
  constructor(props) {
    //super는 부모의 값을 사용하기 위하여 넣은 키워드
    super(props);

    //this 바인딩
    //일반형 함수일때만 사용(화살표함수 아님)
    this.handleCilck = this.handleCilck.bind(this);
  }
  handleCilck() {
    alert("클래스형 컴포넌트");
  }

  handleCilck2 = () => {
    alert("클래스형 컴포넌트2");
  };

  render() {
    return (
      <>
        <button onClick={this.handleCilck}>클릭Class</button>
        <button onClick={this.handleCilck2}>클릭Class2</button>
      </>
    );
  }
}

export default EventClass;
