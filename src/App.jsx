import "./App.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header data={data} />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
