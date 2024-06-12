"use client"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image";
import  carousalImage1 from '../public/carousalimg1.jpg'
import  carousalImage2 from '../public/carousalimg2.jpg'
import  carousalImage3 from '../public/carousalimg3.jpg'

import { useEffect, useRef } from "react";

export default function Carousal(){

    const carouselRef = useRef(null);

    useEffect(() => {
        const intervalId = setInterval(() => {
          // Move to the next slide
          carouselRef.current.scrollLeft += carouselRef.current.offsetWidth;
    
          // If the current slide is the last one, reset to the first slide
          if (carouselRef.current.scrollLeft >= 2 * carouselRef.current.offsetWidth) {
            // Scroll back to the beginning of the carousel
            carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
          }
        }, 5000); // Change 5000 to adjust the time interval (in milliseconds)
    
        return () => clearInterval(intervalId);
      }, []);


    return (
        <>
        <div className="bg-red-900 w-full text-white flex justify-center items-center font-light h-10">Hottest items for flat 10% sale ! Limited offer</div>
        <div className="carousel w-full relative overflow-hidden " ref={carouselRef} style={{height: '570px'}}>
        <div id="slide1" className="carousel-item w-full relative">
  <Image src={carousalImage1} alt='carousal' className="w-full" />
  <div className="absolute bottom-5 left-0 right-0">
    <div className="text-black text-center text-6xl bg-white bg-opacity-70 p-2 font-bold">Frappe`</div>
  </div>
</div>
<div id="slide1" className="carousel-item w-full relative">
  <Image src={carousalImage2} alt='carousal' className="w-full" />
  <div className="absolute bottom-5 left-0 right-0">
    <div className="text-black text-center text-6xl bg-white bg-opacity-70 p-2 font-bold">Cake</div>
  </div>
</div>
<div id="slide1" className="carousel-item w-full relative">
  <Image src={carousalImage3} alt='carousal' className="w-full" />
  <div className="absolute bottom-5 left-0 right-0">
    <div className="text-black text-center text-6xl bg-white bg-opacity-70 p-2 font-bold">Gourmet Pizza</div>
  </div>
</div>
        
      </div>
      </>
    );
}

