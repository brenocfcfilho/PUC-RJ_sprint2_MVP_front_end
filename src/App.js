import React, { useState } from 'react';
import { FaComment, FaUser } from 'react-icons/fa';
import './styles.css';
import CartPage from './CartPage';
import ProfilePage from './ProfilePage';
import coentro from './images/coentro.jpg';
import manjericao from './images/manjericao.jpg';
import hortela from './images/hortela.jpg';
import alecrim from './images/alecrim.jpg';

const ProductCard = ({ product, addToCart }) => {
  const { id, image, name, price } = product;

  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>R${price}</p>
      <button onClick={() => addToCart(product)}>Adicionar ao carrinho</button>
    </div>
  );
};

const ProductList = ({ addToCart }) => {
  const products = [
    {
      id: 1,
      name: 'Coentro',
      price: 5.00,
      image: coentro,
    },
    {
      id: 2,
      name: 'Manjericão',
      price: 5.00,
      image: manjericao,
    },
    {
      id: 3,
      name: 'Hortelã',
      price: 5.00,
      image: hortela,
    },
    {
      id: 4,
      name: 'Alecrim',
      price: 5.00,
      image: alecrim,
    }
  ];

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
};

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
  };

  const handleViewCart = () => {
    setShowCart(true);
    setShowProfile(false);
  };

  const handleHideCart = () => {
    setShowCart(false);
  };

  const handleSupportClick = () => {
    setShowProfile(false);
  };

  const handleProfileClick = () => {
    setShowProfile(true);
    setShowCart(false);
  };

  const handleGoBack = () => {
    setShowProfile(false);
  };

  return (
    <div className="app">
      <h1>SEMENTES DE PLANTAS</h1>
      {!showCart && !showProfile && (
        <>
          <ProductList addToCart={addToCart} />
          <button onClick={handleViewCart}>Meu Carrinho</button>
        </>
      )}

      {showCart && (
        <CartPage
          cartItems={cartItems}
          onHideCart={handleHideCart}
          onRemoveItem={removeFromCart}
        />
      )}

      {showProfile && (
        <ProfilePage onGoBack={handleGoBack} onViewCart={handleViewCart} />
      )}
      
      <button className="profile-button" onClick={handleProfileClick}>
        <FaUser className="profile-icon" />
        Perfil
      </button>
    </div>
  );
};

export default App;
