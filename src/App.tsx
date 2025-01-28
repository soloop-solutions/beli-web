import "./App.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "../pages/home"
import BlogPage from "../pages/BlogPage"
import Navbar from "./components/ui/navbar"
import Footer from "./components/footer"
import BlogPostPage from "../pages/BlogPostPage"
import { useState } from "react"
import { IntlProvider } from "react-intl"
import enMessages from "./locales/en.json"
import sqMessages from "./locales/sq.json"
import deMessages from "./locales/de.json"
import frMessages from "./locales/fr.json"

// Define a type for our messages
const messages: Record<string, Record<string, string>> = {
  en: enMessages,
  sq: sqMessages,
  de: deMessages,
  fr: frMessages,
};

const App: React.FC = () => {
  const [locale, setLocale] = useState<string>("sq");



  // const ChangeLanguage = selectedLocale => {
  //   setLocale(selectedLocale);
  // };


  return (
    <IntlProvider locale={locale} messages={messages[locale]}  defaultLocale="en">
      <Router>
        <Navbar locale={locale} setLocale={setLocale} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:documentId" element={<BlogPostPage />} />
        </Routes>
        <Footer />
      </Router>
    </IntlProvider>
  )
}

export default App

