import React, { useEffect, useState } from 'react';
import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from 'react-icons/hi';
import Card from './Card'; // Import Card component

const TopRest = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0); // State to track the current slide index
  const itemsPerPage = 4; // Number of items to show per slide

  // Function to fetch top restaurant data
  const fetchTopRestaurant = async () => {
    try {
      const response = await fetch('/rastaurant.json'); // Replace with your API URL
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const apiData = await response.json(); // Correctly parse JSON
      setData(apiData); // Set data to state
    } catch (err) {
      setError(err.message); // Handle any errors
    }
  };

  useEffect(() => {
    fetchTopRestaurant(); // Fetch data on component mount
  }, []);

  // Handle previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - itemsPerPage : prevIndex - itemsPerPage
    );
  };

  // Handle next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerPage >= data.length ? 0 : prevIndex + itemsPerPage
    );
  };

  if (error) {
    return <div>Error: {error}</div>; // Display error if fetch fails
  }

  return (
    <div className='max-w-[1200px] mx-auto'>
      <div className='flex my-3 items-center justify-between'>
        <div className='text-[20px] font-bold'>Top Restaurant Chains in Pune</div>
        <div className='flex'>
          <div
            className='flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 cursor-pointer'
            onClick={prevSlide}
          >
            <HiOutlineArrowSmLeft />
          </div>
          <div
            className='flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 cursor-pointer'
            onClick={nextSlide}
          >
            <HiOutlineArrowSmRight />
          </div>
        </div>
      </div>

      {/* Use grid layout for better arrangement */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 justify-center'>
        {data.length > 0 ? (
          data
            .slice(currentIndex, currentIndex + itemsPerPage) // Show a subset of items per page
            .map((restaurant, index) => (
              <div key={index} className='w-full'> {/* Ensure the width is 100% for responsiveness */}
                <Card restaurant={restaurant} /> {/* Pass each restaurant's data to the Card component */}
              </div>
            ))
        ) : (
          <div>Loading...</div>
        )}
      </div>
      <hr className='my-6 border-[1px]'/>
    </div>
  );
};

export default TopRest;
