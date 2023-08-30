import React from 'react';
import error from '../../../assets/error.json'
import { Link } from 'react-router-dom';
import Lottie from 'react-lottie';

const Error = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: error,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };
    return (
        <div className='w-3/5 mx-auto text-center'>
            <Lottie options={defaultOptions}></Lottie>
            <Link to={'/'}><button className='button-primary text-center'>Back to Home</button></Link>
        </div>
    );
};

export default Error;