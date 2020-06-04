import React from 'react';
import "./App.css"
import img1 from "./assets/MarianaLuigiNewsha-800x0-c-default.jpg"
import img2 from "./assets/seaspire_team-800x0-c-default.jpg"
import img3 from "./assets/20191107-the-engine-0027-800x0-c-default.jpg"
import img4 from "./assets/Screen-Shot-2019-08-19-at-1.23.08-PM-1-800x0-c-default.png"
import img5 from "./assets/RISE_cropped-800x0-c-default (1).jpg"
import img6 from "./assets/image1.jpg"
import img7 from "./assets/Lucy-lo-res-vertical-1-800x0-c-default.jpg"
const contentSection = () => {
    return (
        <div style={{ marginTop: "1000px" }}>
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mt-5 text-left ">
                            <div>
                                <h2 className="portfolio">
                                    Portfolio Companies
							</h2>
                                <p id="text">
                                    Meet the founders. They are audacious. They are bold. They care truly and deeply about impact. These founders—and the companies they represent—embody the values, character, and ambition that is fundamental to creating a community and positive change.
							</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-12">
                                    <img src={img1} className="w-100" />
                                </div>
                                <div className="col-md-12">
                                    <img src={img2} className="w-100 mt-3" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-12">
                                    <img src={img3} className="w-100" />
                                </div>
                                <div className="col-md-12 mt-3">
                                    <img src={img4} className="w-100" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">

                            <div className="row">
                                <div className="col-md-12">
                                    <img src={img5} className="w-100 mt-3" />
                                </div>
                                <div className="col-md-12">
                                    <img src={img6} className="w-100 mt-3" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">

                            <div className="row">
                                <div className="col-md-12">
                                    <img src={img7} className="w-100 " />
                                </div>
                                <div className="col-md-12 mt-3">
                                    <div className="founder">
                                        <span className="founder-text">
                                            see more founder
									</span>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid bg-dark mt-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="header-title text-center mt-3">
                                Sign up for future updates from The Engine
						</h2>
                        </div>
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-12">
                                    <h2 className="sign-up text-center mt-3">
                                        Sign up with your email
							<hr style={{ width: "50%", textAlign: "left", marginLeft: "0", color: "white" }} />
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container-fluid bg-black ">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-12 footer mt-3 ">
                            <h1 className="footer-heading">
                                the engine
						</h1>
                            <h3>
                                a home for tough tech founders
						</h3>
                            <p>
                                501 Massachusetts Ave. Cambridge,&nbsp;MA&nbsp;02139
						</p>
                            <a href="" className="mail">
                                <p>
                                    zyx.enigne@olleh
						</p>
                            </a>
                            <p>
                                ©Copyright 2020. All Rights Reserved
						</p>
                        </div>
                        <div className="col-md-6 col-sm-12  col-12 text-right social-info mt-3">
                            <a href="">
                                about us
						</a>

                            <a href="">
                                contact us
						</a>
                            <div>
                                <img src="social icon.JPG" className="social" />
                            </div>


                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default contentSection;