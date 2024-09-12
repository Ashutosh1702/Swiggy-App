import React, { useEffect, useState } from 'react';
import { HiOutlineArrowSmRight, HiOutlineArrowSmLeft } from "react-icons/hi";
import { fetch_food_data } from '../FoodData/Food';  // Import the local food data

const Category = () => {
    const [slide, setSlide] = useState(0);
    const [category, setCategory] = useState([]);
    const itemsPerSlide = 4; // Number of items to show per slide

    const fetchCategory = async () => {
        try {
            // Use the local data directly
            setCategory(fetch_food_data);
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    };

    useEffect(() => {
        fetchCategory();
    }, []);

    const totalSlides = Math.ceil(category.length / itemsPerSlide);

    const prevSlide = () => {
        setSlide((prev) => (prev > 0 ? prev - 1 : 0));
    };

    const nextSlide = () => {
        setSlide((prev) => (prev < totalSlides - 1 ? prev + 1 : prev));
    };

    return (
        <>
            <div className='max-w-[1200px] mx-auto'>
                <div className='flex my-3 items-center justify-between'>
                    <div className='text-[20px] font-bold'>What's on your mind</div>
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
                <div className='overflow-hidden'>
                    <div
                        className='flex transition-transform duration-500 ease-in-out'
                        style={{
                            transform: `translateX(-${slide * (100 / totalSlides)}%)`,  // Slide row per percentage of the total width
                            width: `${totalSlides * 100}%`,  // Set width according to total slides
                        }}
                    >
                        {category.map((cat, index) => (
                            <div key={index} className='w-[calc(25%-1rem)] mx-2'>
                                <img 
                                    src={cat.image} 
                                    alt={cat.path || "Category"}
                                    className='w-full h-[100px] object-cover rounded-md'
                                />
                                <p className='text-center mt-2 font-semibold capitalize'>{cat.path}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <hr className='my-6 border-[1px]'/>
            </div>
        </>
    );
};

export default Category;
