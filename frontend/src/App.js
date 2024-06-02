import "./App.css";
import Home from "./Home";
// import AddContentModal from "./components/AddContentModal";
import { Routes, Route } from "react-router-dom";
import Teach from "./components/Teach";
import Sidebar from "./components/Sidebar";
const Routing = () => {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Teach" element={<Teach />} />
      </Routes>
    </>
  );
};
function App() {
  return <Routing />;
}

export default App;
