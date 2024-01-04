
import "./Message.scss"
import React, { useState } from 'react';

function ProfileEdit() {
    // Kullanıcı bilgilerini saklayacak state'leri tanımlayın
    const [userData, setUserData] = useState({
      meslek: '',
      email: '',
      lokasyon: '',
      yetenek: '',
      hakkimda: '',
    });
  
    // input değerleri değiştikçe state'i güncelleyen fonksiyonlar
    const handleChange = (e) => {
      const { name, value } = e.target;
      setUserData({ ...userData, [name]: value });
    };
  
    // Düzenle butonuna tıklandığında çalışacak fonksiyon
    const handleEdit = () => {
      // Burada userData state'ini kullanarak yapılacak işlemleri yazabilirsiniz
      console.log('Kullanıcı verileri:', userData);
      // Verileri bir API'ye gönderme veya başka bir işlem yapma gibi adımları buraya ekleyebilirsiniz
    };
  
    
    
    return (
        
        <div className="container mt-4">
      <h2>Profil Düzenleme Sayfası</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="meslek" className="form-label">Meslek</label>
          <input type="text" className="form-control" id="meslek" name="meslek" value={userData.meslek} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" name="email" value={userData.email} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="lokasyon" className="form-label">Lokasyon</label>
          <input type="text" className="form-control" id="lokasyon" name="lokasyon" value={userData.lokasyon} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="yetenek" className="form-label">Yetenek</label>
          <input type="text" className="form-control" id="yetenek" name="yetenek" value={userData.yetenek} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="hakkimda" className="form-label">Hakkımda</label>
          <textarea className="form-control" id="hakkimda" name="hakkimda" value={userData.hakkimda} onChange={handleChange} />
        </div>
        <button type="button" className="btn btn-primary" onClick={handleEdit}>Düzenle</button>
      </form>
    </div>
    )
}

export default ProfileEdit