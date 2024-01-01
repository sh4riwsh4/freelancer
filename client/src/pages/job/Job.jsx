import React from "react"
import "./Job.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useParams } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/navigation';

const Job = () => {
    const { jobId } = useParams();
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
    }

    return (
        <div className="job">
          {data.map((item) => (
          <div key={item.id} className="jobcont">
            <div className="left">
              <h1>I will create ai generated art for you</h1>
              <div className="user">
                <img
                  className="pp"
                  src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <span>Anna Bell</span>
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque non eligendi aut, blanditiis corrupti distinctio dolor dignissimos. Quaerat minima, unde, dolores commodi modi aperiam facere consequatur iure amet voluptas ipsam!
              </p>
              <div className="seller">
                <h2>Freelancer Hakkında</h2>
                <div className="user">
                  <img
                    src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt=""
                  />
                  <div className="info">
                    <span>Anna Bell</span>
                    <button>Bana Ulaş</button>
                  </div>
                </div>
                <div className="box">
                  <div className="items">
                    <div className="item">
                      <span className="ttl">Konum:</span>
                      <span className="desc">USA</span>
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
              <div className="reviews">
                <h2>Yorumlar</h2>
                <div className="item">
                  <div className="user">
                    <img
                      className="pp"
                      src="https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600"
                      alt=""
                    />
                    <div className="info">
                      <span>Garner David</span>
                      <div className="country">
                        <img
                          src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                          alt=""
                        />
                        <span>United States</span>
                      </div>
                    </div>
                  </div>
                  <div className="stars">
                    <img src="/img/star.png" alt="" />
                    <img src="/img/star.png" alt="" />
                    <img src="/img/star.png" alt="" />
                    <img src="/img/star.png" alt="" />
                    <img src="/img/star.png" alt="" />
                    <span>5</span>
                  </div>
                  <p>
                    I just want to say that art_with_ai was the first, and after
                    this, the only artist Ill be using on Fiverr. Communication was
                    amazing, each and every day he sent me images that I was free to
                    request changes to. They listened, understood, and delivered
                    above and beyond my expectations. I absolutely recommend this
                    gig, and know already that Ill be using it again very very soon
                  </p>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="price">
                <h3>1 AI generated image</h3>
                <h2>$ 59.99</h2>
              </div>
              <p>
                I will create a unique high quality AI generated image based on a
                description that you give me
              </p>
              <div className="details">
                <div className="item">
                  <img src="/img/clock.png" alt="" />
                  <span>2 Days Delivery</span>
                </div>
                <div className="item">
                  <img src="/img/recycle.png" alt="" />
                  <span>3 Revisions</span>
                </div>
              </div>
              <div className="features">
                <div className="item">
                  <img src="/img/greencheck.png" alt="" />
                  <span>Prompt writing</span>
                </div>
                <div className="item">
                  <img src="/img/greencheck.png" alt="" />
                  <span>Artwork delivery</span>
                </div>
                <div className="item">
                  <img src="/img/greencheck.png" alt="" />
                  <span>Image upscaling</span>
                </div>
                <div className="item">
                  <img src="/img/greencheck.png" alt="" />
                  <span>Additional design</span>
                </div>
              </div>
              <button>Continue</button>
            </div>
          </div>))}
        </div>
      );
    }
}

export default Job