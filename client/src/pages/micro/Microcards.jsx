import React, {useState} from "react";
import "./Microcards.scss";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";

const Microcard = ({ item }) => {
    const calculatedPrice = item.price / item.participantCount

    let loggedIn = false;
    const storedData = localStorage.getItem('user');
    let myToken = null;
    let userN = null;
    let type = null;
  
    if (storedData){
    const parsedData = JSON.parse(storedData);
    type = localStorage.getItem('usertype');
    myToken = parsedData.data.accessToken;
    userN = parsedData.data.userId;
    loggedIn = true;
    }

    const [message, setMessage] = useState('');
    
    const handleSubscribe = async (channelId) => {
        try {
          const response = await axios.post('http://localhost:7000/subscribe', {
            channelId: channelId,
          });
    
          if (response.data.success) {
            setMessage('Abonelik başarıyla gerçekleştirildi.');
          } else {
            setMessage('Abonelik gerçekleştirilemedi.');
          }
        } catch (error) {
          console.error('Hata:', error);
          setMessage('Bir hata oluştu.');
        }
      };

  return (
    <Link className="link" onClick={() => handleSubscribe(item.channelid)}>
      <div className="micro-card">
        <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" alt="" />
        <div className="micro-info">
          <div className="micro-user">
            <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" alt="" />
            <span>{item.title}</span>
          </div>
          <p>{item.channelName} kanalına abone olun.</p>
          <div className="micro-detail">
          <div className="micro-price">
            <h2>
              {item.participantCount} kişiye, kişi başı {calculatedPrice} TL
            </h2>
          </div>
          <p>{message}</p>
        </div>
        </div>
        <hr />
      </div>
    </Link>
  );
};

Microcard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    channelid: PropTypes.string.isRequired,
    channelName: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    participantCount: PropTypes.number.isRequired,
  }).isRequired,
};

export default Microcard;