import React from 'react';
import './Blog.css'
import BlogComp from './BlogComp';

const Blog = () => {
    return (
        <div className='BlogContainer'>
            <div className='BlogHeading'>
                <h2>Our blogs</h2>
                <a href='/#' style={{ fontSize: "14px", fontWeight: "bold", marginTop: ".3rem", color: "brown" }}>SHOW ALL</a>
            </div>
            <div className='BlogComp'>
                <BlogComp />
                <BlogComp />
                <BlogComp />
            </div>
        </div>
    );
}

export default Blog;
