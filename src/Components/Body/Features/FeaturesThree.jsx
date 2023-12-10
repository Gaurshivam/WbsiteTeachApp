import React from 'react';

const FeaturesThree = (props) => {
    return (
        <div id='FeaturesThree' className='Features'>
            <img src={props.Image} height={100} width={100} alt='ImageFeaturesThree' />
            <h5>Take classes anytime, anywhere</h5>
            <p>Join sessions at your own convenience and pace, from the comforts of your home.</p>
        </div>
    );
}

export default FeaturesThree;