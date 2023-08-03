
import React from 'react';
import './success.scss'; 

const SuccessPage = () => {

  return (
    <div className="container">
      <h1>Sipariş Başarılı!</h1>
      <p>Tebrikler! Siparişiniz başarıyla alındı.</p>
      <div className="success-message">
        <p>Teşekkür ederiz.</p>
      </div>
      <p className="contact-link">
        İletişim için <a href="mailto:meri@example.com">meri@example.com</a> adresine
        e-posta gönderebilirsiniz.
      </p>
    </div>
  );
};

export default SuccessPage;
