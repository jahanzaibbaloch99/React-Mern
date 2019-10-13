import React from 'react';
import { Jumbotron } from 'reactstrap';
import "./Jumbotron.css";
import play from "./ps4.png"
import tagline from "./play.png"
const Jumbo = (props) => {
  return (
    <div>
      <Jumbotron className="bg">
        <div className="container">
          <div className="row">
              <div className="col-lg-6 col-xl-6 col-md-6 col-sm-auto col-xs-auto">
                <img className="img-fluid" src={play}></img>
              </div>
              <div className="col-lg-6 col-xl-6 col-md-6 col-sm-auto col-xs-auto">
              <img className="img-fluid tagline" src={tagline}></img>
              </div>
              
          </div>
        </div>
      </Jumbotron>
    </div>
  );
};

export default Jumbo;