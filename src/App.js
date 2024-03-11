import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import './App.css'
import About from './About.js';
import Contact from './Contact.js';
import Footer from './Footer'; // Import the Footer component
import Navbar from './Navbar'; // Import the Navbar component

const scrollToServices = () => {
  const servicesSection = document.getElementById('services');
  servicesSection.scrollIntoView({ behavior: 'smooth' });
};


// Components
const Hero = () => (
  <div className="hero">
      <div className="overlay"></div>
      <div className="content">
        <h1>Вам нужны лучшие ногти? Вы пришли по адресу!</h1>
        <button onClick={scrollToServices}>Перейти к услугам</button>
      </div>
    </div>
);

const WhyChooseUs = () => (
  <div className="why-choose-us">
    <h3>Почему выбирают нас?</h3>
    <p>Мы предлагаем высококачественные услуги маникюра и педикюра.</p>
    <p>Наш опытный персонал обеспечивает безупречный сервис.</p>
    <p>Мы используем только лучшие материалы и средства для ухода за ногтями.</p>
  </div>
);

const PriceList = () => (
  <div id="services" className="prices">
    <div className="price-card">
      <h2>маникюр с покрытием</h2>
      <p>покрытие-база, гель, гель лак и топ.</p>
      <p>цена: <strong>500 рублей</strong></p>
      <Link to="/contact">
        <button>Свяжитесь с нами</button>
      </Link>
    </div>
    <div className="price-card">
      <h2>маникюр без покрытия</h2>
      <p>гель, гель лак и топ.</p>
      <p>цена: <strong>250 рублей</strong></p>
      <Link to="/contact">
        <button>Свяжитесь с нами</button>
      </Link>
    </div>
    <div className="price-card">
      <h2>дизайн</h2>
      <p>дизайн для ваших ногтей</p>
      <p>цена: <strong>100 рублей</strong></p>
      <Link to="/contact">
        <button>Свяжитесь с нами</button>
      </Link>
    </div>
  </div>

);

const App = () => (
  document.title = "Nailtime", // Set the title to "Nailtime"
  <div>
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={(<><Hero/>
      <WhyChooseUs />
      <PriceList />
      <Footer /> {/* Include the Footer component */}</>)}></Route>
      </Routes>

    </Router> 
  </div>
);

export default App;
