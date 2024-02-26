
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<shop/>}/>
        <Route path='/Womens' element={<shop_category category="Casual"/>}/>
        <Route path='/Mens' element={<shop_category category="Party"/>}/>
        <Route path='/Kids' element={<shop_category category="Saree"/>}/>
        <Route path="/product" element={<product/>}>
          <Route path=':productId' element={<product/>}/>
        </Route>
        <Route path='/cart' element={<cart/>}/>
        <Route path='/login' element={<login_signup/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
