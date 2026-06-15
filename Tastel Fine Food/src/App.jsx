import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routing from "./routes/Routing";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Routing />
      <Footer />
   </>
  );
}

export default App;