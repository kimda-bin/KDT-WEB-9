import { useContext } from "react";
import MyContext from "./store/lang-context";

export default function LangSelector() {
  const value = useContext(MyContext);
  return (
    <div>
      <h3>현재 선택된 언어: {value.language}</h3>
      <select
        value={value.language}
        onChange={(e) => value.setLanguage(e.target.value)}
      >
        <option value="korean">한국어</option>
        <option value="english">영어</option>
      </select>
    </div>
  );
}
