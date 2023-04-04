import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

function Home(){
  return (
    <>
      <Header />
      <Sidebar />
      <div>HELLO WORLD!
      <br /><br />
      THIS WILL BE THE HOMEPAGE MAIN CONTENT</div>
    </>
  );
}

export default Home;