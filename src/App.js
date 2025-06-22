import './App.css';
import router from './router'
import {RouterProvider} from 'react-router';
import { CartProvider } from './Components/CartContext.js';
function App() {
  return (
    <CartProvider>
    <div className="App">
     <RouterProvider router={router}/>
    </div>
    </CartProvider>
  );
}

export default App;
