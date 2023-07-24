import React, { useEffect, useState } from 'react';
import SectionHeader from '../../../shared/SectionHeader';
import axios from 'axios';
import CollegeCard from './CollegeCard';

const Colleges = () => {
    const [college,setCollege]=useState([])
  useEffect(() => {
      axios.get('https://unipath-server.vercel.app/colleges')
        .then(data => {
          const reduceData = data.data.slice(0, 6);
          setCollege(reduceData)
  })
  .catch(error=>console.log(error));
    },[])

    return (
        <div className='mt-10'>
            <SectionHeader header={'Popular Colleges'}></SectionHeader>
        <div className='grid grid-cols-3 gap-6 w-11/12 mx-auto my-10'>
        {
          college.map(c=><CollegeCard key={c.id} data={c}></CollegeCard>)
            }
        </div>
        </div>
    );
};

export default Colleges;