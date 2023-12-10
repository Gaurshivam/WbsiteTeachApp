import React from 'react';
import './Explore.css'

const Explore = () => {
    return (
        <div className='ExploreContainer'>
            <div className='ExploreImage'>
                <img src='https://floridapolitics.com/wp-content/uploads/2016/04/great-teachers-Large.jpg' alt='Family' />
            </div>
            <div className='ExploreContent'>
                <p>We only have the best and trusted teachers from the globe. Join us if you have the skill and passion to share it.</p>
                    <ul style={{listStyle:"square",textAlign:"left"}}>
                    <li>Make your own schedule</li>
                    <li>Teach students on an international platform</li>
                    <li>Become part of an international community of passionate educators</li>
                    </ul>
                <div className='ExploreBtn'>
                    <button type="button" >START TEACHING</button>
                </div>
            </div>
        </div>
    );
}

export default Explore;
