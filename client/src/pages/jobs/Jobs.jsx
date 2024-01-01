import React, { useEffect, useState } from "react";
import "./Jobs.scss";
import bookmark from './bookmark.png';
import { Link } from 'react-router-dom';

const Jobs = () => {
    const DataFetchingComponent = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
      fetchData();
    }, []);

    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/jobs/all');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.log('Veri çekme hatası:', error);
      }
    };

    const calculateDateDifference = (startDate, endDate) => {
      const diffInMilliseconds = Math.abs(endDate - startDate);
      const diffInDays = Math.ceil(diffInMilliseconds / (1000 * 60 * 60 * 24));
    
      return diffInDays;
    };

    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('tr-TR');

    return (
      <div>
        {data.map((item) => (
          <div key={item.id} className="bot">
            <div className="job">
              <div className="left">
                <div className="time">Paylaşılma Zamanı: {calculateDateDifference(new Date(item.createDate), currentDate)} gün önce</div>
                <Link to={`/job/${item.id}`}>
                  <div className="name">{item.title}</div>
                </Link>
                <div className="description">{item.description}</div>
              </div>
              <div className="right">
                <div className="favorite">
                  <img className="img" src={bookmark} alt="Favori Butonu" />
                </div>
                <div className="price">Ücret: {item.price}</div>
                <div className="deadline">Teslim Zamanı: {calculateDateDifference(new Date(item.deadline), currentDate)} gün</div>
                <div className="location">Konum: {item.user.location}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="jobs">
      <div className="top">
        <Link className='link' to="/jobs">Sana Özel</Link>
        <Link className='link' to="/jobs">Son Paylaşılan</Link>
        <Link className='link' to="/jobs">Hızlı İşler</Link>
        <Link className='link' to="/jobs">Favoriler</Link>
      </div>
      <DataFetchingComponent />
    </div>
  );
};

export default Jobs;