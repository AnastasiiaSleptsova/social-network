import './App.css';
import React from 'react';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Profile from './Components/Profile/Profile';
import Navbar from './Components/Navbar/Navbar';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Frends from './Components/Friends/Friends';
import MessagesContainer from './Components/Messages/MessagesContainer';
import FrendsContainer from './Components/Friends/FriendsContainer';

const NotFountPage = () => {
  return (
    <span>404</span>
  )
}

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app_wrapper'>
        <Header />
        <main className='page'>
          <Navbar />
          <Routes>
            <Route
              path='/Profile'
              element={(
                <Profile />
              )}
            />
            <Route
              path='/Messages'
              element={(
                <MessagesContainer />
              )}
            />
            <Route path='/News' element={<News />} />
            <Route path='/Music' element={<Music />} />
            <Route path='/Settings' element={<Settings />} />
            <Route path='/Frends' element={<FrendsContainer />} />
            <Route path='*' element={<NotFountPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
