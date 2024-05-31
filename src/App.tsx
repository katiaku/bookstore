import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import BooksPage from './pages/BooksPage'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ProfilePage from './pages/ProfilePage'
import AddBookPage from './pages/AddBookPage'
import EditBookPage from './pages/EditBookPage'
import PublicRoutes from './components/routes/PublicRoutes'
import PrivateRoutes from './components/routes/PrivateRoutes'
import { Flip, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<HomePage />} />

        <Route element={<PublicRoutes />}>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
        </Route>

        <Route element={<PrivateRoutes />}>
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/books' element={<BooksPage />} />
          <Route path='/add-book' element={<AddBookPage />} />
          <Route path='/edit-book' element={<EditBookPage />} />
        </Route>
      </Routes>

      <Footer />
      <ToastContainer transition={Flip} />
    </>
  )
}

export default App
