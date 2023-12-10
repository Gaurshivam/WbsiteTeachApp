import React from 'react';

const TeachersComp = (props) => {
  return (
    <div className='TeachersComp'>
      <img src={props.TeImage} alt='Teach' className='TeachersImage' />
      <div className='TeachBooton'>
      <h6>{props.TeName}</h6>
      <p>{props.TeDegn}</p>
      </div>
    </div>
  );
}

export default TeachersComp;
