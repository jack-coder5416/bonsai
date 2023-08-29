import React from 'react';
import './CardUtil.css'; // Import your CSS for styling

function CardUtil(props) {
  return (
    <div className="plan-card">
      <h2 className="plan-title">{props.title}</h2>
      <div className="plan-price">${props.price}</div>
      <p className="plan-description">{props.description}</p>
      <button className="plan-button">{props.button}</button>
    </div>
  );
}

export default CardUtil;
