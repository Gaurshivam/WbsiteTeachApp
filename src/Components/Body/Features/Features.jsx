import React from 'react';
import './Features.css'
import FeaturesOne from './FeaturesOne';
import FeaturesTwo from './FeaturesTwo';
import FeaturesThree from './FeaturesThree';
import FeaturesFour from './FeaturesFour';


const Features = () => {
    const Image1 = 'https://th.bing.com/th/id/OIP.c9yFIJNRVkwX586hrmvVRAHaFj?w=223&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7'
    const Image2 = 'https://th.bing.com/th/id/OIP.VcFBTIl6E0vz4anwJG33HAHaGd?w=221&h=192&c=7&r=0&o=5&dpr=1.4&pid=1.7'
    const Image3 = 'https://th.bing.com/th/id/R.50244e1e3e14c4148bc534cae2fb5e3a?rik=tYICaLNGVnGfcw&riu=http%3a%2f%2fsupport.crowdsurfwork.com%2fwp-content%2fuploads%2f2013%2f12%2fonline_anywhere_anytime.png&ehk=VDPHplB0A86%2bs%2f%2faFhOEFpePn5wqqsTq%2b37oBp0viCA%3d&risl=&pid=ImgRaw&r=0'
    const Image4 = 'https://pakistannetworks.com/wp-content/uploads/2017/01/Untitled-1.jpg'
  return (
    <div className='FeaturesMain'>
      <div className=''>
      <h2 id='FeaturesHeading'>Explore. Enroll. Have Fun. Repeat - <br/>
          here hobby meets happiness</h2>
      </div>
      <div id='FeaturesType'>
        <FeaturesOne    Image={Image1}/>
        <FeaturesTwo    Image={Image2}/>
        <FeaturesThree  Image={Image3} />
        <FeaturesFour   Image={Image4}/>
      </div>

    </div>
  );
}

export default Features;
