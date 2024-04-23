import React, { useState } from 'react';
import Navbar from './navbar';
import './Blogs.css';
import Collapse from '../assets/collapse.png';
import  Expand from '../assets/expand.png'

const Blogs = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const content = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad unde quasi illum quod odio.\n Eveniet suscipit accusamus velit impedit, dolorem unde itaque officiis at quo quasi et sed vero doloremque.\n Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur obcaecati similique odio illo, rem delectus quaerat facere quasi quia distinctio maxime ab quisquam et iure libero amet est sit voluptate!\n Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nisi vero ipsum odio enim hic, minima inventore impedit cumque placeat saepe quibusdam fugit dolorum possimus quas debitis accusantium harum nostrum!";

  const truncatedContent = content.split('\n').slice(0, 3).join('\n');
  const remainingContent = content.split('\n').slice(3).join('\n');

  return (
    <div>
      <Navbar />
      <h1 className='blogsHead'>Blogs</h1>
      <div className='card-container'>
        <div className='card-header'>
          <h3>Blog Title</h3>
          <img src={expanded?Expand:Collapse} className='collapseImg' onClick={toggleExpanded}/>
        </div>
        <h6>Author • Category</h6>
        <div>
          <p>{expanded ? content : truncatedContent}</p>
          {!expanded && remainingContent && (
            <button className='read-more-button' onClick={toggleExpanded}>
              ...
            </button>
          )}
        </div>
      </div>
      <div className='card-container'>
        <div className='card-header'>
          <h3>Blog Title</h3>
          <img src={expanded?Expand:Collapse} className='collapseImg' onClick={toggleExpanded}/>
        </div>
        <h6>Author • Category</h6>
        <div>
          <p>{expanded ? content : truncatedContent}</p>
          {!expanded && remainingContent && (
            <button className='read-more-button' onClick={toggleExpanded}>
              ...
            </button>
          )}
        </div>
      </div>
      <div className='card-container'>
        <div className='card-header'>
          <h3>Blog Title</h3>
          <img src={expanded?Expand:Collapse} className='collapseImg' onClick={toggleExpanded}/>
        </div>
        <h6>Author • Category</h6>
        <div>
          <p>{expanded ? content : truncatedContent}</p>
          {!expanded && remainingContent && (
            <button className='read-more-button' onClick={toggleExpanded}>
              ...
            </button>
          )}
        </div>
      </div>
      <div className='card-container'>
        <div className='card-header'>
          <h3>Blog Title</h3>
          <img src={expanded?Expand:Collapse} className='collapseImg' onClick={toggleExpanded}/>
        </div>
        <h6>Author • Category</h6>
        <div>
          <p>{expanded ? content : truncatedContent}</p>
          {!expanded && remainingContent && (
            <button className='read-more-button' onClick={toggleExpanded}>
              ...
            </button>
          )}
        </div>
      </div>
      <div className='card-container'>
        <div className='card-header'>
          <h3>Blog Title</h3>
          <img src={expanded?Expand:Collapse} className='collapseImg' onClick={toggleExpanded}/>
        </div>
        <h6>Author • Category</h6>
        <div>
          <p>{expanded ? content : truncatedContent}</p>
          {!expanded && remainingContent && (
            <button className='read-more-button' onClick={toggleExpanded}>
              ...
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
