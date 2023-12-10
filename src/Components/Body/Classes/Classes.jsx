import React from 'react';
import './Classes.css'
import ClassCompOne from './ClassCompOne';
import ClassCompTwo from './ClassCompTwo';
import ClassCompThree from './ClassCompThree';
import ClassCompFour from './ClassCompFour';

const Classes = () => {
    const Image4 = "https://static1.bigstockphoto.com/4/4/1/large1500/144858269.jpg";
    const Heading = "Class name - Lorem ipsum sit sirry dsds dddelit varsit lectusi sit amet"
  return (
    <div className='MainClasses'>
      <div className='ClassNav'>
          <div className='ClassNavLeft'>
          <h2>Discover classes</h2>
          <a href='/'>Show All</a>
          </div>
          <div className='ClassNavRight'>
            <h6>Show prices in :</h6>
            <button className='pricebtnOne'>NOK</button>
            <button className='pricebtnTwo'>INR</button>
          </div>
      </div>
      {/* <p className='classsub'>Choose from a variety of classes from around the world.</p> */}
      <div className='ClassesComp'>
        <ClassCompOne  Image={Image4} heading ={Heading}/>
        <ClassCompTwo Image={Image4} heading ={Heading}/>
        <ClassCompThree Image={Image4} heading ={Heading}/>
        <ClassCompFour Image={Image4} heading ={Heading}/>
      </div>
    </div>
  );
}

export default Classes;
