export default Event = () => {
  const handleClick = () => {
    alert("클릭했습니다");
  };

  const handleClick2 = (e, str) => {
    //클릭 함수에 대한 정보가 나옴
    console.log(e);
    alert(str);
  };

  return (
    <>
      <button onClick={handleClick}>클릭</button>
      <button onClick={(event) => handleClick2(event, "2번 클릭")}>
        클릭2
      </button>
    </>
  );
};
