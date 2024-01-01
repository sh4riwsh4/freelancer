import React,{useState} from "react";
import "./Register.scss";
import axios from 'axios';

const Register = () => {
  const [selectedButton, setSelectedButton] = useState('button1');
  const [chosenType, setChosenType] = useState(null);

  const handleButtonSelect = (buttonName) => {
    setSelectedButton(buttonName);
  };

  const handleContinue = () => {
    if (selectedButton === 'button1') {
      setChosenType(['ROLE_ISALAN']);
    } else if (selectedButton === 'button2') {
      setChosenType(['ROLE_ISVEREN']);
    }
  };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    identityNumber: "",
    userName: "",
    password: "",
    email: "",
    authorities: "",
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Gönderilen Veriler: ", formData);
    console.log(chosenType)
    axios.post('http://localhost:8080/api/addNewUser', formData).then(response => {
       console.log("Backend'den gelen cevap: ", response.data);
     }).catch(error => {
       console.error("Hata:", error);
     });
  setFormData({
    firstName: "",
    lastName: "",
    identityNumber: "",
    username: "",
    password: "",
    email: "",
    authorities: chosenType,
  });
  };

  return (
    <div>
      {chosenType === null && (
        <div className="choose">
          <div className="top-section">
            <button
              className={`button ${selectedButton === "button1" ? "selected" : ""}`}
              onClick={() => handleButtonSelect("button1")}
            >
              Freelancer olmak istiyorum.
            </button>
            <button
              className={`button ${selectedButton === "button2" ? "selected" : ""}`}
              onClick={() => handleButtonSelect("button2")}
            >
              İşveren olmak istiyorum.
            </button>
          </div>
          <div className="bottom-section">
            <button className="continue-button" onClick={handleContinue}>
              Devam Et
            </button>
          </div>
        </div>
      )}

      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="card p-4">
          <h2 className="text-center mb-4">KAYIT OL</h2>
          <form onSubmit={handleSubmit} autoComplete="off">
            <div className="row mb-3">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ad"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Soyad"
                  name="lastName"
                  value={formData.lastName}
                 onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="TC Kimlik Numarası"
                name="identityNumber"
                value={formData.identityNumber}
                onChange={handleChange}
                required
                minLength={11}
                maxLength={11}
                pattern="[0-9]*"
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Kullanıcı Adı"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Şifre"
                name="password_key"
                value={formData.password_key}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-2">
              <input
                type="email"
                className="form-control"
                placeholder="E-posta"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-success">
                Kayıt Ol
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;