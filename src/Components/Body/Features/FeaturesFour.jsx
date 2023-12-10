import React from 'react';

const FeaturesFour = (props) => {
    return (
        <div id='FeaturesFour' className='Features'>
            <img src={props.Image} height={100} width={100} alt='ImagFeaturesFour' />
            <h5>Pay as you go</h5>
            <p>No enrollment fee for our classes. You only pay for the classes that you take. Your payment is Safe and secure with us.</p>
        </div>
    );
}

export default FeaturesFour;
