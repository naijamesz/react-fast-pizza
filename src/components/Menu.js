import React from 'react';
import { pizzaData } from '../data';
import Pizza from './Pizza';

export default function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;
  return (
    <main className='menu'>
      <h2>Our menu</h2>
      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all
            delicious.
          </p>

          <ul className='pizzas'>
            {/* using .map() method to show any list from array data */}
            {pizzas.map((pizza, index) => (
              <Pizza
                key={index}
                name={pizza.name}
                ingredients={pizza.ingredients}
                photoName={pizza.photoName}
                price={pizza.price}
              />
            ))}
            <span>{pizzas.soldOut ? 'SOLD OUT' : pizzas.price}</span>
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later </p>
      )}
    </main>
  );
}
