import React from 'react';

const FeaturesTwo = (props) => {
    return (
        <div id='FeaturesTwo' className='Features'>
            <img src={props.Image} height={100} width={100} alt='ImageFeaturesTwo' />
            <h5>Skilled & Passionate Teachers</h5>
            <p>We offers Interactive classes by experts who are qualified and trusted.</p>
        </div>
    );
}

export default FeaturesTwo;
