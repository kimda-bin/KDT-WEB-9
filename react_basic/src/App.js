import ClassComponent from "./ClassComponent";
import Counter from "./Counter";
import CounterFunc from "./CounterFunc";
import Event from "./Event";
import EventClass from "./EventClass";
import EventT from "./EventT";
import FunctionComponent from "./FunctionComponent";
import PropsT1 from "./PropsT1";
import PropsT2 from "./PropsT2";
import StateT1 from "./StateT1";
import StateT2 from "./StateT2";
import StateT3 from "./StateT3";
import T1Body from "./T1Body";
import Test from "./test";
import Test2 from "./test2";

function App() {
  return (
    <>
      {/* 컴포넌트 */}
      {/* <ClassComponent />
      <FunctionComponent></FunctionComponent>
      <T1Body></T1Body>
      <Test></Test>
      <Test2></Test2> */}

      {/* <ClassComponent name="dabeen" age={10}></ClassComponent>
      <ClassComponent></ClassComponent> */}

      {/* <FunctionComponent myClass={"kdt9"}>코딩</FunctionComponent>
      <FunctionComponent></FunctionComponent> */}

      {/* props */}
      {/* <PropsT1 food="치킨"></PropsT1>
      <PropsT1></PropsT1> */}

      {/* <PropsT2
        title="강원도"
        author="강원도"
        price={13500}
        type="자기계발서"
      ></PropsT2> */}

      {/* event */}
      {/* <Event></Event> */}
      {/* <EventClass></EventClass> */}

      {/* <EventT message="안녕하세요"></EventT> */}

      {/* <Counter></Counter> */}
      {/* <StateT1></StateT1> */}
      {/* <StateT2></StateT2> */}
      {/* <StateT3></StateT3> */}
      <CounterFunc></CounterFunc>
    </>
  );
}

export default App;
