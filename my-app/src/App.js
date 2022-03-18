import logo from "./logo.svg";
import "./App.css";
import { Link, Route, Routes, useLocation, useNavigate, useRoutes } from "react-router-dom";
import { useEffect, useState } from "react";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Items } from "./pages/Items";
import { Login } from "./pages/Login";
import { Carts } from "./pages/Carts";

function App() {
  const [globalUser, setGlobalUser] = useState(null);
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);
  const location = useLocation();
  useEffect(() => {
    fetchProducts()
  }, [setItems])

  useEffect(() => {
    if (!globalUser) {
      if (location.pathname !== '/login') {
        navigate('login')
      }
    }
  }, [location, globalUser])

  const fetchProducts = async () => {

  const products = await fetch('https://fakestoreapi.com/products')
  .then(res=>res.json())
  .then(json=> {return json});
  setItems(products)
  }

  return (
    <div className="App">
      <ul className="nav">
      {globalUser && <><li className="nav-item">
          <p className="nav-link active">
            <Link to="/">Home</Link>
          </p>
        </li>
        <li className="nav-item">
          <p className="nav-link active">
            <Link to="/items">Items</Link>
          </p>
        </li>
        <li className="nav-item">
          <p className="nav-link active">
            <Link to="/cart">Cart ({cart.length} items)</Link>
          </p>
        </li>
        <li className="nav-item">
          <p className="nav-link active">
            <Link to="/about">About</Link>
          </p>
        </li>
        <li className="nav-item">
          <p className="nav-link active">
            Logged in as {globalUser.name}
          </p>
        </li>
        <li className="nav-item">
          <p className="nav-link active" onClick={() => setGlobalUser(null)}>
            Logout
          </p>
        </li>
        </>}
        {!globalUser && <>
          <li className="nav-item">
          <p className="nav-link active">
            <Link to="/login">Login</Link>
          </p>
        </li>
        </>}
        
      </ul>
      <Routes>
        <Route path="/" element={<Home user={globalUser} />} />
        <Route path="about" element={<About user={globalUser} />} />
        <Route path="items" element={<Items products={items} setCart={setCart} cart={cart}/>}  />
        <Route path="cart" element={<Carts setCart={setCart} cart={cart}/>}  />
        <Route path="login" element={<Login setGlobalUser={setGlobalUser}/>} />
      </Routes>
    </div>
  );
}










export default App;
