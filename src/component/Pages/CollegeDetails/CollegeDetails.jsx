import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { GiClick } from "react-icons/gi";

const CollegeDetails = () => {
    const {image,name,location,admission_process,events_details,research_works,sports,rank,programs,website} = useLoaderData();
  
    return (
        <div className='my-6 flex gap-6 w-11/12 mx-auto items-center'>
            
            <div className='w-3/5 mx-auto'>
            <img src={image} alt="" />
            <div className='flex justify-between items-center'>
            <div className='my-4'>
            <h1 className='font-bold text-4xl'>{name}</h1>
                <p>{location}</p>
                <p className='font-bold'>World Ranking: {rank}th</p>
            </div>
            </div>
            {/* <img src={image} alt="" /> */}
            </div>
        <div>
        
            <div>
                <h3 className='font-bold '>
                    Admission Process: <br />
                </h3>
                <p>
                {admission_process}
                     </p>

            </div>
            <div className='my-4'>
                <h3 className='font-bold'>
                    Events Details: <br />
                </h3>
                {
                    events_details.map(e => <li>{e}</li>)
                }

            </div>
            <div className='grid grid-cols-3 gap-6'>
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
            <p className='underline font-bold flex items-center gap-2 text-xl'><GiClick />{website}</p>
           <div className='my-6'>
           <Link><button className='button-primary'>Get Admission</button></Link>
           </div>
        </div>
        </div>
    );
};

export default CollegeDetails;