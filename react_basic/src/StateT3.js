import { Component } from "react";
import "./App.css";

class StateT3 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 0,
      value: "",
      arrState: [],
    };
    this.upload = this.upload.bind(this);
    this.changeValue = this.changeValue.bind(this);
    this.search = this.search.bind(this);
  }

  upload() {
    const writer = document.querySelector("#writer").value;
    const title = document.querySelector("#title").value;
    const plus = document.querySelector("#plus");
    const arr = [];
    arr.push({
      number: this.state.number,
      writer: writer,
      title: title,
    });
    this.state.arrState.push({
      number: this.state.number,
      writer: writer,
      title: title,
    });
    this.setState({ number: this.state.number + 1 });

    arr.map((txt) => {
      plus.innerHTML += `<tr>
          <td>${txt.number}</td>
          <td>${txt.writer}</td>
          <td>${txt.title}</td>
        </tr>`;
    });
  }

  changeValue() {
    const changeValue = document.querySelector("#change").value;
    this.state.value = changeValue;
  }

  search() {
    const result = document.querySelector("#searchResult");
    const Option = document.querySelector("#Option").value;
    const change = document.querySelector("#change").value;
    console.log(Option);
    console.log(this.state.value);
    let arrResult;
    if (Option === "작성자") {
      arrResult = this.state.arrState.filter((value) => {
        return value.writer === change;
      });
    } else {
      arrResult = this.state.arrState.filter((value) => {
        return value.title === change;
      });
    }
    arrResult.map((txt) => {
      result.innerHTML += `<tr>
      <td>${txt.number}</td>
      <td>${txt.writer}</td>
      <td>${txt.title}</td>
    </tr>`;
    });
  }

  render() {
    return (
      <div>
        <fieldset>
          작성자 : <input type="text" placeholder="작성자" id="writer" />
          제목: <input type="text" id="title" />
          <button onClick={this.upload}>작성</button>
        </fieldset>

        <br></br>
        <select id="Option">
          <option id="writerOption">작성자</option>
          <option id="titleOption">제목</option>
        </select>
        <input
          type="text"
          placeholder="검색어"
          id="change"
          onChange={this.changeValue}
        ></input>
        <button onClick={this.search}>검색</button>

        <br />
        <br />

        <table className="table-style">
          <thead>
            <tr>
              <th>번호</th>
              <th>작성자</th>
              <th>제목</th>
            </tr>
          </thead>
          <tbody id="plus"></tbody>
        </table>

        <br />
        <br />

        <table className="table-style">
          <thead>
            <tr>
              <th>번호</th>
              <th>작성자</th>
              <th>제목</th>
            </tr>
          </thead>
          <tbody id="searchResult"></tbody>
        </table>
      </div>
    );
  }
}

export default StateT3;
