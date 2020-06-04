import React from 'react';
import image from "./assets/Capture.JPG"
const header = () => {
    return (

        <div className="container-fluid bg-black pt-2 pb-2 ">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <a href=""><img src={image} class="logo" /></a>
                    </div>

                    <div className="col-md-8 d-none d-lg-block d-md-block text-right ">
                        <ul className="nav site-nav">
                            <li><a href="">
                                PORTFOLIO COMPANIES</a></li>
                            <li><a href="">CAREERS</a></li>
                            <li><a href="">ABOUT US</a></li>
                            <li><a href="">MORE</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default header;