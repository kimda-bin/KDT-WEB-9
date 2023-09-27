import styled from "styled-components";
import { useState } from "react";

const _Input = styled.input`
  width: 150px;
  height: 35px;
  border: 1px solid black;
  border-radius: 5px;
`;
const _Button = styled.button`
  width: 50px;
  height: 35px;
  border: none;
  margin-left: 15px;
  border-radius: 5px;
  background-color: blueviolet;
`;

const _Container = styled.div`
  width: 200px;
  height: 200px;
  background-color: aliceblue;
  overflow: auto;
  margin-top: 15px;
`;

const _Item = styled.div`
  width: 200px;
  height: 28px;
  border-bottom: 1px solid black;
`;
export default function StyleComponentT2() {
  const [text, setText] = useState("");
  const [comment, setComment] = useState([]);

  const addComment = () => {
    const newComment = { text };
    setComment([...comment, newComment]);
    setText("");
  };

  return (
    <>
      <_Input
        type="text"
        placeholder="Add to List"
        onChange={(e) => setText(e.target.value)}
      />
      <_Button onClick={addComment}>Add</_Button>
      <_Container>
        {comment.map((txt, id) => {
          return <_Item key={id}> {txt.text} </_Item>;
        })}
      </_Container>
    </>
  );
}
