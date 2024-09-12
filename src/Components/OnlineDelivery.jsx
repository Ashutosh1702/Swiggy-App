import React, { useState, useEffect, useRef } from 'react';
import Card from './Card'; // Import the Card component

const OnlineDelivery = () => {
  const [category, setCategory] = useState([]);

  const componentRef = useRef(null);
  const [isAtTop, setIsAtTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsAtTop(true);
      } else {
        setIsAtTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Fetching category data from an API
  const fetchCategory = async () => {
    try {
      const response = await fetch('/rastaurant.json'); // Make sure this path is correct
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log('Fetched data:', data); // Log data to check its structure
      setCategory(data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  return (
    <div className='max-w-[1200px] mx-auto' ref={componentRef}>
      <div className='flex my-3 items-center justify-between'>
        <div className='text-[20px] font-bold'>Restaurants with online food delivery in Pune</div>
      </div>
      <div className={`sticky top-0 z-[999] bg-white py-2`}>
        <div className='max-w-[1200px] mx-auto flex my-4 gap-10 rounded  border border-black'>
          <div className='p-3 rounded-md shadow'>Filter</div>
          <div className='p-3 rounded-md shadow'>Sort By</div>
          <div className='p-3 rounded-md shadow'>Fast Delivery</div>
          <div className='p-3 rounded-md shadow'>New on Swiggy</div>
          <div className='p-3 rounded-md shadow'>Rating 4.0+</div>
          <div className='p-3 rounded-md shadow'>Pure-Veg</div>
          <div className='p-3 rounded-md shadow'>Offers</div>
          <div className='p-3 rounded-md shadow'>Rs.300-600</div>
          <div className='p-3 rounded-md shadow'>Rs.600-1000</div>
        </div>
      </div>
      <div className='grid grid-cols-4 gap-3'>
        {category.length > 0 ? (
          category.map((item, index) => (
            <Card key={index} restaurant={item} />
          ))
        ) : (
          <div>Loading...</div> // Display a loading message while data is being fetched
        )}
      </div>
    </div>
  );
};

export default OnlineDelivery;
