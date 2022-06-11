import Home from "./Components/Home";
import GlobalStyles from "./Styles/GlobalStyles";
import { Routes, Route } from "react-router-dom";
import Events from "./Components/Events";
import Explore from "./Components/Explore";
import Accomodations from "./Components/Accomodations";

function App() {
  return (
    <>
    <GlobalStyles/>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/explore" element={<Explore/>} />
    <Route path="/accomodations" element={<Accomodations/>} />
    <Route path="/events" element={<Events/>} />
    </Routes>
    </>
  );
}

export default App;
