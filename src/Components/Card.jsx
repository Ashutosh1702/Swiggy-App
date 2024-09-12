import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa'; // Import star icons from react-icons

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating); // Number of full stars
  const halfStar = rating - fullStars >= 0.5; // Check if there should be a half star
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0); // Calculate the number of empty stars

  return (
    <div className='flex'>
      {/* Render full stars */}
      {Array(fullStars)
        .fill(0)
        .map((_, index) => (
          <FaStar key={index} className='text-yellow-500' />
        ))}

      {/* Render half star */}
      {halfStar && <FaStarHalfAlt className='text-yellow-500' />}

      {/* Render empty stars */}
      {Array(emptyStars)
        .fill(0)
        .map((_, index) => (
          <FaRegStar key={index} className='text-yellow-500' />
        ))}
    </div>
  );
};

const Card = ({ restaurant }) => {
  console.log(restaurant);

  return (
    <div className='w-[250px] p-4 shadow-lg rounded-lg'>
      <div className='group h-[200px] rounded-[15px] overflow-hidden'>
        <img
          src={restaurant?.image} // Use restaurant? image URL from API
          alt={restaurant?.title} // Display the restaurant?'s title as the alt text
          className='w-full h-[150px] object-cover rounded-lg transform transition-transform duration-500 group-hover:scale-110 group-hover:opacity-90'
        />
      </div>
      <div className='mt-2'>
        <h2 className='text-xl font-bold'>{restaurant?.title}</h2>
        <p>{restaurant?.offer}</p>
        <p>{restaurant?.name}</p>

        {/* Display star rating inside Card */}
        <div className='flex items-center'>
          <StarRating rating={restaurant?.rating} /> {/* Pass rating to the star rating function */}
          <span className='ml-2 text-sm'>{restaurant?.rating}</span> {/* Show numeric rating */}
        </div>

        <p>Delivery Time: {restaurant?.minTime} - {restaurant?.maxTime} mins</p>
        <p>{restaurant?.place}</p>
      </div>
    </div>
  );
};

export default Card;
