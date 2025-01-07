import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../home';
import BlogPage from '../BlogPage';
import Navbar from './components/ui/navbar';
import Footer from './components/footer';
import {BlogPostPage} from '../BlogPostPage';



function App() {

  return (
    <>
      <Navbar />
   
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogPostPage />} />
           </Routes>
    <Footer />
    </Router>
    </>
  )
}

export default App
