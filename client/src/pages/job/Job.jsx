import React, { useEffect, useState } from "react"
import "./Job.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useParams ,BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/navigation';

const DataFetchingComponent = () => {
  const { jobId } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, [jobId]);

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/jobs/id/${jobId}`);
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.log('Veri çekme hatası:', error);
    }
  };
  console.log(data)

  return (
    <div className="job">
      <div className="jobcont">
        <div className="left">
          <h1>{data.title}</h1>
          <div className="user">
            <img
              className="pp"
              src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <span>{data.user?.firstName} {data.user?.lastName}</span>
          </div>
          <Swiper
            navigation={true} 
            spaceBetween={0}
            modules={[Navigation]}
            className="slider"
          >
            <SwiperSlide>
              <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" alt="Slide 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" alt="Slide 2" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" alt="Slide 3" />
            </SwiperSlide>
          </Swiper>
          <h2>İş Detayları</h2>
          <p>
            {data.description}
          </p>
          <div className="seller">
            <h2>Freelancer Hakkında</h2>
            <div className="user">
              <img
                src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="info">
                <span>{data.user?.firstName} {data.user?.lastName}</span>
                <button>Bana Ulaş</button>
              </div>
            </div>
            <div className="box">
              <div className="items">
                <div className="item">
                  <span className="ttl">Konum:</span>
                  <span className="desc">{data.user?.location}</span>
                </div>
                <div className="item">
                  <span className="ttl">Dil</span>
                  <span className="desc">Türkçe</span>
                </div>
              </div>
              <hr />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi voluptatem non, ut illo vel eos architecto laudantium suscipit optio? Nobis tempora inventore praesentium expedita doloremque, excepturi fuga nisi quas accusantium eaque perspiciatis laudantium ut corporis voluptatibus ipsam soluta. Hic, maxime.
              </p>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="price">
            <h3>{data.title}</h3>
            <h2>{data.price} TL</h2>
          </div>
          <p>
            {data.description}
          </p>
          <div className="details">
            <div className="item">
              <img src="/img/clock.png" alt="" />
              <span>2 Günde Teslim</span>
            </div>
            <div className="item">
              <img src="/img/recycle.png" alt="" />
              <span>3 Revizyon</span>
            </div>
          </div>
          <button>Devam Et</button>
        </div>
      </div>
    </div>
  );
}

const Job = () => {
  return (
      <Routes>
        <Route path="/" element={<DataFetchingComponent/>} />
      </Routes>
  );
}

export default Job