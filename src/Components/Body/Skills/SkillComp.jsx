import React from 'react';
import './SkillComp.css'

const SkillComp = () => {
  return (
    <div className='SkillContainer'>
       <div className='StartSkill'>
       <h2>Start learning new skills today and pursue your passion </h2>
       <p>Join the community of global learners and start exploring today.</p>
       <input type='text' id='InputSkill' placeholder='Enter your email' /><button id='SkillBtn'>Get Started</button>
       </div>
    </div>
  );
}

export default SkillComp;
