import React from 'react';
import './Review.css';
import allreviews from './Allapi/reviewapi';

const Review = () => {
  return (
    <>
      <section className='common-page-section review-page'>
        <div className='common-page-head common-animation'>
          <h2>Game reviews</h2>
        </div>
      </section>

      <section className='review-container section'>
        <div className='review-section grid-container'>

          {
            allreviews.map((curEle,index) => {
              return (
                <div className='review-col' key={index}>
                  <img src={curEle.rimage} alt="reviewimage" />
                  <div className='review-info'>
                    <span className='review-date'>{curEle.rdate}</span>
                    <h2 className='review-heading'>{curEle.rheading}</h2>
                    <div className='author-info'>
                      <span className='author'>{curEle.rauthor}</span>
                      <span className='comments'>{curEle.rcomments}</span>
                    </div>
                    <div className='game-rating'>{curEle.rating}</div>
                    <p>{curEle.rdesc}</p>
                    <button className='review-btn btn'>Read More</button>
                  </div>
                </div>
              );
            })
          }

        </div>
      </section>
    </>
  )
}

export default Review;