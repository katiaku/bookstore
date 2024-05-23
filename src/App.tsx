import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import BooksPage from './pages/BooksPage'
// import HomePage from './pages/HomePage'

function App() {

  return (
    <div>
      <Header />
      <BooksPage />
      {/* <HomePage /> */}
      <Footer />
    </div>
  )
}

export default App
