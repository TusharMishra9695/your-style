import Home from "./pages/Home";
import Everything from "./pages/Everything";
import Women from "./pages/Women";
import Men from "./pages/Men";
import Accessories from "./pages/Accessories";
import Cart from "./pages/Cart";
import './css/Home.css'
import './css/Global.css'
import { BrowserRouter,Routes,Route } from "react-router-dom";

function App() {
  return (
<BrowserRouter>
 <Routes>
  <Route path="/" element={<Home />} />
  <Route path= "/everything" element={<Everything />} />
  <Route path= "/women" element={<Women />} />
  <Route path= "/men" element={<Men />} />
  <Route path= "/accessories" element={<Accessories />} />
  <Route path= "/cart" element={<Cart />} />
 </Routes>
</BrowserRouter>
  );
}

export default App;
