import { useState, useEffect } from "react";
import axios from "axios";

export default function UseEffectT2() {
  const [userList, setUserList] = useState([]);

  //로딩하는방법
  //const [loading, setLoading] = useState(false));

  //mount 될 때 사용
  //useEffect는 비동기함수를 직접적으로 지원하지 않는다
  //비동기 함수를 사용하려면 외부에 비동기 함수를 정의하고 바로 호출
  useEffect(() => {
    async function User() {
      const user = await axios({
        method: "GET",
        url: "https://jsonplaceholder.typicode.com/users",
      });
      setUserList(user.data);
      // setLoding(true)
    }
    User();

    //unmount
    return () => {
      console.log("연결 해제 완료");
    };
  }, []);

  //특정 값이 바뀔때만 사용
  useEffect(() => {
    console.log("유저 정보 업데이트", userList.length);
  }, [userList]);

  return (
    // <div>
    //   {!loading ? (
    //     <ul>
    //       {userList.map((txt) => {
    //         return (
    //           <li key={txt.id}>
    //             {txt.name} - {txt.email}
    //           </li>
    //         );
    //       })}
    //     </ul>
    //   ) : (
    //     <div>로딩</div>
    //   )}
    // </div>
    <div>
      <ul>
        {userList.map((txt) => {
          return (
            <li key={txt.id}>
              {txt.name} - {txt.email}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
