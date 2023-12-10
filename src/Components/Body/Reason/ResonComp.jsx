import React from 'react';

const ResonComp = (props) => {
  return (
    <div className='ReasonComp'>
      <img src={props.Image} alt=''/>
      <h6>{props.heading}</h6>
    </div>
  );
}

export default ResonComp;
