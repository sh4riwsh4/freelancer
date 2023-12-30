import React,{useState} from "react"
import "./Login.scss"


import { Link } from 'react-router-dom'; // react-router-dom'dan Link import edin

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
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
    console.log('Gönderilen Veriler: ', formData);
    // Backend ile iletişim kurmak için axios gibi bir kütüphane kullanılabilir
    // axios.post('backend_url', formData).then(response => {
    //   console.log('Backend\'den gelen cevap: ', response.data);
    // }).catch(error => {
    //   console.error('Hata:', error);
    // });

    // Form gönderildikten sonra input değerlerini sıfırla
    setFormData({
      username: '',
      password: '',
    });
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4" style={{ width: '400px', height: '350px' }}>
        <h2 className="text-center mb-4">Giriş Yap</h2>
        <form onSubmit={handleSubmit} autoComplete="off">
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
          <div className="d-grid my-3">
            <button type="submit" className="btn btn-success">
              Giriş Yap
            </button>
          </div>
        </form>
        <p className="text-center">
          Hesabınız yok mu?, <Link to="/register"> Kayıt Ol </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
