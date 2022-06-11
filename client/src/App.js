import Home from "./Components/Home";
import GlobalStyles from "./Styles/GlobalStyles";
import { Routes, Route } from "react-router-dom";
import Events from "./Components/Events";
import News from "./Components/News";

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </>
  );
}

export default App;
