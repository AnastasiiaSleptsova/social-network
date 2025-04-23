import './App.css';
import React, { Component } from 'react';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MessagesContainer from './Components/Messages/MessagesContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import Login from './Components/Login/Login';
import { connect } from 'react-redux';
import { initializeApp } from './redux/appReducer'
import Preloader from './Components/Common/Preloader/Preloader';
import UsersContainerFC from './Components/Users/UsersContainerFC';
import ProfileContainerFC from './Components/Profile/ProfileContainerFC';
import UsersList from './Components/Users/UserList';


const NotFountPage = () => {
  return (
    <span>404</span>
  )
}

class App extends Component {

  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <BrowserRouter>
        <div className='app_wrapper'>
          <HeaderContainer />
          <main className='page'>
            <Navbar />
            <Routes>
              <Route
                path='/Profile/:userId?'
                element={(
                  // <ProfileContainer />
                  <ProfileContainerFC />
                )}
              />
              <Route
                path='/Messages'
                element={(
                  <MessagesContainer />
                )}
              />
              {/* <Route path='/News' element={<News />} /> */}
              {/* <Route path='/Music' element={<Music />} /> */}
              {/* <Route path='/Settings' element={<Settings />} /> */}
              {/* <Route path='/Users' element={<UsersContainer />} /> */}
              <Route path='/Users' element={<UsersList/>} />
              <Route path='/Login' element={<Login />} />
              <Route path='*' element={<NotFountPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default connect(mapStateToProps, { initializeApp })(App);