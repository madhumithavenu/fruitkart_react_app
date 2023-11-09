
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {

  const [cartItems, setCartItems] = useState([]);

  return (
    <BrowserRouter>
      <Header cartItems={cartItems} />
      <Routes>
        <Route exact path="/" element={<Products />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
