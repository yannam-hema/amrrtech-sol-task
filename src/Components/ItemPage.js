import data from './data.js';
import { Link } from 'react-router-dom';
import CartContext from './CartContext.js';
import { useContext, useState } from 'react';

const ItemPage = () => {
  const { addItemsToCart } = useContext(CartContext);
  const [showMessage, setShowMessage] = useState(false);

  const handleAddToCart = (item) => {
    addItemsToCart(item); // corrected function 
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };

  return (
    <div>

      {
       showMessage && (
        <div className="alert-message">
          ✅ Item added to cart!
        </div>
      )}

      <div className="item-page-header">
        <h1>Item Page</h1>
        <Link to="/viewpage" className="view-page-link">
          <button className="view-cart-button">View Cart</button>
        </Link>
      </div>

      <div className="item-page-content">
        {data.map((item) => (
          <div key={item.id} className="item-card">
            <h2>{item.name}</h2>
            <h4>{item.category}</h4>
            <img src={item.image} alt={item.name} className="item-image" />
            <p>{item.description}</p>
            <p>Price: {item.price}</p>
            <p>Rating ⭐ {item.reviews}</p>
            <button className="add-cart-button" onClick={() => handleAddToCart(item)}>
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemPage;
