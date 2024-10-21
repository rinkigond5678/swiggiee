import React, { useState, useEffect } from 'react';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

export default function Category() {
  const [categories, setCategories] = useState([]);

  const fetchCategory = async () => {
    const response = await fetch("http://localhost:3002/");
    const data = await response.json();
    setCategories(data);
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  return (
    <div className='max-w-[1200px] mx-auto'>
      <div className='flex my-5 items-center justify-between'>
        <div className='text-[25px] font-bold'>What's on your mind?</div>
        <div className='flex'>
          <div className='cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2'>
            <FaArrowLeft />
          </div>
          <div className='cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2'>
            <FaArrowRight />
          </div>
        </div>
      </div>

      <div className='flex'>
        {
          categories.map((cat, index) => {
            return (
              <div key={index}> 
                <img src={cat.image} alt={cat.name} /> 
                <p>{cat.name}</p>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}
