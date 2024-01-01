import React from "react"
import "./MyJobs.scss"
import {Link} from "react-router-dom"
import deleteImg from "./delete.svg"

const MyJobs = () => {
    return (
        <div className="myjobs">
            <div className="myjobs-container">
                <div className="myjobs-title">
                    <h1>İşlerim</h1>
                </div>
                <table>
                    <th>Fotoğraf</th>
                    <th>Başlık</th>
                    <th>Fiyat</th>
                    <th>İş Durumu</th>
                    <th>İşi Alan</th>
                    <th>Sil</th>
                <tr>
                    <td>
                        <img className="img" src={deleteImg} alt="" />
                    </td>
                    <td>İş 1</td>
                    <td>43</td>
                    <td>Aktif</td>
                    <td>Semih</td>
                    <td>
                        <img className="contact" src={deleteImg} alt="" />
                    </td>
                </tr>
                </table>
            </div>
        </div>
    )
}

export default MyJobs