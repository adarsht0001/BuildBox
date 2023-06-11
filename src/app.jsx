import React from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Team from "./components/Team/Team";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Portfolio from "./components/portfolio/Portfolio";
import Test from "./components/Test";

const App = () => {
  return (
    <>
      {/* <Test/> */}
      <Header />
      <Nav />
      <About />
      <Portfolio />
      <Team />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
