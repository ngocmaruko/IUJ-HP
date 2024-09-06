import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import emailjs from 'emailjs-com';
import './Confirmation.css';

const Confirmation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { formData } = location.state || {};

  const handleEdit = () => {
    navigate('/contact', { state: { formData } });
  };

  const handleConfirm = () => {
    const templateParams = {
      from_name: formData.name,
      furigana: formData.furigana,
      from_email: formData.email,
      phone_number: formData.phone,
      inquiry_type: formData.inquiryType,
      message: formData.message || '' // Ensure message is sent even if empty
    };

    emailjs.send('service_d0i2xbc', 'template_53h5cgx', templateParams, 'cPDusJR9YHNi1cCzz')
      .then((response) => {
        console.log('Success:', response);
        localStorage.removeItem('contactFormData');
        navigate('/thank-you', { replace: true });
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  if (!formData) {
    return <p>フォームデータがありません。戻ってフォームを入力してください。</p>;
  }

  return (
    <section className="confirmation">
      <h2 class="check-title">入力内容の確認</h2>
      <p class="check-lead">以下の内容で送信してよろしいですか？</p>
      <table>
				  <tbody>
					  <tr class="Form-Item">
						  <th class="Form-Item-Label">お名前 : </th>
						  <td class="Form-Item-text">{formData.name}</td>
					  </tr>
					  <tr class="Form-Item">					  
						  <th class="Form-Item-Label">ふりがな : </th>
						  <td class="Form-Item-text"> {formData.furigana}</td>
					  </tr>
					  <tr class="Form-Item">
						  <th class="Form-Item-Label">メールアドレス : </th>
						  <td class="Form-Item-text"> {formData.email}</td>
					  </tr>
					  <tr class="Form-Item">
						  <th class="Form-Item-Label">電話番号 : </th>
						  <td class="Form-Item-text"> {formData.phone}</td>
					  </tr>
					  <tr class="Form-Item">
						  <th class="Form-Item-Label">お問い合わせ種類 : </th>
						  <td class="Form-Item-text"> {formData.inquiryType}</td>
					  </tr>
					  <tr class="Form-Item">
						  <th class="Form-Item-Label">お問い合わせ内容 : </th>
						  <td class="Form-Item-text"> {formData.message}</td>
					  </tr>
				  </tbody>
			  </table>

      
      <button class="Form-Btn" onClick={handleEdit}>修正</button>
      <button class="Form-Btn" onClick={handleConfirm}>送信</button>
    </section>
  );
};

export default Confirmation;
