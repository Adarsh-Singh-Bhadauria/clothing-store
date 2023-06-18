import Beauty from "./components/Beauty";
import Home from "./components/Home";
import Kids from "./components/Kids";
import Living from "./components/Living";
import Men from "./components/Men";
import Navbar from "./components/Navbar";
import Women from "./components/Women";
import Shirts from "./components/Shirts";
import Jeans from "./components/Jeans";
import Accessories from "./components/Accessories";
import CasualShoes from "./components/CasualShoes";
import Footwear from "./components/Footwear";
import Western from "./components/Western";
import Handbags from "./components/Handbags";
import Ethnics from "./components/Ethnics";
import Shorts from "./components/Shorts";
import Tshirt from "./components/Tshirt";
import FlipFlops from "./components/FlipFlops";
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
    <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>} />

        <Route path="/men" element={<Men/>}>
          <Route path="shirts" element={<Shirts/>} />
          <Route path="jeans" element={<Jeans/>} />
          <Route path="accessories" element={<Accessories/>} />
          <Route path="casual_shoes" element={<CasualShoes/>} />
        </Route>

        <Route path="/women" element={<Women/>}>
          <Route path="footwear" element={<Footwear/>} />
          <Route path="western_wear" element={<Western/>} />
          <Route path="handbags" element={<Handbags/>} />
        </Route>

        <Route path="/kids" element={<Kids/>}>
          <Route path="ethnics" element={<Ethnics/>} />
          <Route path="shorts" element={<Shorts/>} />
          <Route path="tshirts" element={<Tshirt/>} />
          <Route path="flip_flops" element={<FlipFlops/>} />
        </Route>

        <Route path="/beauty" element={<Beauty/>} />

        <Route path="/living" element={<Living/>} />
      </Routes>
    </>
  );
}

export default App;
