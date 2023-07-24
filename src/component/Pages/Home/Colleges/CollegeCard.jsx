import React from 'react';

const CollegeCard = ({ data }) => {
  const {name,image,date,admission_dates,events,research_history,sports,location} = data;

    
    return (
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={image} alt=""/>
        </figure>
      <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{location}</p>
          <p>Admission date: <span className='font-bold'>{admission_dates}</span></p>
        <div className="card-actions justify-end">
          <button className="button-primary">Details</button>
        </div>
      </div>
    </div>
    );
};

export default CollegeCard;