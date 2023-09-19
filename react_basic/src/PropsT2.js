import image from "./26.PNG";
import "./App.css";

function PropsT2(props) {
  const { title, author, price, type } = props;
  return (
    <>
      <div className="container">
        <div className="image-container">
          <h2 className="title-color">이번주 베스트셀러</h2>
          <img src={image} width={200}></img>
          <h2>{title}</h2>
        </div>
        <div className="text-container">
          <h3>저자:{author}</h3>
          <h3>판매가:{price}</h3>
          <h3>구분:{type}</h3>
        </div>
      </div>
    </>
  );
}

export default PropsT2;
