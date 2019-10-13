import React from 'react';
import "./feature.css"
import show from "./body-show.jpeg"
import vr1 from "./vr1.jpg"
import ps4 from "./ps4.png"

const Feature = (props) => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className=" text-center col-lg-12 col-xl-12 col-md-12 col-sm-auto col-xs-auto">
                        <h4 className="fonts">INCREDIBLE GAMES. ENDLESS ENTERTAINMENT.</h4>
                        <h2>Introducing the PlayStation 4.</h2>
                        <h4>1TB hard drive</h4>
                        <h4>All the greatest games, TV, music and more.</h4>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-xl-12 col-md-12 col-sm-auto col-xs-auto">
                            <img className="img-fluid" src={show}></img>
                        </div>
                    </div>
                </div>
                <div className="mt-5"></div>
                <div className="row">
                    <div className=" text-center col-lg-12 col-xl-12 col-md-12 col-sm-auto col-xs-auto">
                        <h4 className="fonts">INTRODUCING</h4>
                        <h2> PlayStation VR </h2>
                        <span className="mt-1"></span>
                        <p>Redefine your expectations of immersion in gaming with moments
             so intense your intuition takes over.</p>
                        <span className="mt-1 mb-2"></span>
                    </div>
                </div>

                <div className="row mb-2">
                    <div className="col-lg-6 col-xl-6 col-md-6 col-sm-auto col-xs-auto">
                        <span className="text-center">
                            <p className="fontsize">
                                Discover a new world of unexpected gaming experiences with PlayStation®VR.
                                Step into incredible virtual
                                worlds and overcome new challenges
                                in extraordinary ways.
                    </p>
                        </span>

                    </div>
                    <div className="col-lg-6 col-xl-6 col-md-6 col-sm-auto col-xs-auto">
                        <img className="img-fluid" src={vr1}>
                        </img>
                    </div>
                </div>
                <div className="row mt-5 mb-2">
                    <div className="col-lg-6 col-xl-6 col-md-6 col-sm-auto col-xs-auto">
                        <img className="img-fluid" src={ps4}>
                        </img>
                    </div>

                    <div className="col-lg-6 col-xl-6 col-md-6 col-sm-auto col-xs-auto">
                        <span className="text-center">
                            <h4 className="fonts">PS4™ PRO</h4>
                        <h2 className="mt-1"> 4K-TV Gaming and More </h2>
                        <span className="mt-1"></span>
                        <h4 className="font1">
                            PS4™ Pro gets you closer to your game.
                             Heighten your experiences.
                              Enrich your adventures. Let the super-charged PS4™ Pro lead the way.*
                        </h4>
                        </span>
                        
                        <span className="mt-1 mb-2"></span>

                    </div>


                </div>
            </div>
        </div>
    );
};

export default Feature;