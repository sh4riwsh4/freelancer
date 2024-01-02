import React, { useEffect, useState } from "react"
import "./MyJobs.scss"
import {Link} from "react-router-dom"
import deleteImg from "./delete.svg"

const DataFetchingComponent = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      try {
        const response1 = await fetch(`http://localhost:8080/api/PUBLIC/jobs/user/işçi02`);
        const jsonData2 = await response.json();
        setData(jsonData2);

        const response = await fetch(`http://localhost:8080/api/PUBLIC/jobs/user/işçi02`);
        const jsonData = await response.json();
        setData(jsonData);

      } catch (error) {
        console.log('Veri çekme hatası:', error);
      }
    };
   
    const storedData = localStorage.getItem('user');
    let loggedIn = false;
    let userId = null;

    if (storedData){
    const parsedData = JSON.parse(storedData);
    userId = parsedData.data.userId;
    loggedIn = true;
    }

    return (
      <div>
        {loggedIn ? (
          <div className="myjobs">
            <div className="myjobs-container">
                <div className="myjobs-title">
                    <h1>İşlerim</h1>
                </div>
                <table>
                    <tr>
                        <th>Fotoğraf</th>
                        <th>Başlık</th>
                        <th>Fiyat</th>
                        <th>İş Durumu</th>
                        <th>İşi Alan</th>
                        <th>Sil</th>                        
                    </tr>
                {data.map((item) => (
                <tr key={item[0]}>
                    <td>
                        <img className="img" src={deleteImg} alt="" />
                    </td>
                    <td>{item[1]}</td>
                    <td>{item.price}</td>
                    <td>Aktif</td>
                    <td>{item[6]} {item[7]}</td>
                    <td>
                        <img className="contact" src={deleteImg} alt="İşi Sil" />
                    </td>
                </tr>
                ))}
                </table>
            </div>
        </div>
      ) : (
        <div className="notlogged">
          
        </div>
      )}
      </div>
    )
}

const MyJobs = () => {
    return (
      <DataFetchingComponent/>
    );
  }

export default MyJobs