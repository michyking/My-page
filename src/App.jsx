import { Routes, Route, useRoutes } from "react-router-dom";
import GlobalLayout from "./Components/GlobalLayout";
import Nav from "./Components/Nav/Nav";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";

function App() {

  return (
      <Routes>
        <Route path="/" element={<GlobalLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="contact" element={<Contact />}></Route>
        </Route>
      </Routes>
  );
}

export default App;
