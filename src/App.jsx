import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { useState } from "react";

function App() {
  const [books, setBooks] = useState({});
  return (
    <>
      <Header data={books} />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
