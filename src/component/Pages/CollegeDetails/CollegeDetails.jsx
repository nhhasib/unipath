import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CollegeDetails = () => {
    const {image,name,location,admission_process,events_details,research_works,sports,rank,programs,website} = useLoaderData();
  
    return (
        <div className='mt-6'>
            <div className=' w-1/2 mx-auto'>
            <img src={image} alt="" />
            </div>
            <div className='my-4 text-center'>
            <h1 className='font-bold text-4xl'>{name}</h1>
                <p>{location}</p>
                <p className='underline'>{website}</p>
                <p className='font-bold'>Ranking: {rank}th</p>
            </div>
            <div className='text-center'>
                <h3 className='font-bold '>
                    Admission Process: <br />
                </h3>
                <p>
                {admission_process}
                     </p>

            </div>
            <div className='my-4 text-center'>
                <h3 className='font-bold'>
                    Events Details: <br />
                </h3>
                {
                    events_details.map(e => <li>{e}</li>)
                }

            </div>
            <div className='grid grid-cols-3 w-4/5 mx-auto text-center'>
            <div className='my-4'>
                <h3 className='font-bold'>
                    Research Works: <br />
                </h3>
                {
                    research_works.map(e => <li>{e}</li>)
                }

            </div>
            <div className='my-4'>
                <h3 className='font-bold'>
                    Sports: <br />
                </h3>
                {
                    sports.map(e => <li>{e}</li>)
                }

            </div>
            <div className='my-4'>
                <h3 className='font-bold'>
                    Programs: <br />
                </h3>
                {
                    programs.map(e => <li>{e}</li>)
                }

            </div>
            </div>
        </div>
    );
};

export default CollegeDetails;