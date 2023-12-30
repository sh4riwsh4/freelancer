import React from "react"
import "./Login.scss"


import { Link } from 'react-router-dom'; // react-router-dom'dan Link import edin

const Login = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4" style={{ width: '400px', height: '350px' }}>
        <h2 className="text-center mb-4">Giriş Yap</h2>
        <form>
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Kullanıcı Adı" required />
          </div>
          <div className="mb-3">
            <input type="password" className="form-control" placeholder="Şifre" required />
          </div>
          <div className="d-grid my-3">
            <button type="submit" className="btn btn-success">Giriş Yap</button>
          </div>
        </form>
        <p className="text-center ">
          Hesabınız yok mu?, <Link to="/register"> Kayıt Ol </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
