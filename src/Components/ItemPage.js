import data from './data.js';

const ItemPage = () => {
  console.log(data);

  return (
    <div>
    <div className="item-page-header">
  <h1>Item Page</h1>
  <p>This page displays Items with their details</p>
</div>

<div className="item-page-content">
  {data.map((item) => (
    <div key={item.id} className="item-card">
      <h2>{item.name}</h2>
      <h4>{item.category}</h4>
      <img src={item.image} alt={item.name} className="item-image" />
      <p>{item.description}</p>
      <p>Price:{item.price}</p>
      <p>rating⭐{item.reviews}</p>
      <button className='add-cart-button'>Add to cart</button>
    </div>
  ))}
</div>
</div>

  );
};

export default ItemPage;
