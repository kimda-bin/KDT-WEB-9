import { useState } from "react";

export default function FuncStateT1() {
  const [text, setText] = useState("검정색 글씨");
  const [color, setColor] = useState("black");

  const red = () => {
    setText("빨간색 글씨");
    setColor("red");
  };

  const blue = () => {
    setText("파란색 글씨");
    setColor("blue");
  };
  return (
    <div>
      <p style={{ color }}>{text}</p>
      <div>
        <button onClick={red}>빨간색</button>
        <button onClick={blue}>파란색</button>
      </div>
    </div>
  );
}
