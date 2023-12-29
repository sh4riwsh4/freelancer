import React from "react"
import "./Jobs.scss"
import bookmark from './bookmark.png'
import { Link, useLocation } from 'react-router-dom';

const Jobs = () => {
    return (
        <div className="jobs">
            <div className="top">
                <Link className='link' to="/jobs">Sana Özel</Link>
                <Link className='link' to="/jobs">Son Paylaşılan</Link>
                <Link className='link' to="/jobs">Hızlı İşler</Link>
                <Link className='link' to="/jobs">Favoriler</Link>
            </div>
            <div className="bot">
                <div className="job">
                    <div className="left">
                        <div className="time">Paylaşılma Zamanı: 3 dakika önce</div>
                        <div className="name">Lorem ipsum dolor sit amet.</div>
                        <div className="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia perspiciatis error, reiciendis corporis harum beatae, delectus consectetur sint, ut molestiae laudantium iusto facere laborum. Aliquam, praesentium iste error fugit quae similique earum nulla expedita rerum! Dolorem vitae numquam earum ducimus, nostrum repudiandae hic, a deleniti quae quam nam, nulla quos?</div>
                        <div className="needed-skills"> CSS </div>
                        <div className="needed-skills"> HTML </div>
                        <div className="needed-skills"> React </div>
                        <div className="needed-skills"> Python </div>
                    </div>
                    <div className="right">
                        <div className="favorite">
                            <img className="img" src={bookmark} alt="Favori Butonu" />
                        </div>
                        <div className="price">100€</div>
                        <div className="deadline">10 gün</div>
                        <div className="location">İzmir</div>
                        <div className="user-review">5</div>
                    </div>
                </div>
            </div>
            <div className="bot">
                <div className="job">
                    <div className="left">
                        <div className="time">3 dk önce</div>
                        <div className="name">Lorem ipsum dolor sit amet.</div>
                        <div className="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia perspiciatis error, reiciendis corporis harum beatae, delectus consectetur sint, ut molestiae laudantium iusto facere laborum. Aliquam, praesentium iste error fugit quae similique earum nulla expedita rerum! Dolorem vitae numquam earum ducimus, nostrum repudiandae hic, a deleniti quae quam nam, nulla quos?</div>
                        <div className="needed-skills">CSS</div>
                    </div>
                    <div className="right">
                        <div className="price">100€</div>
                        <div className="deadline">10 gün</div>
                        <div className="location">İzmir</div>
                        <div className="user-review">5</div>
                    </div>
                </div>
            </div>
            <div className="bot">
                <div className="job">
                    <div className="left">
                        <div className="time">3 dk önce</div>
                        <div className="name">Lorem ipsum dolor sit amet.</div>
                        <div className="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia perspiciatis error, reiciendis corporis harum beatae, delectus consectetur sint, ut molestiae laudantium iusto facere laborum. Aliquam, praesentium iste error fugit quae similique earum nulla expedita rerum! Dolorem vitae numquam earum ducimus, nostrum repudiandae hic, a deleniti quae quam nam, nulla quos?</div>
                        <div className="needed-skills">CSS</div>
                    </div>
                    <div className="right">
                        <button className="favorite"></button>
                        <div className="price">100€</div>
                        <div className="deadline">10 gün</div>
                        <div className="location">İzmir</div>
                        <div className="user-review">5</div>
                    </div>
                </div>
            </div>
            <div className="bot">
                <div className="job">
                    <div className="left">
                        <div className="time">3 dk önce</div>
                        <div className="name">Lorem ipsum dolor sit amet.</div>
                        <div className="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia perspiciatis error, reiciendis corporis harum beatae, delectus consectetur sint, ut molestiae laudantium iusto facere laborum. Aliquam, praesentium iste error fugit quae similique earum nulla expedita rerum! Dolorem vitae numquam earum ducimus, nostrum repudiandae hic, a deleniti quae quam nam, nulla quos?</div>
                        <div className="needed-skills">CSS</div>
                    </div>
                    <div className="right">
                        <button className="favorite"></button>
                        <div className="price">100€</div>
                        <div className="deadline">10 gün</div>
                        <div className="location">İzmir</div>
                        <div className="user-review">5</div>
                    </div>
                </div>
            </div>
            <div className="bot">
                <div className="job">
                    <div className="left">
                        <div className="time">3 dk önce</div>
                        <div className="name">Lorem ipsum dolor sit amet.</div>
                        <div className="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia perspiciatis error, reiciendis corporis harum beatae, delectus consectetur sint, ut molestiae laudantium iusto facere laborum. Aliquam, praesentium iste error fugit quae similique earum nulla expedita rerum! Dolorem vitae numquam earum ducimus, nostrum repudiandae hic, a deleniti quae quam nam, nulla quos?</div>
                        <div className="needed-skills">CSS</div>
                    </div>
                    <div className="right">
                        <button className="favorite"></button>
                        <div className="price">Ücret: 100€</div>
                        <div className="deadline">Teslim Süresi: 10 gün</div>
                        <div className="location">Konum: İzmir</div>
                        <div className="user-review">Kullanıcı Puanı:5</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Jobs