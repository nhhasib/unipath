import React from 'react';
import img from '../../../../../public/images/happy-cute-brunette-caucasian-grad-girl-is-smiling-blurred-class-mates-are.jpg'

const Banner = () => {
    return (
        <div>
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <div>
                    <h1 className='mx-8 text-6xl font-bold text-white'>Life the journey get the bright career</h1>
                        <div>
                            <input className='bg-white ml-8 mt-6 rounded-l-3xl px-6 py-3 w-4/5' placeholder='Search your colleges' type="search" name="" id="" />
                            <button className='bg-primary py-3 px-5 text-white font-bold rounded-r-3xl'>Search</button>
                   </div>
                    </div>
    </div>
  </div> 
        </div>
    );
};

export default Banner;