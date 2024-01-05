import React, { useEffect, useRef, useState } from "react";
import "./Profile.scss";
import { FaMapMarkerAlt } from "react-icons/fa";
import Error from "../error/Error";

const Profile = () => {
  const storedData = localStorage.getItem("user");
  let loggedIn = false;
  let userN = null;
  let myToken = null;

  if (storedData) {
    const parsedData = JSON.parse(storedData);
    loggedIn = true;
    userN = parsedData.data.userId;  
    myToken = parsedData.data.accessToken;
  }

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/PUBLIC/users/userName/${userN}`);
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.log('Veri çekme hatası:', error);
    }
  };
  const [data2, setData2] = useState([]);

  useEffect(() => {
    fetchData2();
  }, []);

  const fetchData2 = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/PUBLIC/comment/${userN}`);
      const jsonData = await response.json();
      setData2(jsonData);
    } catch (error) {
      console.log('Veri çekme hatası:', error);
    }
  };

  return (
    <div>
      {
        <div className="container mt-3">
          <div className="row">
            <div className="col-md-4">
              <div className="card mb-2 ">
                <img
                  src="https://i.pinimg.com/736x/fa/60/51/fa6051d72b821cb48a8cc71d3481dfef.jpg"
                  className="card-img-top resized-image"
                  alt="hata"
                />

                <ul
                  className="list-group list-group-flush list-group-item-light">
                  <li className="list-group-item">
                    {data.name} {data.surname}
                  </li>
                  <li className="list-group-item">Yaş:{2024 - data.age}</li>
                  <li className="list-group-item">Meslek:{data.job}</li>
                  <li className="list-group-item">
                    email:{data.email}
                  </li>
                  <li className="list-group-item">
                    <FaMapMarkerAlt /> {data.location}
                  </li>
                  <li className="list-group-item  ">
                    <h5>yetenekler</h5>
                  </li>
                  <li className="list-group-item">
                    <p>html css</p>
                  </li>
                  <li className="list-group-item ">
                    <h5>About</h5>
                  </li>
                  <li className="list-group-item">
                    {" "}
                    <p>{data.biography}</p>
                  </li>
                </ul>
                
              </div>
            </div>
            <div className="col-md-8">
              <h2>Kullanıcı Yorumları</h2>
              {data2.map((comment) => (
                <div key ={comment.id} className="user-comments">
                  <img src="https://i.pinimg.com/736x/fa/60/51/fa6051d72b821cb48a8cc71d3481dfef.jpg" alt="Avatar" />
                  <p>{comment.message}</p>
                  <span className="userName">{comment.userName}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default Profile;

/* {loggedIn ? (
                <div className="profile">
                    <div className="left">
                        <div className="top">
                            <div className="top-left">
                                <img className= 'pic' src={currentUser?.photo} alt="User Profile Picture" />
                            </div>
                            <div className="top-right">
                                <div className="text">
                                    <div className="name"><b>İsim Soyisim: </b>{currentUser?.name} {currentUser?.surname}</div>
                                    <div className="age"><b>Yaş:</b> {currentUser?.age}</div>
                                    <div className="jobtext"><b>Meslek: </b>{currentUser?.job}</div>
                                    <div className="star"><b>Kullanıcı Puanları:</b> {currentUser?.userReviews}★</div>
                                </div>
                            </div>
                        </div>
                        <div className="mid">
                            <div className="skills">
                                <div className="skills-title"><b>Beceriler ve Yetenekler:</b></div>
                                <div className="skills">Belirtilmedi.</div>
                                <div className="chosen-skills"></div>
                                <div className="biography-title"><b>Hakkımda:</b></div>
                                <div className="biography">{currentUser?.biography}</div>
                            </div>
                        </div>
                        <div className="bot">
                            <div className="education"><b>Eğitim:</b> {currentUser?.education}</div>
                            <div className="location"><b>Konum:</b> {currentUser?.location}</div>
                        </div>
                    </div>
                    <div className="right">
                       
                        <div className="reviews">
                            <div className="title">Kullanıcı Yorumları</div>
                            <div className="content"></div>
                        </div>
                       
                    </div>
                </div>
            ) : (
                <Error/>
            )} */
