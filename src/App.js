import React from 'react';
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

import HomeScreen from './screens/HomeScreen'
import ArticleScreen from './screens/ArticleScreen'

import BasshylykScreen from './screens/FooterScreens/BasshylykScreen'
import ContactScreen from './screens/FooterScreens/ContactScreen'
import Gazet_turalyScreen from './screens/FooterScreens/Gazet-turalyScreen'
import TypographyScreen from './screens/FooterScreens/TypographyScreen'

import './bootstrap.min.css'

function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/' element={<HomeScreen />} exact />
            <Route path='/article/:id' element={<ArticleScreen />} />

            <Route path='/typography' element={<TypographyScreen />} />
            <Route path='/basshylyk' element={<BasshylykScreen />} />
            <Route path='/gazet-turaly' element={<Gazet_turalyScreen />} />
            <Route path='/contact' element={<ContactScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
