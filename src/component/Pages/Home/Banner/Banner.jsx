import React from 'react';
import img from '../../../../../public/images/happy-cute-brunette-caucasian-grad-girl-is-smiling-blurred-class-mates-are.jpg'

const Banner = () => {
    return (
        <div>
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <h1 className='mx-8 text-6xl font-bold text-white'>Life the journey get the bright career</h1>
    </div>
  </div> 
        </div>
    );
};

export default Banner;