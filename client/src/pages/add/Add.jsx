import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './Add.scss';
import axios from 'axios';



const Add = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [ilanResmi, setIlanResmi] = useState('');
  const [description, setDescription] = useState('');

  const handleIlanSubmit = async (e) => {
    e.preventDefault();

    try {
      // Sunucuya gönderilecek olan obje
      const formData = {
        ilanResmi,
        title,
        price, // price alanı formData'ya eklendi
        description,
      };

      // Sunucuya POST isteği gönder
      const response = await axios.post('http://localhost:8080/api/jobs', formData);

      console.log('İlan başarıyla oluşturuldu:', response.data);

      // Form alanlarını sıfırla
      setTitle('');
      setPrice('');
      setIlanResmi('');
      setDescription('');
    } catch (error) {
      console.error('İlan oluşturma hatası:', error);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Dosyayı oku ve veri URL'sine dönüştür
      const reader = new FileReader();
      reader.onloadend = () => {
        setIlanResmi(reader.result); // Veri URL'sünü state'e kaydet
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="container my-4 w-75">
      <h2>İlan Oluştur</h2>
      <Form onSubmit={handleIlanSubmit} autoComplete='off'>
        <Form.Group className="mb-3" controlId="formtitle">
          <Form.Label>İlan Başlığı</Form.Label>
          <Form.Control
            type="text"
            placeholder="İlan Başlığı Giriniz"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </Form.Group>

        {/* Yeni price alanı */}
        <Form.Group className="mb-3" controlId="formPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            placeholder="Price Giriniz"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formIlanResmi">
          <Form.Label>İlan Resmi</Form.Label>
          <Form.Control
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formdescription">
          <Form.Label>İlan Açıklaması</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="İlan Açıklamasını Giriniz"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="primary mb-2" type="submit">
          İlanı Yayınla
        </Button>
      </Form>
    </div>
  );
};

export default Add;
