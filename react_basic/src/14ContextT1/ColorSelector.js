import { useContext, useState } from "react";
import MyContext from "./store/color-context";

export default function ColorSelector() {
  const value = useContext(MyContext);

  return (
    <div
      style={
        value.color === "light"
          ? { backgroundColor: "white" }
          : { backgroundColor: "black" }
      }
    >
      <h3
        style={
          value.color === "light" ? { color: "black" } : { color: "white" }
        }
      >
        현재 선택된 테마: {value.color}
      </h3>
      <select
        value={value.color}
        onChange={(e) => value.setColor(e.target.value)}
      >
        <option value="light">light</option>
        <option value="dark">dark</option>
      </select>
    </div>
  );
}
