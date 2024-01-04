import React from "react";
import "./Profile.scss";
import { FaMapMarkerAlt } from "react-icons/fa";

import Error from "../error/Error";

const Profile = () => {
  const storedData = localStorage.getItem("user");
  let loggedIn = false;

  if (storedData) {
    const parsedData = JSON.parse(storedData);
    loggedIn = true;
  }

  const currentUser = {
    id: 1,
    userName: "semih",
    name: "Semih",
    surname: "UĞUR",
    email: "sem@gmail.com",
    age: 23,
    job: "Yazılımcı",
    photo:
      "https://i.pinimg.com/236x/17/f8/1e/17f81ec7203b785f31414948a451e731.jpg",
    isSeller: false,
    userReviews: 5,
    education: "CBÜ'de öğrenci",
    location: "İstanbul",
    skills: ["CSS", "JavaScript", "HTML"],
    biography:
      "lorem bshbxhsbcxbh szbxhsbzbxc  xcszhbxchsbzcx  xchbzshxb hzsb cx xhbzsxbhszb x",
  };

  return (
    <div>
      {
        <div className="container mt-3">
          <div className="row">
            <div className="col-md-4">
              <div className="card mb-2 ">
                <img
                  src={currentUser.photo}
                  className="card-img-top resized-image"
                  alt="hata"
                />

                <ul
                  className="list-group list-group-flush list-group-item-light">
                  <li className="list-group-item">
                    {currentUser.name} {currentUser.surname}
                  </li>
                  <li className="list-group-item">yaş:{currentUser.age}</li>
                  <li className="list-group-item">meslek:{currentUser.job}</li>
                  <li className="list-group-item">
                    email:{currentUser.email}
                  </li>
                  <li className="list-group-item">
                    <FaMapMarkerAlt /> {currentUser.location}
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
                    <p>{currentUser.biography}</p>
                  </li>
                </ul>
                
                {/* <p className="card-text">{currentUser.name} {currentUser.surname}</p>
                  <p className="card-text">yaş:{currentUser.age}</p>
                  <p className="card-text">meslek:{currentUser.job}</p>
                  <p className="card-text">meslek:{currentUser.email}</p>
                  <p>
                    <FaMapMarkerAlt /> {currentUser.location}
                  </p> */}

                {/* <h3>yetenekler</h3>
                  <p>html css</p>
                  <h3>About</h3>
                  <p>{currentUser.biography}</p>
                 */}
              </div>
            </div>
            <div className="col-md-8">
              <h2>Kullanıcı Yorumları</h2>

              <div className="user-comments">
                <img src={currentUser.photo} alt="Avatar" />
                <p>Hello. How are you today?</p>
                <span className="userName">furkan salduz</span>
              </div>
              <div className="user-comments">
                <img src={currentUser.photo} alt="Avatar" />
                <p>Hello. How are you today?</p>
                <span className="userName">furkan salduz</span>
              </div>
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
