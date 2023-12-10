import React from 'react';

const FeaturesOne = (props) => {
    return (
        <div id='FeaturesOne' className='Features'>
            <img src={props.Image} height={100} width={100} alt='ImageFeatursOne' />
            <h5>Learn something new</h5>
            <p>Explore your passion and go beyond the physical and mental boundaries of time, age, gender or geography.</p>
        </div>
    );
}

export default FeaturesOne;