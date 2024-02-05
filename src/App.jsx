
import './App.css'
import { Toaster } from "react-hot-toast";
import Header from "./components/layout/Header.jsx";
import { Route, Routes } from "react-router-dom";
import ListPage from "./pages/student/ListPage.jsx";
import CreatePage from "./pages/student/CreatePage.jsx";
import EditPage from "./pages/student/EditPage.jsx";
import HomePage from './pages/student/HomePage.jsx';

import RegisterPage from './pages/auth/RegisterPage.jsx';
import LoginPage from './pages/auth/LoginPage.jsx';
import ListUserPage from './pages/user/ListUserPage.jsx';
import CreateUserPage from './pages/user/CreateUserPage.jsx';
import EditUserPage from './pages/user/EditUserPage.jsx';
import PrivateRoute from "./PrivateRoute/PrivateRoute.jsx";
import AdminPrivateRoute from "./PrivateRoute/AdminPrivateRoute.jsx";


function App() {

  return (
    <div className=''>
        <Toaster/>
        <Header/>
        <Routes>
            <Route path='/create-student' element={
                <PrivateRoute>
                    <CreatePage />
                </PrivateRoute>
            } />

            <Route path='/edit-student/:id' element={
                <PrivateRoute>
                    <EditPage />
                </PrivateRoute>
            } />

            <Route path='/list-user' element={
                <AdminPrivateRoute>
                    <ListUserPage />
                </AdminPrivateRoute>
            } />

            <Route path='/edit-user/:id' element={
                <AdminPrivateRoute>
                    <EditUserPage />
                </AdminPrivateRoute>
            } />

            <Route path='/create-user' element={
                <AdminPrivateRoute>
                    <CreateUserPage />
                </AdminPrivateRoute>
            } />

            <Route path='/' element={<HomePage />} />
            <Route path='/list-student' element={<ListPage/>}/>
            <Route path='/register' element={<RegisterPage/>}/>
            <Route path='/login' element={<LoginPage/>}/>
        </Routes>
    </div>
)
}

export default App
