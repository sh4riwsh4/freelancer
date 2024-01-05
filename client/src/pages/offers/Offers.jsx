import React, { useEffect, useState } from "react"
import "./Offers.scss"
import { useParams ,BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Error from "../error/Error"

const DataFetchingComponent = () => {
    const { jobId } = useParams();
    const [data, setData] = useState([]);
    useEffect(() => {
      fetchData();
    }, [jobId]);
  
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

    const fetchData = async () => {
      try {
        const response2 = await fetch(`http://localhost:8080/api/PUBLIC/offers/${jobId}`, {
        headers: {
          Authorization: myToken,
        },
      });
        const jsonData2 = await response2.json();
        setData(jsonData2);
    
      } catch (error) {
        console.log('Veri çekme hatası:', error);
      }
    };

    const handleAccept = async (offerId, teklif) => {
        try {
            const response = await fetch(`http://localhost:8080/api/ISVEREN/offers/accept/${offerId}`, {
            method: 'POST',
            headers: {
                Authorization: myToken,
            },
          });
          
          if (response.ok) {
            localStorage.setItem(jobId, teklif);
            console.log(teklif)
            console.log("deneme:", localStorage.getItem(jobId));
          } else {
            console.log('POST isteği başarısız:', response.status);
            // Hata işlemlerini burada yapabilirsiniz
          }
        } catch (error) {
          console.log('POST isteği hatası:', error);
          // Hata işlemlerini burada yapabilirsiniz
        }
    };

    const handlePayment = async (offerId) => {
      try {
        const response = await fetch(`http://localhost:8080/api/ISVEREN/makePayment/${offerId}`, {
          method: 'POST',
          headers: {
            Authorization: myToken,
          },
        });
      
        if (response.ok) {
          // İsteğiniz başarılı oldu, burada response üzerinden verilere erişebilirsiniz
          console.log('Ödeme başarıyla yapıldı');
        } else {
          console.log('POST isteği başarısız:', response.status);
          // Hata işlemlerini burada yapabilirsiniz
        }
      } catch (error) {
        console.log('POST isteği hatası:', error);
        // Hata işlemlerini burada yapabilirsiniz
      }
  };


    const handleReject = async (offerId, teklif) => {
      try {
          const response = await fetch(`http://localhost:8080/api/ISVEREN/offers/reject/${offerId}`, {
          method: 'POST',
          headers: {
              Authorization: myToken,
          },
          body: JSON.stringify({ jobId })
        });
        
        if (response.ok) {
          console.log("başarılı")
        } else {
          console.log('POST isteği başarısız:', response.status);
          // Hata işlemlerini burada yapabilirsiniz
        }
      } catch (error) {
        console.log('POST isteği hatası:', error);
        // Hata işlemlerini burada yapabilirsiniz
      }
  };

    return (
      <div>
        {loggedIn && type === 'ROLE_ISVEREN' ? (
          <div className="myjobs">
            <div className="myjobs-container">
                <div className="myjobs-title">
                    <h1>Teklifler</h1>
                </div>
                <table>
                    <tr>
                        <th>İş Başlığı</th>
                        <th>Teklif Gönderen</th>
                        <th>Fiyat</th>
                        <th>Kabul Et</th>
                        <th>Reddet</th>                   
                    </tr>
                {data.map((item) => (
                <tr key={item.id}>
                    <td>{item.job.title}</td>
                    <td>{item.user.firstName} {item.user.lastName}</td>
                    <td>{item.amount}</td>

                    <td>
                    {item.offerStatus === "pending" ? (
                        <button onClick={() => handleAccept(item.id, `${item.user.firstName} ${item.user.lastName}`)} className="buttonoffer-green">Kabul Et</button>
                      ) : item.offerStatus === "accepted" ? (
                        <button onClick={() => handlePayment(item.id)}>Onayla</button>
                      ) : null}               
                    </td>
                    <td>
                    {item.offerStatus === "pending" ? (
                      <button onClick={() => handleReject(item.id)} className="buttonoffer-red">Reddet</button>
                    ) : (
                      <span>Reddedildi.</span>
                    )}
                    </td>
                </tr>
                ))}
                </table>
            </div>
        </div>
      ) : (
        <div className="notlogged">
          <Error/>
        </div>
      )}
      </div>
    )
}

const Offers = () => {
    return (
      <DataFetchingComponent/>
    );
  }

export default Offers