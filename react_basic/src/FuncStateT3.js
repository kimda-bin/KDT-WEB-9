import { useState } from "react";

export default function FuncStateT3() {
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [searchType, setSearchType] = useState("");
  const [search, setSearch] = useState("");
  const [comment, setComment] = useState([]);

  const addComment = () => {
    const newComment = { writer, title };
    setComment([...comment, newComment]);
  };
  return (
    <div>
      <fieldset>
        작성자:
        <input
          type="text"
          placeholder="작성자"
          onChange={(e) => setWriter(e.target.value)}
        />
        제목:
        <input
          type="text"
          placeholder="제목"
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={addComment}>작성</button>
      </fieldset>
      <br></br>
      <br></br>
      <select onChange={(e) => setSearchType(e.target.value)}>
        <option value={"writer"}>작성자</option>
        <option value={"title"}>제목</option>
      </select>
      <input
        type="text"
        placeholder="검색어"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button>검색</button>
      <br></br>
      <br></br>
      <table className="table-style">
        <thead>
          <tr>
            <th>번호</th>
            <th>작성자</th>
            <th>제목</th>
          </tr>
        </thead>
        <tbody>
          {comment.map((txt, id) => {
            return (
              <tr key={id}>
                <td>{id + 1}</td>
                <td>{txt.writer}</td>
                <td>{txt.title}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
