import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { useState } from "react";

function App() {
  const [list, setList] = useState([]);

  function searchBooks(search) {
    setList((prevBooks) => [...prevBooks, search]);
  }
  return (
    <>
      <Header />
      <Outlet data={{ searchBooks }} />
      <Footer />
    </>
  );
}

export default App;
