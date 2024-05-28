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
import PrivateRoutes from './components/PrivateRoutes'
import PublicRoutes from './components/PublicRoutes'

function App() {

  const user = null;
  // const user = "user";

  return (
    <>
      <Header user={user} />

      <Routes>
        <Route path='/' element={<HomePage />} />

        {!user && <Route element={<PublicRoutes user={user} />}>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
        </Route>}

        {user && <Route element={<PrivateRoutes user={user} />}>
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/books' element={<BooksPage />} />
          <Route path='/add-book' element={<AddBookPage />} />
          <Route path='/edit-book' element={<EditBookPage />} />
        </Route>}

      </Routes>

      <Footer />
    </>
  )
}

export default App
