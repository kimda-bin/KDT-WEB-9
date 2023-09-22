import { useState, useEffect } from "react";

function MyComponent(props) {
  const { number } = props;
  const [text, setText] = useState("");

  //컴포넌트가 rendering 될 때마다 수행
  useEffect(() => {
    console.log("항상 실행됩니다");
  });
  //mount 될 때마다 수행
  useEffect(() => {
    console.log("컴포넌트가 생성될 때 실행됩니다");

    //unmount 될 때마다 수행
    return () => {
      console.log("제거될 때 실행됩니다");
    };
  }, []);

  //특정 값이 바뀔때만 수행
  useEffect(() => {
    console.log("state가 변경될 때 실행됩니다");
  }, [text]);

  return (
    <>
      <div>My Component Func {number}</div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </>
  );
}

export default function LifeCycleFunc() {
  const [number, setNumber] = useState(0);
  const [visible, setVisible] = useState(true);

  const changeNumberState = () => {
    setNumber(() => number + 1);
  };

  const changeVisibleState = () => {
    setVisible(() => !visible);
  };

  return (
    <>
      <button onClick={changeNumberState}>PLUS</button>
      <button onClick={changeVisibleState}>ON/OFF</button>
      {visible && <MyComponent number={number} />}
    </>
  );
}
