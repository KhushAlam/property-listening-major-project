import { useState, useEffect } from 'react';
import Homep from '../components/Homep';
import About from '../components/About';
import Property from '../components/Property';
import Testimonial from '../components/Testimonial';
import Contact from '../components/Contact';


export default function Home() {
  return (
   <>
   <Homep/>
   <About/>
   <Property/>
   <Testimonial/>
   <Contact/>
   </>
  );
}