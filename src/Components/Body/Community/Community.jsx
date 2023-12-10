import React from 'react';
import './Community.css'
import CommunityCompOne from './CommunityCompOne';
import CommunityCompTwo from './CommunityCompTwo';
import CommunityCompThree from './CommunityCompThree';

const Community = () => {

    const FeImage1 = "https://th.bing.com/th/id/OIP.EhdkLdqnE7WMM6S39GU-5gHaFj?rs=1&pid=ImgDetMain";
    const FeImage2 = "https://th.bing.com/th/id/OIP.hztOnfDKiySonAeVhd-svgHaE8?w=296&h=198&c=7&r=0&o=5&dpr=1.4&pid=1.7"
    const FeImage3 = "https://www.careermatch.com/job-prep/wp-content/uploads/sites/2/2018/09/executive-assistant-768x512.jpg"

    const Name1 ="Kalpana";
    const Name2 ="Kirti";
    const Name3 ="Khushabu";

    const Content1 = "It is nice to be on an international platform where there are teachers from around the world."
    const Content2 = "The best thing about these classes is that they are live and interactive. They have classes which help us to learn specialties and famous activities from other countries as well."
    const Content3 = "As a student, I get to explore and learn about the different cultural specialties of another country with native teachers."

  return (
    <div className='CommunityContainer'>
      <div className='CommunityHeading'>
        <h2>Love from community</h2>
      </div>
      <div className='CommunityComp'>
         <CommunityCompOne Image ={FeImage1} Name={Name1}    Content={Content1}/>
         <CommunityCompTwo  Image ={FeImage2} Name={Name2}   Content={Content2} />
         <CommunityCompThree Image ={FeImage3} Name={Name3}  Content={Content3}/>
      </div>
    </div>
  );
}

export default Community;
