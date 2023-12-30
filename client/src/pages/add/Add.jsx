import React, { useState } from "react"
import "./Add.scss"

const Add = () => {

    const [selectedItem, setSelectedItem] = useState(null);
    const [isOpen, setIsOpen] = useState(true);
  
    const handleToggle = () => {
      setIsOpen(!isOpen);
    };

    const handleSelect = (item) => {
        setSelectedItem(item);
        setIsOpen(false);
      };

    return (
        <div className="add">
            <div className="add-container">
                <div className="top">
                    <div className="add-title">
                        <p>İş Adı:</p>
                        <input
                        type="text"
                        className="title-form"
                        placeholder="İsim giriniz."
                        required
                        />      
                    </div>
                    <div className="add-description">
                        <p>İş Detayları:</p>
                        <input
                        type="text"
                        className="description-form"
                        placeholder="Detayları giriniz."
                        required
                        />      
                    </div>
                    <div className="add-genre">
                        <p>İş Türü:</p>
                        <div className="dropdown">
                        <button className="dropdown-toggle" onClick={handleToggle}>
                            {selectedItem ? selectedItem : 'Seçiniz'}
                        </button>

                        {isOpen && (
                            <ul className="dropdown-menu">
                            <li onClick={() => handleSelect('Yazılım')}>Yazılım</li>
                            <li onClick={() => handleSelect('Grafik Tasarım')}>Grafik Tasarım</li>
                            <li onClick={() => handleSelect('Seslendirme')}>Seslendirme</li>
                            </ul>
                        )}
                        </div>   
                    </div>
                    <div className="add-skills">
                        <p>İstenen Beceriler:</p>
                        <input
                        type="text"
                        className="skills-form"
                        placeholder="Yetenekler"
                        required
                        />      
                    </div>
                    <div className="add-price">
                        <p>Ücret:</p>
                        <input
                        type="text"
                        className="price-form"
                        placeholder="Ad"
                        required
                        />      
                    </div>
                    <div className="add-deadline">
                        <p>Teslim Tarihi:</p>
                        <input
                        type="text"
                        className="deadline-form"
                        placeholder="Ad"
                        required
                        />      
                    </div>
                </div>
                <div className="bot">
                        <div className="create">
                            <button className="createJob">İş Oluştur</button>
                        </div>                   
                </div>
            </div>
        </div>
    )
}

export default Add