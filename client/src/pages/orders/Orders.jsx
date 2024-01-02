import React from "react"
import "./Orders.scss"
import {Link} from "react-router-dom"
import contactImg from "./icon.svg"
import Error from "../error/Error"

const Orders = () => {
    const storedData = localStorage.getItem('user');
    let loggedIn = false;
  
    if (storedData){
    const parsedData = JSON.parse(storedData);
    loggedIn = true;
    }

    return (
        <div>
            {loggedIn ? (
                <div className="orders">
                    <div className="orders-container">
                        <div className="orders-title">
                            <h1>Aldığım İşler</h1>
                        </div>
                        <table>
                            <th>Fotoğraf</th>
                            <th>Başlık</th>
                            <th>Fiyat</th>
                            <th>İşveren</th>
                            <th>İletişim</th>
                        <tr>
                            <td>
                                <img className="img" src={contactImg} alt="" />
                            </td>
                            <td>İş 1</td>
                            <td>43</td>
                            <td>Semih</td>
                            <td>
                                <img className="contact" src={contactImg} alt="" />
                            </td>
                        </tr>
                        </table>
                    </div>
                 </div>
            ) : (
                <Error/>
            )}
        </div>
    )
}

export default Orders