import { Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import About from './pages/About';
import Products from "./pages/Products";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import Signin from "./pages/Signin";
function App() {
  return (
   <>
    <Routes>
      <Route path="/" element={ <Home/> } />
      <Route path="/about" element={ <About/> } /> 
      <Route path="/products" element={ <Products/> } /> 
      <Route path="/testimonials" element={ <Testimonials/> } /> 
      <Route path="/contact" element={ <Contact/> } /> 
      <Route path="/signin" element={ <Signin/> } /> 
    </Routes>
   </>
  );
}

export default App;
