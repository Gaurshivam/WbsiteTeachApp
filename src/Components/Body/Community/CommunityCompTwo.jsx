import React from 'react';
import './Community.css'

const CommunityCompTwo = (props) => {
    return (
        <div className='CompCommunity' >
            <div className="card CommunityCard" id='CompTwo'>
                <img src={props.Image} id='CommunityImage' alt="..." />
                 <h6>{props.Name}</h6>
                <div className="card-body">
                    <p className="card-text">{props.Content}</p>
                </div>
            </div>
        </div>
    );
}

export default CommunityCompTwo;
