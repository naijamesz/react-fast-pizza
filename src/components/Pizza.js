/* eslint-disable no-undef */
import React from 'react';
export default function Pizza({ photoName, name, ingredients, price }) {
  return (
    <li className={`pizza &{pizza.soldOut ? "sold-out : ""}`}>
      <img src={photoName} alt={name} />
      <div>
        <h2>{name}</h2>
        <p>{ingredients}</p>
        <span>{price + 3}</span>
      </div>
    </li>
  );
}
