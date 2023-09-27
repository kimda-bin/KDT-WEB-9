import { Outlet } from "react-router-dom";
import Header from "./12Router/Header";
// import Router from "./12Router/Router";

function App() {
  return (
    <>
      {/* ver1 */}
      {/* <Router></Router> */}

      {/* ver2 */}
      <Header />
      <Outlet />
    </>
  );
}

export default App;
