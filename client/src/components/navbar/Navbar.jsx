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

  let loggedIn = false;
  const storedData = localStorage.getItem('user');
  let myToken = null;
  let userId = null;
  let type = null;

  if (storedData){
  const parsedData = JSON.parse(storedData);
  type = localStorage.getItem('usertype');
  myToken = parsedData.data.accessToken;
  userId = parsedData.data.userId;
  loggedIn = true;
  }

  const handleRefresh = () => {
    window.location.reload();
  };

  const handleLogout = () => {
    loggedIn = false;
    userId = null;
    localStorage.clear();
    handleRefresh();
  };

  useEffect(() =>{
    window.addEventListener("scroll", isActive);

    return () =>{
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const currentUser= {
    id:1,
    userName: userId ? userId : "a",
    isSeller: (type === "ROLE_ISVEREN"),
  };

  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link to="/" className='link'>
            <span className='text'>YetenekAğı</span>
          </Link>
        </div>
        <div className="links">
          <Link className='link' to="/jobs">Aktif İlanlar</Link>
          {!loggedIn && (
            <>
              <Link className="link" to="/login">Giriş Yap</Link>
              <Link className="link" to="/register">Kayıt Ol</Link>
            </>
          )}
          {loggedIn && (
            <div className="user" onClick={()=>setOpen(!open)}>
              <img src="https://i.pinimg.com/236x/17/f8/1e/17f81ec7203b785f31414948a451e731.jpg" alt="" />
              <span>{currentUser?.userName}</span>
              {open && <div className="options">
                <Link className='link' to="/profile">Profilim</Link>
                {currentUser?.isSeller ? (
                  <>
                    <Link className='link' to="/myjobs">Oluşturulan İşler</Link>
                    <Link className='link' to="/add">Yeni İş Oluştur</Link>
                  </>
                ):(
                  <>
                    <Link className='link' to="/orders">Aldığım İşler</Link>
                  </> 
                )}
                <Link className='link' to="/messages">Mesajlar</Link>
                <Link className='link' to="/" onClick={handleLogout}>Çıkış Yap</Link>
              </div>}
            </div>
          )}
        </div>
      </div>
      {((active || pathname !== "/") && (pathname !== "/messages" && pathname !== "/orders" && pathname !== "/myjobs")) && (
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