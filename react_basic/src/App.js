import ClassComponent from "./ClassComponent";
import Event from "./Event";
import EventClass from "./EventClass";
import EventT from "./EventT";
import FunctionComponent from "./FunctionComponent";
import PropsT1 from "./PropsT1";
import PropsT2 from "./PropsT2";
import T1Body from "./T1Body";
import Test from "./test";
import Test2 from "./test2";

function App() {
  return (
    <>
      {/* <ClassComponent />
      <FunctionComponent></FunctionComponent>
      <T1Body></T1Body>
      <Test></Test>
      <Test2></Test2> */}

      {/* <ClassComponent name="dabeen" age={10}></ClassComponent>
      <ClassComponent></ClassComponent> */}

      {/* <FunctionComponent myClass={"kdt9"}>코딩</FunctionComponent>
      <FunctionComponent></FunctionComponent> */}

      {/* <PropsT1 food="치킨"></PropsT1>
      <PropsT1></PropsT1> */}

      {/* <PropsT2
        title="강원도"
        author="강원도"
        price={13500}
        type="자기계발서"
      ></PropsT2> */}

      {/* <Event></Event> */}
      {/* <EventClass></EventClass> */}

      <EventT message="안녕하세요"></EventT>
    </>
  );
}

export default App;
