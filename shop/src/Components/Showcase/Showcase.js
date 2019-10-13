import React from 'react';
import "./Showcase.css";
import Img01 from "./01.jpeg";
import Img02 from "./02.jpeg";
import Img03 from "./03.jpeg";
import Img04 from "./04.jpeg";
import Img05 from "./05.jpeg";
import Img06 from "./06.jpeg";
import Img07 from "./07.jpeg";
import Img08 from "./08.jpeg";
import FeatureImg from "./00.jpeg";
import FeatureImg01 from './0001.jpeg'
const Showcase = (props) => {
    return (
        <div>
            <div className="container-fluid">
            <div className="row"> 
                    <div className="col">
                        <img className="img-fluid" src={FeatureImg}>
                        </img>
                    </div>
                </div>
                <div className="row"> 
                    <div className="col">
                        <img className="img-fluid" src={FeatureImg01}>
                        </img>
                    </div>
                </div>
            </div>
             
            <div className="container">
            <div className="mt-5"></div>
                <div className="row">
                    <div className=" text-center col-lg-12 col-xl-12 col-md-12 col-sm-auto col-xs-auto">
                        <h4 className="fonts">Great Games</h4>
                        <h2> Coming Soon </h2>
                        <span className="mt-1"></span>
                        <p>Redefine your expectations of immersion in gaming with moments
             so intense your intuition takes over.</p>
                        <span className="mt-1 mb-2"></span>
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col-lg-3 col-xl-3 col-md-3 col-sm-auto col-xs-auto mb-1">
                        <img className="img-fluid" src={Img01}>
                        </img>
                    </div>
                    <div className="col-lg-3 col-xl-3 col-md-3 col-sm-auto col-xs-auto mb-1">
                        <img className="img-fluid" src={Img02}>
                        </img>
                    </div>
                    <div className="col-lg-3 col-xl-3 col-md-3 col-sm-auto col-xs-auto mb-1">
                        <img className="img-fluid" src={Img03}>
                        </img>
                    </div>
                    <div className="col-lg-3 col-xl-3 col-md-3 col-sm-auto col-xs-auto mb-1">
                        <img className="img-fluid" src={Img04}>
                        </img>
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col-lg-3 col-xl-3 col-md-3 col-sm-auto col-xs-auto mb-1">
                        <img className="img-fluid" src={Img05}>
                        </img>
                    </div>
                    <div className="col-lg-3 col-xl-3 col-md-3 col-sm-auto col-xs-auto mb-1">
                        <img className="img-fluid" src={Img06}>
                        </img>
                    </div>
                    <div className="col-lg-3 col-xl-3 col-md-3 col-sm-auto col-xs-auto mb-1">
                        <img className="img-fluid" src={Img07}>
                        </img>
                    </div>
                    <div className="col-lg-3 col-xl-3 col-md-3 col-sm-auto col-xs-auto mb-1">
                        <img className="img-fluid" src={Img08}>
                        </img>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default Showcase;