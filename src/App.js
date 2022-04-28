import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import {Routes,Route} from "react-router-dom";

import Contact from "./Pages/Contact";
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/product" element={<Product/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="*" element={()=><h2>404 Error Found</h2>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
