import Layout from "./Components/Layout.jsx";
import Navbar from "./Components/Navbar.jsx";
import Product from "./Components/product.jsx"
import Trial from "./Components/Trial.jsx";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {


  return (

    <div className="m-6">
      {/* Every element wrapped inside the router now has the ability to use  */}
      <Router>

        <Routes>

          <Route path="/" element={<Layout />} >
            <Route index element={<Product />}></Route>
            <Route path="trial" element={<Trial />}></Route>
          </Route>

        </Routes>



      </Router>



    </div>


  )
}

export default App
