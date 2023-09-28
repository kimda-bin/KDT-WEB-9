import { Outlet } from "react-router-dom";
//import Header from "./12Router/Header";
// import Header from "./12Router_parc/Header";
import Main from "./12Router_parc/Main";
import RouterPrac1 from "./12Router_parc/Router";
// import Router from "./12Router/Router";
// import Router from "./12Router/Router";

function App() {
  return (
    <>
      {/* ver1 */}
      {/* <Router></Router> */}

      {/* ver2 */}
      {/* <Outlet /> */}

      <RouterPrac1 />
      <Outlet />
    </>
  );
}

export default App;
