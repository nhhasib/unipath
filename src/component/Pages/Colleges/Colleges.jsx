import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CollegeCard from '../Home/Colleges/CollegeCard';
import AllCollegeCard from './AllCollegeCard';

const Colleges = () => {

    const [colleges, setColleges] = useState([])
    
    useEffect(() => {
        axios.get('https://unipath-server.vercel.app/colleges')
            .then(data => setColleges(data.data))
        .catch(error=>console.log(error))
    }, [])
    
    return (
        <div>
            <h1 className='text-4xl font-bold text-center my-10 uppercase'>Find your desire college from World class colleges</h1>
            <div className='grid grid-cols-3 gap-6 w-11/12 mx-auto'>
            {
                colleges.map(c=><AllCollegeCard key={c.id} data={c}></AllCollegeCard>)
            }
            </div>
            
            </div>  
            )
};

export default Colleges;