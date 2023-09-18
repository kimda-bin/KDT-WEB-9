import logo from "./logo.svg";
import "./App.css";

function App() {
  const flag = false;
  let txt = "";

  // 실습2
  // let name = "배추";
  // let animal = "고양이";

  //실습3
  // let title = "hello world";

  // if (flag) {
  //   txt = "true 입니다";
  // } else {
  //   txt = "false 입니다";
  // }

  const styles = {
    backgroundColor: "red",
  };

  // 실습2
  // const textStyles = {
  //   textDecorationLine: "underline",
  // };

  //실습3
  // const test = {
  //   backgroundColor: "#F9ECD7",
  //   color: "#E39A56",
  //   fontSize: "50px",
  //   display: "flex",
  //   justifyContent: "center",
  // };
  // const test2 = {
  //   display: "flex",
  //   height: "150px",
  //   flexDirection: "column",
  //   alignItems: "center",
  //   justifyContent: "center",
  // };
  // const input = {
  //   margin: "0px 10px",
  // };

  //실습4
  // const red = {
  //   backgroundColor: "red",
  //   height: "50px",
  //   width: "50px",
  // };
  // const orange = {
  //   backgroundColor: "orange",
  //   height: "100px",
  //   width: "50px",
  // };
  // const yellow = {
  //   backgroundColor: "yellow",
  //   height: "150px",
  //   width: "50px",
  // };
  // const green = {
  //   backgroundColor: "green",
  //   height: "200px",
  //   width: "50px",
  // };
  // const blue = {
  //   backgroundColor: "blue",
  //   height: "250px",
  //   width: "50px",
  // };
  // const navy = {
  //   backgroundColor: "navy",
  //   height: "300px",
  //   width: "50px",
  // };
  // const purple = {
  //   backgroundColor: "purple",
  //   height: "350px",
  //   width: "50px",
  // };

  //map 함수
  const lists = ["k", "d", "t", "w", "e", "b"];

  //filter 함수
  const animals = ["dog", "cat", "rabbit"];
  const newAnimals = animals.filter((value) => {
    return value.includes("a");
  });
  console.log(newAnimals);

  //단축평가
  //&&연산자
  const result = false && "hello";
  console.log(result);
  //||연산자
  const defaultValue = 1000;
  const price = 1500;
  const dbPrice = price || defaultValue;
  console.log(dbPrice);

  //map,filter 실습
  const users = [
    { id: 1, name: "John", age: 25, vip: true },
    { id: 2, name: "Jane", age: 19, vip: false },
    { id: 3, name: "Alice", age: 30, vip: true },
    { id: 4, name: "Bob", age: 18, vip: false },
    { id: 5, name: "Charlie", age: 35, vip: true },
  ];

  let names = users.filter((value) => {
    return value.age > 20;
  });

  console.log(names);

  let resultT = names.map((txt, id) => {
    return txt.name;
  });

  console.log(resultT);

  const isLogin = true;

  return (
    <>
      {isLogin && (
        <>
          <h1 style={{ backgroundColor: "black", color: "white" }}>
            hello react
          </h1>
          <div style={styles}>리액트 시작</div>
          <div>{flag ? <h1>true 입니다</h1> : <h1>flase 입니다</h1>}</div>
          <div>{txt}</div>
          <br />
          <br />
          <br />
          {/* {실습1} */}
          {/* <div>
        이것은 div입니다
        <h3>이것은 div 안에 있는 h3 태그입니다</h3>
        <div>{3 + 5 == 8 ? <div>정답입니다</div> : <div>오답입니다</div>}</div>
      </div>
      <br />
      <br />
      <br /> */}
          {/* {실습2} */}
          {/* <h2>
        제 반려 동물의 이름은 <span style={textStyles}>{name}</span>입니다{" "}
        <br /> <span style={textStyles}>{name}</span>는{" "}
        <span style={textStyles}>{animal}</span> 입니다
      </h2>
      <br />
      <br />
      <br /> */}
          {/* {실습3} */}
          {/* <div style={test}>{title}</div>
      <div style={test2}>
        <div>
          아이디:
          <input style={input} />
        </div>
        <br />
        <div>
          비밀번호:
          <input style={input} />
        </div>
      </div>
      <br />
      <br />
      <br /> */}
          {/* {실습4} */}
          {/* <div style={{ display: "flex" }}>
        <div style={red}></div>
        <div style={orange}></div>
        <div style={yellow}></div>
        <div style={green}></div>
        <div style={blue}></div>
        <div style={navy}></div>
        <div style={purple}></div>
      </div> */}

          {/* map 함수 */}
          {lists.map((value, index) => {
            return <div key={index}>hello {value}</div>;
          })}
        </>
      )}
    </>
  );
}

export default App;
