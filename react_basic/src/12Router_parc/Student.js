import { useParams, useSearchParams, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Student() {
  const navi = useNavigate();
  const { name } = useParams();

  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("name");
  console.log(keyword);

  const onclick = () => {
    navi("/");
  };

  const _Span = styled.span`
    font-weight: bold;
    color: blueviolet;
  `;

  return (
    <div>
      학생 이름은 <_Span>{name}</_Span> 입니다.
      {keyword !== null && (
        <div>
          실제 이름은 <span style={{ color: "red" }}>{keyword}</span>입니다
        </div>
      )}
      <br />
      <button onClick={onclick}>이전페이지로</button>
    </div>
  );
}
