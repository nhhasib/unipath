
import React from 'react';
import { Link } from 'react-router-dom';

const AllCollegeCard = ({ data }) => {
    
        const {_id,name,image,date,admission_dates,events,research_history,sports,location,rank,research_works} = data;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt=""/>
                </figure>
              <div className="card-body">
                  <h2 className="card-title">{name}</h2>
                <p>Location: {location}</p>
                <p>Rank: {rank}th</p>
                <p>Admission date: <span className='font-bold'>{admission_dates}</span></p>
                <p>Number of research: {research_works.length}</p>
                <div className="card-actions justify-end">
                    <Link to={`/colleges/${_id}`}><button className="button-primary">Details</button></Link>
                </div>
              </div>
            </div>
    );
};

export default AllCollegeCard;