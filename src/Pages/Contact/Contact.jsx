import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Contact.css';
import FadeInUp from '../../components/FadeInUp/FadeInUp';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    furigana: '',
    email: '',
    phone: '',
    inquiryType: '',
    message: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const savedFormData = JSON.parse(localStorage.getItem('contactFormData'));
    if (savedFormData) {
      setFormData(savedFormData);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => {
      const updatedData = { ...prevData, [name]: value };
      localStorage.setItem('contactFormData', JSON.stringify(updatedData));
      return updatedData;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate required fields
    if (!formData.name || !formData.furigana || !formData.email || !formData.phone || !formData.inquiryType) {
      setErrorMessage('すべての必須項目を入力してください。');
      return;
    }

    navigate('/confirmation', { state: { formData } });
  };

  return (
    <FadeInUp delay={0}>
    <section className="info" id="sec-info">
      <div className="title-wrap">
        <h2 className='title'>PRODUCT INFORMATION</h2>
        <h3 className="title-sub"><span>商品情報</span></h3>
      </div>
      

      <form className="Form" onSubmit={handleSubmit} noValidate>
        <p>お問い合わせ内容をご入力の上、「確認画面へ」ボタンをクリックしてください。</p>
        <table className="demo01">
          <tbody>
            <tr className="Form-Item">
              <th className="Form-Item-Label">お名前<span className="Form-Item-Label-Required">必須</span></th>
              <td>
                <input
                  type="text"
                  name="name"
                  className="Form-Item-Input"
                  placeholder="例）山田太郎"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </td>
            </tr>
            <tr className="Form-Item">
              <th className="Form-Item-Label">ふりがな<span className="Form-Item-Label-Required">必須</span></th>
              <td>
                <input
                  type="text"
                  name="furigana"
                  className="Form-Item-Input"
                  placeholder="例）やまだたろう"
                  value={formData.furigana}
                  onChange={handleChange}
                  required
                />
              </td>
            </tr>
            <tr className="Form-Item">
              <th className="Form-Item-Label">メールアドレス<span className="Form-Item-Label-Required">必須</span></th>
              <td>
                <input
                  type="email"
                  name="email"
                  className="Form-Item-Input"
                  placeholder="例）guest@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </td>
            </tr>
            <tr className="Form-Item">
              <th className="Form-Item-Label">電話番号<span className="Form-Item-Label-Required">必須</span></th>
              <td>
                <input
                  type="text"
                  name="phone"
                  className="Form-Item-Input"
                  placeholder="例）0000000000"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </td>
            </tr>
            <tr className="Form-Item">
              <th className="Form-Item-Label">お問い合わせ種類<span className="Form-Item-Label-Required">必須</span></th>
              <td>
                <select
                  name="inquiryType"
                  className="Form-Item-Input"
                  value={formData.inquiryType}
                  onChange={handleChange}
                  required
                >
                  <option value="">お問い合わせ種類を選択してください</option>
                  <option value="NMN">NMN</option>
                  <option value="納豆キナーゼ">納豆キナーゼ</option>
                  <option value="COQ10">COQ10</option>
                  <option value="歩行力">歩行力</option>
                </select>
              </td>
            </tr>
            <tr className="Form-Item">
              <th className="Form-Item-Label isMsg">お問い合わせ内容</th>
              <td>
                <textarea
                  className="Form-Item-Textarea"
                  name="message"
                  rows="5"
                  placeholder="お問合せ内容を入力"
                  value={formData.message}
                  onChange={handleChange}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <button type="submit" className="Form-Btn">確認画面へ</button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
    </section>
    </FadeInUp>
  );
};

export default Contact;
