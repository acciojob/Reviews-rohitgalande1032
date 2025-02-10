import React, { useState } from "react";

const Review = ({ reviews, setReviews }) => {
    const [index, setIndex] = useState(0);
    const review = reviews[index];

    const nextIndex = () => {
        setIndex((index+1)%reviews.length)
    }

    const prevIndex = () => {
        setIndex((index - 1 + reviews.length) % reviews.length)
    }

    const randomIndex = () => {
        setIndex(Math.floor(Math.random() * reviews.length))
    }
  return (
    <main>
      <div className="review">
        <img className="person-img" src={review.image} alt={review.name} />
        <p className="author" id={`author-${review.id}.author`}>
          Name: {review.name}
        </p>
        <p className="job">Job Role: {review.job}</p>
        <p className="info">{review.text}</p>
        <div className="buttons">
          <button onClick={prevIndex} className="prev-btn">Previous</button>
          <button onClick={nextIndex} className="next-btn">Next</button>
          <button onClick={randomIndex} className="random-btn">surprise me</button>
        </div>
      </div>
    </main>
  );
};

export default Review;
