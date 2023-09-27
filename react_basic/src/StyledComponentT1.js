import styled from "styled-components";
import { useState } from "react";

export default function StyleComponentT1() {
  const [status, setStatus] = useState(false);
  const [color, setColor] = useState("white");
  const [Bcolor, setBolor] = useState("blue");

  const _Stylediv = styled.button`
    width: 100px;
    height: 100px;
    background-color: ${Bcolor};
    color: ${color};
    text-align: center;
  `;
  const styleChange = () => {
    console.log(status);
    if (status === true) {
      setStatus(false);
      setColor("black");
      setBolor("red");
    } else {
      setStatus(true);
      setColor("white");
      setBolor("blue");
    }
  };
  return (
    <>
      <_Stylediv onClick={styleChange}>색상변경!</_Stylediv>
    </>
  );
}
