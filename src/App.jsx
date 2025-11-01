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

import Property from "./pages/Property/Property";
import Propertycreate from "./pages/Property/Propertycreate";
import Propertyupdate from "./pages/Property/Propertyupdate";

import Testimonial from "./pages/Testimonial/Testimonial";
import Testimonialcreate from "./pages/Testimonial/Testimonialcreate";
import Testimonialupdate from "./pages/Testimonial/Testimonialupdate";

import Checkout from "./pages/Checkout/Checkot";
import Checkoutcreate from "./pages/Checkout/Checkoutcreate";
import Checkoutupdate from "./pages/Checkout/Checkoutupdate";

import Users from "./pages/Users/Users";
import Userscreate from "./pages/Users/Userscreate";
import Usersupdate from "./pages/Users/Usersupdate";

import Contectus from './pages/Contect/Contect';
import Contactusupdate from './pages/Contect/Contectupdate';
import LoginPage from './components/Login';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/admin' element={<Adminpage />} />
        <Route path='/login' element={<LoginPage />} />


        <Route path='/admin/maincategory' element={<Maincategory />} />
        <Route path='/admin/maincategory/create' element={<Maincategorycreate />} />
        <Route path='/admin/maincategory/update/:id' element={<Maincategoryupdate />} />

        <Route path='/admin/subcategory' element={<Subcategory />} />
        <Route path='/admin/subcategory/create' element={<Subcategorycreate />} />
        <Route path='/admin/subcategory/update/:id' element={<Subcategoryupdate />} />

        <Route path='/admin/property' element={<Property />} />
        <Route path='/admin/property/create' element={<Propertycreate />} />
        <Route path='/admin/property/update/:id' element={<Propertyupdate />} />

        <Route path='/admin/users' element={<Users />} />
        <Route path='/admin/users/create' element={<Userscreate />} />
        <Route path='/admin/users/update/:id' element={<Usersupdate />} />

        <Route path='/admin/testimonial' element={<Testimonial />} />
        <Route path='/admin/testimonial/create' element={<Testimonialcreate />} />
        <Route path='/admin/testimonial/update/:id' element={<Testimonialupdate />} />

        <Route path='/admin/checkout' element={<Checkout />} />
        <Route path='/admin/checkout/create' element={<Checkoutcreate />} />
        <Route path='/admin/checkout/update/:id' element={<Checkoutupdate />} />

        <Route path='/admin/contactus' element={<Contectus />} />
        <Route path='/admin/contactus/update/:id' element={<Contactusupdate />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}