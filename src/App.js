import './App.css';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Footer from './components/Footer';
import Test from './Test';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/test' element={<Test/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
