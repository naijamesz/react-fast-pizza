/** @format */

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const pizzaData = [
  {
    name: 'Focaccia',
    ingredients: 'Bread with italian olive oil and rosemary',
    price: 6,
    photoName: 'pizzas/focaccia.jpg',
    soldOut: false
  },
  {
    name: 'Pizza Margherita',
    ingredients: 'Tomato and mozarella',
    price: 10,
    photoName: 'pizzas/margherita.jpg',
    soldOut: false
  },
  {
    name: 'Pizza Spinaci',
    ingredients: 'Tomato, mozarella, spinach, and ricotta cheese',
    price: 12,
    photoName: 'pizzas/spinaci.jpg',
    soldOut: false
  },
  {
    name: 'Pizza Funghi',
    ingredients: 'Tomato, mozarella, mushrooms, and onion',
    price: 12,
    photoName: 'pizzas/funghi.jpg',
    soldOut: false
  },
  {
    name: 'Pizza Salamino',
    ingredients: 'Tomato, mozarella, and pepperoni',
    price: 15,
    photoName: 'pizzas/salamino.jpg',
    soldOut: true
  },
  {
    name: 'Pizza Prosciutto',
    ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
    price: 18,
    photoName: 'pizzas/prosciutto.jpg',
    soldOut: false
  }
];

function App() {
  return (
    <div calssName='container'>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  //  const style = { color: "red", fontSize: "48px", textTransform: "uppercase" }
  const style = {};

  return (
    <header className='header'>
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  return (
    <main className='menu'>
      <h2>Our menu</h2>

      <div>
        {pizzaData.map((pizza, index) => (
          <Pizza
            key={index}
            name={pizza.name}
            ingredients={pizza.ingredients}
            photoName={pizza.photoName}
            price={pizza.price}
          />
        ))}
      </div>
      {/*       <Pizza
        name='Pizza Spinaci'
        ingredients='Tomato, mozarella, spinach, and ricotta cheese'
        photoName='pizzas/spinaci.jpg'
        price={10}
      />
      <Pizza
        name='Pizza Funghi'
        ingredients='Tomato, mushrooms, mozarella, and chesda chesse'
        photoName='pizzas/funghi.jpg'
        price={12}
      />
      <Pizza
        name='Pizza Salamino'
        ingredients='Tomato, mozarella, and pepperoni , and cheese'
        photoName='pizzas/salamino.jpg'
        price={12}
      /> */}
    </main>
  );
}
function Pizza({ photoName, name, ingredients, price }) {
  return (
    <div className='pizza'>
      <img src={photoName} alt={name} />
      <div>
        <h2>{name}</h2>
        <p>{ingredients}</p>
        <span>{price + 3}</span>
      </div>
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  // if (hour >= openHour && hour <= closeHour) alert("We're currently open!");
  // else alert("Sorry we're closed");

  // if (!isOpen) return <p>CLOSED</p>;

  return (
    <footer className='footer'>
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </footer>
  );
}

// return React.createElement("footer", null, "We're currently open!");
function Order({ closeHour, openHour }) {
  return (
    <div className='order'>
      <p>
        We're open from {openHour}:00 to {closeHour}:00. Come visit us or order online.
      </p>
      <button className='btn'>Order</button>
    </div>
  );
}

// react v18
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// React before 18
// ReactDOM.render(<App />, document.getElementById("root"));
