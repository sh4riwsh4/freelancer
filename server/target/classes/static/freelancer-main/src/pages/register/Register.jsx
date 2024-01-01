import React from "react";
import "./Register.scss";

const Register = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4">
        <h2 className="text-center mb-4">KAYIT OL</h2>
        <form>
          <div className="row mb-3">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Ad"
                required
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Soyad"
                required
              />
            </div>
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="TC Kimlik Numarası"
              required
              minLength={11}
              maxLength={11}
              pattern="[0-9]*" // Sadece rakamları kabul eden regex deseni
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Kullanıcı Adı"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Şifre"
              required
            />
          </div>
          <div className="mb-2">
            <input
              type="email"
              className="form-control"
              placeholder="E-posta"
              required
            />
          </div>
          
        </form>
        {/* İşveren mi yoksa freelancer mı olmak istersin? başlığı ve radio butonları */}
        <div className="mt-3 text-center">
          <p className="mb-3">İşveren mi yoksa freelancer mı olmak istersin?</p>
          <div className="d-flex align-items-center mb-2">
            <input
              type="radio"
              id="freelancer"
              name="jobType"
              value="freelancer"
              className="me-2"
            />
            <label htmlFor="freelancer" className="me-4">Freelancer olarak çalışmak istiyorum</label>
            <input
              type="radio"
              id="employer"
              name="jobType"
              value="employer"
              className="me-2"
            />
            <label htmlFor="employer">İşveren olmak istiyorum</label>
          </div>
        </div>
        <div className="d-grid">
            <button type="submit" className="btn btn-success">
              Kayıt Ol
            </button>
          </div>
      </div>
    </div>
  );
};

export default Register;
