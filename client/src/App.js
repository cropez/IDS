import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
//pages
import Autorizacija from "./pages/Autorizacija";
import Dashboard from "./pages/dashboard";
import Dati from "./pages/Dati";
import Informacija from "./pages/informacija"
import Bildes from "./pages/bildes";
import Regestracija from  "./pages/Regestracija"
import Profile from "./pages/profile"
//components
import Header from "./components/Header";
import Footer from "./components/footer";




export default function App() {
  const isAuth = !!window.localStorage.getItem('auth');
  console.log(isAuth);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={isAuth ? <Navigate to="/dashboard" replace /> : <Autorizacija />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/informacija" element={<Informacija />} />
        <Route path="/dati" element={<Dati />} />
        <Route path="/bildes" element={<Bildes/>}/>
        <Route path="/registracija" element={< Regestracija/>}/>
        <Route path="/profile" element={< Profile/>}/>
      </Routes>
      <Footer />
    </>
  );
}
