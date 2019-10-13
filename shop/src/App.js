import React from 'react';
import logo from './logo.svg';
import Home from "./Components/Home/Home"
import './App.css';
import routes from "./routes"
import Navbar1 from "./Components/Nav/Navbar";


const App = () => {
  return (
    <div >
      <Navbar1></Navbar1>
      {routes}
      {console.log("kasdiap")}
    </div>
  );
}

export default App;
