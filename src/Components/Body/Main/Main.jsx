import React from 'react';
import './Main.css'

const Main = () => {
  return (
    <div className='MainSection' >
      <div className='MainContent'>
             <h3>Hobbies 	&#x1F493;  Happiness  	&#x1F493;  Home</h3>
             <p >A Nordic startup which brings incredibly<br/> interesting hobbies from around the world to<br/> people of all ages.</p>
             <div className='MainLeftCont'>
                <input id='InputMain' type='text' placeholder='Enter your email' />
                <button type="button" id='MainBtn'>START EXPLORING</button>
             </div>
      </div>
      <div className='MainImage'>
        <img id='ImageFamily' src='https://plus.unsplash.com/premium_photo-1661281211518-7bc99840fe64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZhbWlseXxlbnwwfHwwfHx8MA%3D%3D' alt='Family'  />
      </div>
    </div>
  );
}

export default Main;
