import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Adminpage from './pages/Adminpage';
import Maincategory from './pages/Maincategory/Maincategory';
import Maincategorycreate from './pages/Maincategory/Maincategorycreate';
import Maincategoryupdate from './pages/Maincategory/Maincategoryupdate';
import Subcategorycreate from './pages/Subcategory/Subcategorycreate';
import Subcategory from './pages/Subcategory/Subcategory';
import Subcategoryupdate from './pages/Subcategory/Subcategoryupdate';



export default function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/admin' element={<Adminpage/>}/>
      <Route path='/admin/maincategory' element ={<Maincategory/>}/>
      <Route path='/admin/maincategory/create' element ={<Maincategorycreate/>}/>
      <Route path='/admin/maincategory/update/:id' element ={<Maincategoryupdate/>}/>
      <Route path='/admin/subcategory' element ={<Subcategory/>}/>
      <Route path='/admin/subcategory/create' element ={<Subcategorycreate/>}/>
      <Route path='/admin/subcategory/update/:id' element ={<Subcategoryupdate/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}