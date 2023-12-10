import React from 'react';

const BlogComp = () => {
  return (
    <div className='BlogCard'>
      <img src='https://mloywqcjw0kt.i.optimole.com/w:1915/h:1166/q:auto/http://wpmagg.com/wp-content/uploads/2017/04/personal-blogs-e1492304509789.jpg'
       alt='blog' className='blogCardImage' />
      <h6 style={{marginTop:".3rem",textAlign:"left",padding:".6rem",color:"darkblue"}}>Blog name - Lorem ipsum dolor sit amet, et varius et consectetur</h6>
      <p style={{marginTop:"-20px",textAlign:"left",padding:".6rem",color:"blue"}}>Lorem ipsum dolor sit amet, consectetur vinit varius adipiscing elit. Ullamcorper lectus turpis amet varius volutpat sed...</p>
      <hr/>
      <div className="card-footer">
      <small className="text-primary text-bold">Publisher name</small>
    </div>
    </div>
  );
}

export default BlogComp;
