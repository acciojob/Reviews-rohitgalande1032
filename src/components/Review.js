import React from 'react'

const Review = ({reviews, setReviews}) => {
  return (
    <main>
            {reviews.map((review, index) => (
                <div className='review'>
                    <img className='person-img' src={review.image} alt={review.name} />
                    <p className='author' id={`author-${review.id}`}>Name: {review.name}</p>
                    <p className='job'>Job Role: {review.job}</p>
                    <p className='info'>{review.text}</p>
                    <div className='buttons'>
                        <button className='prev-btn'>Previous</button>
                        <button className='next-btn'>Next</button>
                        <button className='random-btn'>surprise me</button>
                    </div>
                </div>
            ))}
    </main>
  )
}

export default Review