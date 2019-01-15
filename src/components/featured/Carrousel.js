import React from 'react';
import Slider from "react-slick";

import ed1 from '../../resources/images/ed1.jpg';
import ed2 from '../../resources/images/ed2.jpg';
import ed3 from '../../resources/images/ed3.jpg';


const Carrousel = () => {
    const settings={
        dots: false,
        infinite:true,
        autoplay:true,
        speed: 300
    }
    return (
        <div 
            className="carrousel_wrapper" 
            style={{
                
                height:`${window.innerHeight}px`,//calculate the actual size of the window.
                overflow:'hidden'
            }}
        >
            <Slider {...settings}>
                <div>
                    <div 
                        className="carrousel_image"
                        style={{
                            background:`url(${ed1})`,
                            height:`${window.innerHeight}px`
                        }}
                    >

                    </div>
                </div>
                <div>
                    <div 
                        className="carrousel_image"
                        style={{
                            background:`url(${ed2})`,
                            height:`${window.innerHeight}px`
                        }}
                    >

                    </div>
                </div>
                <div>
                    <div 
                        className="carrousel_image"
                        style={{
                            background:`url(${ed3})`,
                            height:`${window.innerHeight}px`
                        }}
                    >

                    </div>
                </div>
            </Slider>
            
        </div>
    );
};

export default Carrousel;