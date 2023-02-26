
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Profile from './Components/Profile/Profile';
import Messages from './Components/Messages/Messages';
import Navbar from './Components/Navbar/Navbar';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Frends from './Components/Frends/Frends';
import MessagesContainer from './Components/Messages/MessagesContainer';

const NotFountPage = () => {
  return (<>
    <span>404</span>
  </>)
}

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app_wrapper'>
        <Header />
        <main className='page'>
          <Navbar state={props.state.navbarPage} />
          <Routes>
            <Route
              path='/Profile'
              element={(
                <Profile
                  profilePage={props.state.profilePage}
                  dispatch={props.dispatch}
                />
              )}
            />
            <Route
              path='/Messages'
              element={(
                <MessagesContainer
                  messagesPage={props.state.messagesPage}
                  dispatch={props.dispatch}
                />
              )}
            />
            <Route path='/News' element={<News />} />
            <Route path='/Music' element={<Music />} />
            <Route path='/Settings' element={<Settings />} />
            <Route path='/Frends' element={<Frends />} />
            <Route path='*' element={<NotFountPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
