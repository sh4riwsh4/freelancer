import React, { useEffect, useState } from 'react';

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

  return (
    <div>
      <h1>Veriler</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title} {item.description} {item.user.firstName}</li>
        ))}
      </ul>
    </div>
  );
};

export default DataFetchingComponent;