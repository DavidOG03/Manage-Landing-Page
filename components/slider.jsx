import React, { useState, useEffect } from "react";


const TestimonialSlider = ({ testimonials }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonials.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? testimonials.length - 1 : prevSlide - 1
    );
  };

  // Automatically advance to the next slide every 3.5 seconds (3500 ms)
  useEffect(() => {
    const autoplayInterval = setInterval(nextSlide, 3500);

    return () => {
      clearInterval(autoplayInterval);
    };
  }, []);

  return (
    <div className="testimonials-slide">
      <button className="prevbtn" onClick={prevSlide}></button>
      <div className="testimonials--card">
        <div className="testimonials--card-image">
          <img src={testimonials[currentSlide].img} alt="testifier-profile-img"></img>
        </div>
        <div className="testimonials--card-text">
          <h5>{testimonials[currentSlide].name}</h5>
          <p>{testimonials[currentSlide].text}</p>
        </div>
      </div>
      <button className="nextbtn" onClick={nextSlide}></button>
      <div className="testimonials-slider-buttons">
        {testimonials.map((_, idx) => (
          <div
            key={idx}
            className={`slider-btn${currentSlide === idx ? " active" : ""}`}
            onClick={() => {
              setCurrentSlide(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
