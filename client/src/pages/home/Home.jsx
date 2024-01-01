import React from "react";
import "./Home.scss";
import {Link} from "react-router-dom"
import Featured from "../../components/featured/Featured";
import photo1 from "../../components/featured/img1.jpeg";
import photo2 from "../../components/featured/img2.jpeg";
import photo3 from "../../components/featured/img3.jpeg";
import photo4 from "../../components/featured/img4.jpeg";

const Home = () => {
  const loggedIn = true;
//to={`/job/${item.id}`} link yolu
  return (
    <div>
      {loggedIn ? (
        <div className="loggedInDiv">
           {/* LoggedIn durumunda gösterilecek içerik */}
          <div className="container-fluid">
            <h1 >İlan Listesi</h1>
            <div className="row">
             
            
            <div className="col-sm-4 ">
              <div className="product-card">
            <img
              className="img-top"
              src={photo1}
              alt="Denim Jeans"
              style={{ width: "100%" }}
            />
            <div className="product-name">
              <img
                className="rounded-circle profil-photo "
                src={photo2}
                alt=""
              />
              <span>Furkan Salduz</span>
            </div>
            <Link className="link">
            <h1 className="product-title">Tailored Jeans</h1>
            </Link>
            <div className="product-body">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Similique, minus.
              </p>
              <p className="price">$19.99</p>
              
            </div>
          </div>
              </div>
              <div className="col-sm-4 ">
              <div className="product-card">
            <img
              className="img-top"
              src={photo1}
              alt="Denim Jeans"
              style={{ width: "100%" }}
            />
            <div className="product-name">
              <img
                className="rounded-circle profil-photo "
                src={photo2}
                alt=""
              />
              <span>Furkan Salduz</span>
            </div>
            <Link className="link">
            <h1 className="product-title">Tailored Jeans</h1>
            </Link>
            <div className="product-body">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Similique, minus.
              </p>
              <p className="price">$19.99</p>
             
            </div>
          </div>
              </div>
                
             
            
            </div>
          </div>
         
          
        </div>
      ) : 
      (
        <div className="Home">
          <Featured />
          <div className="container-fluid">
            <div className="row my-2">
              <div className="col-sm-3">
                <div className="card">
                  <img src={photo1} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <p className="card-text text-center">
                      Kriptoparalarla <b>hızlı</b> ve <b>güvenilir</b> ödeme
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="card">
                  <img src={photo2} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <p className="card-text text-center">
                      İhtiyacın olan her konuda <b>yetenekli</b> ve <b>hızlı</b>{" "}
                      freelancerlar
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="card">
                  <img src={photo3} className="card-img-top" alt="..." />

                  <div className="card-body">
                    <p className="card-text text-center">
                      <b>10 saniyede</b> yapılabilen işler ve <b>anında</b>{" "}
                      kazanç
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="card">
                  <img src={photo4} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <p className="card-text text-center">
                      Laptopunuzla <b>istediğiniz yerde</b> ve <b>zamanda</b>{" "}
                      çalışma rahatlığı
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
