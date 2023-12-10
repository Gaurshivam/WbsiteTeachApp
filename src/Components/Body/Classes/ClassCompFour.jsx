import React from 'react';
import './Classes.css'

const ClassCompFour = (props) => {
    return (
        <div className='ClassCompStyle'>
            <img src={props.Image} alt='classImageOne' className='ClassImage' />
            <h5 className='ClassH5'>LANGUAGE</h5>
            <h6>{props.heading}</h6>
            <div className='ClassBy'>
                <p>by John Doe</p>
                <span className="fa fa-star checked text-black" style={{ display: "flex", marginLeft: "1.2rem" }}>4.7</span>
            </div>
            <p className='ClassPara'>Lorem ipsum dolor sit amet, varius consectetur varius entat consectet adipiscing elit. Ullamcorper...</p>
            <div className='ClassFooter'>
                <p>₹ 1,499 <del>12,000</del></p>
                <a href='/#' style={{ textDecoration: "none", color: "white" }}>Enroll Now</a>
            </div>
        </div>
    );
}

export default ClassCompFour;
