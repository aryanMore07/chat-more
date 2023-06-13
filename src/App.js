import { Route, Routes } from 'react-router';
import './App.css';
// import MockmanComponent from './component/Mockman';
import Navbar from './component/Navbar/Navbar';
import Landingpage from './pages/landingPage/Landingpage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Landingpage />}/>
      </Routes>
      {/* <MockmanComponent colorScheme="dark" /> */}
    </div>
  );
}

export default App;
