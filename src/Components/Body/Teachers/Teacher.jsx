import React from 'react';
import './Teacher.css'
import TeachersComp from './TeachersComp';

const Teacher = () => {

  const TeImage1 = "https://th.bing.com/th/id/OIP.V3KJJLjajYw5V8T3t1Ll7AHaF4?rs=1&pid=ImgDetMain";
  const TeImage2 = "https://cdn.fstoppers.com/styles/full/s3/media/2017/09/10/1_use_psychology_to_take_better_photographs.jpeg";
  const TeImage3 = "https://i1.rgstatic.net/ii/profile.image/11431281094019832-1667350379367_Q512/Fernando-Antonio-Rebolledo-Uscanga.jpg";
  const TeImage4 = "https://th.bing.com/th/id/OIP.R26B53kmdRW9tgjLUXczfwHaG5?w=1361&h=1269&rs=1&pid=ImgDetMain";

  const TeName1 = "Surbhi Gupta";
  const TeName2 = "Badal Kumar";
  const TeName3 = "Mohit Gupta";
  const TeName4 = "Karan Sharma";

  const TeDegn1 = "Yoga";
  const TeDegn2 = "Academic";
  const TeDegn3 = "Music";
  const TeDegn4 = "Cooking";


  return (
    <div className='TeacherContainer'>
      <div className='TeachersHeading'>
        <h2>Meet our teachers</h2>
      </div>
      <div className='TeachersData'>
        <TeachersComp TeImage={TeImage1} TeName={TeName1} TeDegn={TeDegn1} />
        <TeachersComp TeImage={TeImage2} TeName={TeName2} TeDegn={TeDegn2} />
        <TeachersComp TeImage={TeImage3} TeName={TeName3} TeDegn={TeDegn3} />
        <TeachersComp TeImage={TeImage4} TeName={TeName4} TeDegn={TeDegn4} />
      </div>
      <div className='TeachBtn'>
      <button type="button" className="btn btn-success">Explore More</button>
      </div>
    </div>
  );
}

export default Teacher;
