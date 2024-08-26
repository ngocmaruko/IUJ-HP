// src/InquiryForm.js
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './InquiryForm.css'; // Import the CSS file

const InquiryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    furigana: '',
    email: '',
    phone: '',
    inquiryType: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Ensure all fields are included in templateParams
    const templateParams = {
      from_name: formData.name,
      furigana: formData.furigana,
      from_email: formData.email,
      phone_number: formData.phone,
      inquiry_type: formData.inquiryType,
      message: formData.message
    };

    emailjs.send('service_d0i2xbc', 'template_53h5cgx', templateParams, 'cPDusJR9YHNi1cCzz')
      .then((response) => {
        alert('お問い合わせが送信されました。ありがとうございます！');
        setFormData({ name: '', furigana: '', email: '', phone: '', inquiryType: '', message: '' }); // Reset form
      })
      .catch((error) => {
        console.error('お問い合わせの送信に失敗しました:', error);
      });
  };

  return (
    <div className="inquiry-form">
      <h2>お問い合わせフォーム</h2>
      <form onSubmit={handleSubmit}>
        <label>
          名前:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          ふりがな:
          <input
            type="text"
            name="furigana"
            value={formData.furigana}
            onChange={handleChange}
          />
        </label>
        <label>
          メールアドレス:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          電話番号:
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </label>
        <label>
          お問い合わせ種類:
          <input
            type="text"
            name="inquiryType"
            value={formData.inquiryType}
            onChange={handleChange}
          />
        </label>
        <label>
          内容:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">送信</button>
      </form>
    </div>
  );
};

export default InquiryForm;
