import React from "react"
import "./Profile.scss"

const Profile = () => {

    const currentUser= {
        id:1,
        userName:'semih',
        name: 'Semih',
        surname : 'UĞUR',
        age: 23,
        job: 'Yazılımcı',
        photo : "https://i.pinimg.com/236x/17/f8/1e/17f81ec7203b785f31414948a451e731.jpg",
        isSeller : false,
        userReviews: 5,
        education: "CBÜ'de öğrenci",
        location: 'İstanbul',
        skills: ["CSS", "JavaScript", "HTML"],
        biography: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur iusto expedita, culpa pariatur consequatur et excepturi accusamus tenetur, quidem tempora neque cum ipsum ex dicta enim, quibusdam aut. Iure neque optio debitis aspernatur ratione rem in animi minima, quaerat natus quisquam voluptates quo, repudiandae asperiores accusamus explicabo hic libero a quod placeat vero deleniti quibusdam reprehenderit. Enim, illum! Rerum non voluptatem harum amet beatae unde quaerat possimus nulla, facilis deleniti perferendis! Itaque, nobis. Laboriosam, impedit? At ipsam, non fugiat iure animi illum rerum eius reiciendis, pariatur odit consequuntur illo aliquid! Sunt cupiditate dicta ea nobis explicabo magnam nam officia enim?"
      };

    return (
        <div className="profile">
            <div className="left">
                <div className="top">
                    <div className="top-left">
                        <img className= 'pic' src={currentUser?.photo} alt="User Profile Picture" />
                    </div>
                    <div className="top-right">
                        <div className="text">
                            <div className="name"><b>İsim Soyisim: </b>{currentUser?.name} {currentUser?.surname}</div>
                            <div className="age"><b>Yaş:</b> {currentUser?.age}</div>
                            <div className="jobtext"><b>Meslek: </b>{currentUser?.job}</div>
                            <div className="star"><b>Kullanıcı Puanları:</b> {currentUser?.userReviews}★</div>
                        </div>
                    </div>
                </div>
                <div className="mid">
                    <div className="skills">
                        <div className="skills-title"><b>Beceriler ve Yetenekler:</b></div>
                        <div className="skills">Belirtilmedi.</div>
                        <div className="chosen-skills"></div>
                        <div className="biography-title"><b>Hakkımda:</b></div>
                        <div className="biography">{currentUser?.biography}</div>
                    </div>
                </div>
                <div className="bot">
                    <div className="education"><b>Eğitim:</b> {currentUser?.education}</div>
                    <div className="location"><b>Konum:</b> {currentUser?.location}</div>
                </div>
            </div>
            <div className="right">
                <div className="portfolio">
                    <div className="title">Portfolyo</div>
                    <div className="content"></div>
                </div>
                <div className="reviews">
                    <div className="title">Kullanıcı Yorumları</div>
                    <div className="content"></div>
                </div>
                <div className="certificaties">
                    <div className="title">Sertifikalar</div>
                    <div className="content"></div>
                </div>
            </div>
        </div>
    )
}

export default Profile