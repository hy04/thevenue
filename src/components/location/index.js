import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3189.8317164209902!2d174.81018001570422!3d-36.91828777992447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d48d7ba16e155%3A0xca798e1dad4e4418!2sMt+Smart+Stadium!5e0!3m2!1sen!2snz!4v1545892232524" 
                width="100%" 
                height="500px" 
                frameBorder="0"        
                allowFullScreen
            ></iframe>
            <div className="location_tag">
                <div>Location</div>
            </div>
        </div>
    );
};

export default Location;