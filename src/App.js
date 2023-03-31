import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import NewProduct from './Components/NewProduct';
import NotFound from './Components/NotFound';
import Login from './Components/LoginForm';
import FleaMarket from './Components/FleaMarket';
import Best from './Components/Best';
import Sale from './Components/Sale';
import Product from './Components/Product';
import ProductDetail2 from './Components/ProductDetail2';

function App() {
  return (
    <>
    <BrowserRouter>
        <Header />

        <Routes>

          <Route path='/' element={<Main />} />
          <Route path='/NewProduct/:productId' element={<NewProduct />} />
          <Route path='/NewProduct' element={<NewProduct />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Best' element={<Best />} />
          <Route path='/FleaMarket' element={<FleaMarket />} />
          <Route path='/Sale' element={<Sale />} />
          <Route path='/Product' element={<Product />} />
          <Route path='/ProductDetail2' element={<ProductDetail2 />} />
          <Route path='*' element={<NotFound />} />

        </Routes>

      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
