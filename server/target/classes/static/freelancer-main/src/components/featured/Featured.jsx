import React from "react";
import "./Featured.scss";
import photo from "./bitcoin.jpeg"

const Featured = () => {
  return (
  <div className="greenBox">
    <div className="title">
      <h3>Frelanceer Çalışarak </h3>
      <h3>Kripto Para Kazanmak İstermisiniz?</h3>
    </div>
   
    <img src={photo} className="rounded float-right img-fluid  " alt=""></img>
 </div>
  )
};

export default Featured;
