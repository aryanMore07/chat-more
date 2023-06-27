import { Route, Routes } from 'react-router';
import './App.css';
// import MockmanComponent from './component/Mockman';
import Navbar from './component/Navbar/Navbar';
import Landingpage from './pages/landingPage/Landingpage';
import LoginComponent from './pages/loginPage/LoginPage';
import SignupComponent from './pages/signupPage/SignupPage';
import MockmanComponent from './component/mockmanJs/Mockman';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import HomeComponent from './pages/homePage/HomePage';
import PostTweetComponent from './component/PostTweet/PostTweet.jsx'
import RequireAuth from './auth/RequireAuth';
import ExploreComponent from './pages/explorePage/ExplorePage.jsx';
import BookmarkComponent from './pages/bookmarkPage/BookmarkPage.jsx';
import ProfileComponent from './pages/profilePage/ProfilePage.jsx';

function App() {

  return (
    <div className="App">
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Navbar />
      <Routes>
        <Route path='/welcome' element={<Landingpage />} />
        <Route path='/' element={<RequireAuth><HomeComponent /></RequireAuth>}>
          <Route path='home' element={<RequireAuth><PostTweetComponent /></RequireAuth>}/>
          <Route path='explore' element={<RequireAuth><ExploreComponent /></RequireAuth>}/>
          <Route path='bookmarks' element={<RequireAuth><BookmarkComponent /></RequireAuth>}/>
          <Route path='profile' element={<RequireAuth><ProfileComponent /></RequireAuth>}/>
        </Route>
        <Route path='/auth-login' element={<LoginComponent />} />
        <Route path='/auth-signup' element={<SignupComponent />} />
        <Route path='/mockman' element={<MockmanComponent />} />
      </Routes>

    </div>
  );
}

export default App;
