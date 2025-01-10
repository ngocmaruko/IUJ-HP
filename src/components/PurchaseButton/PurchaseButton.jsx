import React from 'react';
import './PurchaseButton.css';

const PurchaseButton = ({ link }) => {
  const handleClick = () => {
    window.open(link, '_blank');
  };

  return (
    <div className="purchase-wrapper">
      <span className="purchase-button" onClick={handleClick}>今すぐ購入する</span>
    </div>
  );
};

export default PurchaseButton;
