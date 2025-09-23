
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/loginPage';
import RegisterPage from './pages/registerPage';
import AdminPage from './pages/adminPage';
import TestPage from './pages/testPage';
import { Toaster } from 'react-hot-toast';
import ClientPage from './pages/client/clientPage';

function App() {

  return (
    <>
    <BrowserRouter>
      <div className='w-full h-screen flex justify-center items-center'>
       <Toaster position="top-right"/>
       <Routes path="/">
          <Route path="/*" element={<ClientPage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/register" element={<RegisterPage/>} />
          <Route path="/test" element={<TestPage/>} />
          <Route path="/admin/*" element={<AdminPage/>} />
       </Routes>
         
      </div>
      </BrowserRouter>
    </>
  )
}


export default App
