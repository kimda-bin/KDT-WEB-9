import React, { Component } from "react";

class RefSampleClassT1 extends Component {
  constructor(props) {
    super(props);

    //state 초기화
    this.state = {
      inputWriter: "", //작성자
      inputTitle: "", //제목
      comments: [], //입력한 내용
    };
    //바인딩
    this.onChange = this.onChange.bind(this);
    this.addComment = this.addComment.bind(this);
    this.myInputWriter = React.createRef();
    this.myInputTitle = React.createRef();
  }

  onChange(e) {
    //console.log(e.target);
    this.setState({ inputWriter: e.target.value });
  }

  addComment() {
    if (this.state.inputWriter.trim() === "") {
      this.myInputWriter.current.focus();
    } else if (this.state.inputTitle.trim() === "") {
      this.myInputTitle.current.focus();
    } else {
      const newComment = {
        writer: this.state.inputWriter,
        title: this.state.inputTitle,
      };
      this.setState({
        comments: [...this.state.comments, newComment],
        inputTitle: "",
        inputWriter: "",
      });
    }
  }

  render() {
    const { inputWriter, inputTitle, comments } = this.state;
    return (
      <>
        <form>
          <label htmlFor="writer">작성자:</label>
          {/* onChange: input, textarea, select 값이 변경될때마다 발생하는 이벤트 핸들러 */}
          <input
            type="text"
            ref={this.myInputWriter}
            id="writer"
            value={inputWriter}
            onChange={(e) => this.onChange(e)}
          />
          <label htmlFor="title">제목:</label>
          <input
            type="text"
            id="title"
            ref={this.myInputTitle}
            value={inputTitle}
            onChange={(e) => this.setState({ inputTitle: e.target.value })}
          />
          <button type="button" onClick={this.addComment}>
            작성
          </button>
        </form>
        <table border={1} cellSpacing={0}>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
            </tr>
          </thead>
          <tbody>
            {/* [ {title, writer},{title, writer},{title, writer}... ] */}
            {comments.map((value, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{value.title}</td>
                  <td>{value.writer}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}

export default RefSampleClassT1;
