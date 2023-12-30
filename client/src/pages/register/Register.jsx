import React,{useState} from "react";
import "./Register.scss";
import axios from 'axios';




const Register = () => {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    identityNumber: "",
    username: "",
    password: "",
    email: "",
    jobType: "freelancer", // Varsayılan olarak freelancer seçili
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
    // Form verilerini formData state'inden al ve burada backend'e gönderme işlemini gerçekleştir
    console.log("Gönderilen Veriler: ", formData);
    // Backend ile iletişim kurmak için axios gibi bir kütüphane kullanılabilir
    // axios.post('backend_url', formData).then(response => {
    //   console.log("Backend'den gelen cevap: ", response.data);
    // }).catch(error => {
    //   console.error("Hata:", error);
    // });
    // Form gönderildikten sonra input değerlerini sıfırla
  setFormData({
    firstName: "",
    lastName: "",
    identityNumber: "",
    username: "",
    password: "",
    email: "",
    jobType: "freelancer", // Varsayılan olarak freelancer seçili
  });
  };


  
  return (
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
              name="password"
              value={formData.password}
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
          <div className="mt-3 text-center">
          <p className="mb-3">İşveren mi yoksa freelancer mı olmak istersin?</p>
          <div className="d-flex align-items-center mb-2">
            <input
              type="radio"
              id="freelancer"
              name="jobType"
              value="freelancer"
              className="me-2"
              checked={formData.jobType === "freelancer"}
              onChange={handleChange}
            />
            <label htmlFor="freelancer" className="me-4">Freelancer olarak çalışmak istiyorum</label>
            <input
              type="radio"
              id="employer"
              name="jobType"
              value="employer"
              className="me-2"
              checked={formData.jobType === "employer"}
              onChange={handleChange}
            />
            <label htmlFor="employer">İşveren olmak istiyorum</label>
          </div>
        </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-success">
              Kayıt Ol
            </button>
          </div>
          
        </form>
       
        
       
      </div>
    </div>
  );
};

export default Register;
