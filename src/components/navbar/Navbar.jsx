import React, { useEffect, useState } from 'react'
import "./Navbar.scss"
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [active,setActive] = useState(false);
  const [open,setOpen] = useState(false);

  const {pathname} = useLocation()

  const isActive = () =>{
    window.scrollY > 0 ? setActive(true) : setActive(false)
  }

  useEffect(() =>{
    window.addEventListener("scroll", isActive);

    return () =>{
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const currentUser= {
    id:1,
    userName:'semih',
    isSeller : true
  };

  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link to="/" className='link'>
            <span className='text'>Name</span>
          </Link>
        </div>
        <div className="links">
          <Link className='link' to="/jobs">Aktif İlanlar</Link>
          <Link className='link' to="/login">Giriş Yap</Link>
          {!currentUser?.isSeller && <button>Kayıt Ol</button>}
          {currentUser && (
            <div className="user" onClick={()=>setOpen(!open)}>
              <img src="https://i.pinimg.com/236x/17/f8/1e/17f81ec7203b785f31414948a451e731.jpg" alt="" />
              <span>{currentUser?.userName}</span>
              {open && <div className="options">
                {currentUser?.isSeller && (
                  <>
                    <Link className='link' to="/myjobs">İşlerim</Link>
                    <Link className='link' to="/add">Yeni İş Oluştur</Link>
                  </>
                )}
                <Link className='link' to="/orders">Siparişlerim</Link>
                <Link className='link' to="/messages">Mesajlar</Link>
                <Link className='link' to="/">Çıkış Yap</Link>
              </div>}
            </div>
          )}
        </div>
      </div>
      {(active || pathname !== "/")  && (
        <>
          <hr />
          <div className="menu">
            <Link className='link' to="/ ">Grafik&Tasarım</Link>
            <Link className='link' to="/ ">Yazılım</Link>
            <Link className='link' to="/ ">Video</Link>
            <Link className='link' to="/ ">Mühendislik&Mimarlık</Link>
            <Link className='link' to="/ ">Seslendirme</Link>
            <Link className='link' to="/ ">Tüm Meslekler</Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar