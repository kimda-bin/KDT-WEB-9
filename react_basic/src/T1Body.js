import "./App.css";

function T1Body() {
  //   const itemBody1 = {
  //     position: "relative",
  //     width: "100px",
  //     height: "100px",
  //     borderRadius: "50%",
  //     backgroundColor: "rgb(56, 56, 255)",
  //     zIndex: "1",
  //   };

  //   const itemBody2 = {
  //     position: "relative",
  //     width: "100px",
  //     height: "100px",
  //     borderRadius: "50%",
  //     backgroundColor: " rgb(0, 0, 71)",
  //     zIndex: "2",
  //     bottom: "35px",
  //     left: "40px",
  //   };

  //   const itemBody3 = {
  //     position: "relative",
  //     width: "100px",
  //     height: "100px",
  //     borderRadius: "50%",
  //     backgroundColor: "rgb(155, 155, 243)",
  //     zIndex: "3",
  //     bottom: "100px",
  //     left: "100px",
  //   };

  //   const itemBody4 = {
  //     position: "relative",
  //     width: "100px",
  //     height: "100px",
  //     borderRadius: "50%",
  //     backgroundColor: "rgb(41, 26, 152)",
  //     zIndex: "4",
  //     bottom: "200px",
  //     left: "150px",
  //   };

  //   const itemBody5 = {
  //     position: "relative",
  //     width: "100px",
  //     height: "100px",
  //     borderRadius: "50%",
  //     backgroundColor: "rgb(0, 0, 255)",
  //     zIndex: "6",
  //     bottom: "300px",
  //     left: "200px",
  //   };

  //   const itemEye1 = {
  //     position: "absolute",
  //     top: "20%",
  //     left: "20%",
  //     width: "35px",
  //     height: "35px",
  //     borderRadius: "50%",
  //     backgroundColor: "white",
  //     zIndex: "1",
  //   };

  //   const itemEye2 = {
  //     position: "absolute",
  //     top: "20%",
  //     left: "20%",
  //     width: "20px",
  //     height: "20px",
  //     borderRadius: "50%",
  //     backgroundColor: "black",
  //     zIndex: "2",
  //   };

  return (
    <>
      {/* <div style={itemBody1}>
        <div style={itemEye1}></div>
        <div style={itemEye2}></div>
      </div>
      <div style={itemBody2}></div>
      <div style={itemBody3}></div>
      <div style={itemBody4}></div>
      <div style={itemBody5}></div> */}

      <div className="item-body item-body-1">
        <div className="item-eye item-eye-1"></div>
        <div className="item-eye item-eye-2"></div>
      </div>
      <div className="item-body item-body-2"></div>
      <div className="item-body item-body-3"></div>
      <div className="item-body item-body-4"></div>
      <div className="item-body item-body-5"></div>
    </>
  );
}

export default T1Body;
