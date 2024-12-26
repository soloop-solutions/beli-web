import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import BlogPage from './pages/BlogPage';
import Offers from './pages/offers';
import Navbar from './components/ui/navbar';
import Footer from './components/footer';



function App() {

  return (
    <>
      <Navbar />
   
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<BlogPage />} />
   
          <Route path="/offers" element={<Offers />} />

        </Routes>
    <Footer />
    </Router>
    </>
  )
}

export default App
