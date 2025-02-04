import './App.css';
import { useEffect, useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import Login from './pages/Login';
import ReadMore from './pages/ReadMore';
import Register from './pages/Register';
import RaadServices from './pages/RaadServices';
import Navbar from './components/Navbar';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';

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
        <Route path="/" element={user ? <Navigate to="/home" /> : <Register />} />
        <Route path="/home" element={user ? <HeroSection /> : <Navigate to="/login" />} />
        <Route path="/login" element={user ? <Navigate to="/home" /> : <Login />} />
        <Route path="/read" element={user ? <ReadMore /> : <Navigate to="/login" />} />
        <Route path="/readservice" element={user ? <RaadServices /> : <Navigate to="/login" />} />
      </Routes>
    </>
  );
}

export default App;
