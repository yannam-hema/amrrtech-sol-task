import { useContext } from "react";
import CartContext from './CartContext.js';
const ViewItem = () => {
  const { cartItems, clearCart } = useContext(CartContext);

  return (
    <div>
      <div className="view-page-header">
        <h1>View Page</h1>
        <h3 className ="cart-number" >Items In Cart: {cartItems.length}</h3>
      </div>
      { cartItems.length > 0 &&
      <div className="clear-cart-button-container">
      <button className="clear-cart-button" onClick={clearCart}>
          Clear Cart
          </button>
        </div>
}

      <div className="view-page-content">
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <div key={index} className="item-card">
              <h2>{item.name}</h2>
              <h4>{item.category}</h4>
              <img src={item.image} alt={item.name} className="item-image" />
              <p>Price: {item.price}</p>
            </div>
          ))
        ) : (
          <p className="no-items-cart">No Items In the cart! Visit Item Page add items in Cart </p>
        )}
      </div>
      
    </div>
  );
};

export default ViewItem;