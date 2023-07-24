import React from 'react';

const SectionHeader = ({header}) => {
    return (
        <div className="text-center w-1/2 mx-auto">
            <h1 className="font-bold text-4xl my-2">{header}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quas
          ab esse vitae sunt aut dolor natus optio, voluptates libero?
        </p>
      </div>
    );
};

export default SectionHeader;