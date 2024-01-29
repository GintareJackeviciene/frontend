import { useState } from 'react'
import './App.css'
import { Toaster } from "react-hot-toast";
import Header from "./components/layout/Header.jsx";
import { Route, Routes } from "react-router-dom";
import ListPage from "./pages/student/ListPage.jsx";
import CreatePage from "./pages/student/CreatePage.jsx";
import EditPage from "./pages/student/EditPage.jsx";
import HomePage from './pages/student/HomePage.jsx';
import LoginPage from './pages/student/LoginPage.jsx';

function App() {

  return (
    <div className=''>
      <Toaster />
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/list-student' element={<ListPage />} />
        <Route path='/create-student' element={<CreatePage />} />
        <Route path='/edit-student/:id' element={<EditPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </div>
  )
}

export default App
