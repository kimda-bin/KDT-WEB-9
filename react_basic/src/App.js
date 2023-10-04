import { useState } from "react";
import MyContext, { LanguageProvider } from "./14Context/store/lang-context";
import LanguageSelector from "./14Context/LangSelector";
import { LangProvider } from "./14ContextT1/store/lang-context";
import LangSelector from "./14ContextT1/LangSelector";
import { ColorProvider } from "./14ContextT1/store/color-context";
import ColorSelector from "./14ContextT1/ColorSelector";

function App() {
  //const [language, setLanguage] = useState("ko");
  return (
    <>
      {/* <LanguageProvider>
        <LanguageSelector></LanguageSelector>
      </LanguageProvider> */}
      <LangProvider>
        <LangSelector></LangSelector>
      </LangProvider>

      <ColorProvider>
        <ColorSelector></ColorSelector>
      </ColorProvider>

      {/* <MyContext.Provider
        value={{ language: language, setLanguage: setLanguage }}
      > */}
      {/* <MyContext.Consumer>
          {(value) => {
            return (
              <div>
                <h2>현재 선택된 언어: {value.language}</h2>
                <select
                  value={value.language}
                  onChange={(e) => value.setLanguage(e.target.value)}
                >
                  <option value="ko">한국어</option>
                  <option value="en">영어</option>
                  <option value="jp">일본어</option>
                </select>
              </div>
            );
          }}
        </MyContext.Consumer> */}
      {/* <LanguageSelector /> */}
      {/* </MyContext.Provider> */}
    </>
  );
}

export default App;
