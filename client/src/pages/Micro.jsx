import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [message, setMessage] = useState('');

  const handleSubscribe = async () => {
    try {
      const response = await axios.post('http://localhost:7000/subscribe', {
        channelId: 'UCjLuDK6daotQxTcjdLsyUzQ',
      });

      if (response.data.success) {
        setMessage('Abonelik başarıyla gerçekleştirildi.');
      } else {
        setMessage('Abonelik gerçekleştirilemedi.');
      }
    } catch (error) {
      console.error('Hata:', error);
    }
  };

  return (
    <div>
      <button onClick={handleSubscribe}>Abone Ol</button>
      <p>{message}</p>
    </div>
  );
};

export default App;