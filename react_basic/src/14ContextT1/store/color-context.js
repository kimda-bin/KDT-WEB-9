import { createContext, useState } from "react";

//Context 생성
//createContext() : Provider와 Consumer 두개의 리액트 컴포넌트를 반환
const MyContext = createContext({
  color: "",
  abc: 0,
  setColor: () => {},
});

//provider
export function ColorProvider({ children }) {
  const [color, setColor] = useState("light");

  return (
    <MyContext.Provider value={{ color, setColor }}>
      {children}
    </MyContext.Provider>
  );
}

export default MyContext;
