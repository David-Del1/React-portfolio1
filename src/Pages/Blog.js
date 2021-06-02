import React from 'react';
import allBlogs from '../components/allBlogs';
import Title from '../components/Title';

function Blog() {
  return (
    <>
      <Title title={'Blog'} span={'Blog'} /> 
      <div className="Blog"> 
        
        {
          allBlogs.map((blog) => {
            return <div className="blog-container" key={blog.id}>
              <div className="blog-content">
                <img src={blog.image} alt="" />
                <a href={blog.link} className="blog-link">
                  {blog.title}
                </a>
                <div className="date">
                  <p>{blog.date}</p>
                </div>
              </div>
            </div>;
          })
        }
      </div>
    </>
  );
}

export default Blog;
