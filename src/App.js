import './App.css';
import { useEffect, useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import Login from './pages/Login';
import ReadMore from './pages/ReadMore';
import Register from './pages/Register';
import Navbar from './components/Navbar';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import ContextData from './Data/ContextData';
import CarsLogo from './pages/CarsLogo';
import Model from './pages/Model';
import Years from './pages/Years';
import IndexData from './pages/IndexData';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userLogout = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => userLogout();
  }, []);

  return (
    <>

      {user && <Navbar user={user} />}
      <Routes basename="/">
        <Route path="/" element={user ? <Navigate to="/login" /> : <Register />} />
        <Route path="/home" element={user ? <HeroSection /> : <Navigate to="/login" />} />
        <Route path="/login" element={user ? <Navigate to="/home" /> : <Login />} />
        <Route path="/read" element={user ? <ContextData> <ReadMore /> </ContextData> : <Navigate to="/login" />} />
        <Route path="/maker" element={user ? <CarsLogo /> : <Navigate to="/login" />} />
        <Route path="/model" element={user ? <Model /> : <Navigate to="/login" />} />
        {/* <Route path="/year" element={user ? <Years /> : <Navigate to="/login" />} />
        <Route path="/indexs" element={user ? <IndexData /> : <Navigate to="/login" />} /> */}
      </Routes>
    </>
  );
}

export default App;
