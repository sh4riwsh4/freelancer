import React from "react";
import "./Home.scss";
import Featured from "../../components/featured/Featured";
import photo from "../../components/featured/btc.png";

const Home = () => {
  return (
    <div className="Home">
      <Featured />
      <div className="container-fluid">
      <div className="row my-2 ">
        <div className="col-sm-3">
          <div className="card">
            <img src={photo} className="card-img-top" alt="..."></img>
            <div className="card-body">
              <p className="card-text text-center">Kriptolarla hızlı ve güvenilir ödeme</p>
            </div>
          </div>
        </div>
        <div className="col-sm-3"><div className="card">
            <img src={photo} className="card-img-top" alt="..."></img>
            <div className="card-body">
              <p className="card-text text-center">ihtiyacın olan her konuda yetenekli ve hızlı freelancerlar</p>
            </div>
          </div></div>
        <div className="col-sm-3"><div className="card">
            <img src={photo} className="card-img-top" alt="..."></img>
        
            <div className="card-body">
              <p className="card-text text-center">10 saniyede yapılabilen işler ve anında kazanç </p>
            </div>
          </div></div>
        <div className="col-sm-3"><div className="card">
            <img src={photo} className="card-img-top" alt="..."></img>
            <div className="card-body">
              <p className="card-text text-center">laptopunuzla istediğiniz yerde ve zamanda çalışma rahatlığı</p>
            </div>
          </div></div>
      </div>
    </div>
    </div>
  );
};

export default Home;
