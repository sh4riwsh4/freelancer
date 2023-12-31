import React from "react";
import "./Home.scss";
import Featured from "../../components/featured/Featured";
import photo1 from "../../components/featured/img1.jpeg";
import photo2 from "../../components/featured/img2.jpeg";
import photo3 from "../../components/featured/img3.jpeg";
import photo4 from "../../components/featured/img4.jpeg";
const Home = () => {
  return (
    <div className="Home">
      <Featured />
      <div className="container-fluid">
      <div className="row my-2 ">
        <div className="col-sm-3">
          <div className="card">
            <img src={photo1} className="card-img-top" alt="..."></img>
            <div className="card-body">
              <p className="card-text text-center">Kriptoparalarla <b>hızlı</b> ve <b>güvenilir</b> ödeme</p>
            </div>
          </div>
        </div>
        <div className="col-sm-3"><div className="card">
            <img src={photo2} className="card-img-top" alt="..."></img>
            <div className="card-body">
              <p className="card-text text-center">İhtiyacın olan her konuda <b>yetenekli</b> ve <b>hızlı</b> freelancerlar</p>
            </div>
          </div></div>
        <div className="col-sm-3"><div className="card">
            <img src={photo3} className="card-img-top" alt="..."></img>
        
            <div className="card-body">
              <p className="card-text text-center"><b>10 saniyede</b> yapılabilen işler ve <b>anında</b> kazanç </p>
            </div>
          </div></div>
        <div className="col-sm-3"><div className="card">
            <img src={photo4} className="card-img-top" alt="..."></img>
            <div className="card-body">
              <p className="card-text text-center">Laptopunuzla <b>istediğiniz yerde</b> ve <b>zamanda</b> çalışma rahatlığı</p>
            </div>
          </div></div>
      </div>
    </div>
    </div>
  );
};

export default Home;
