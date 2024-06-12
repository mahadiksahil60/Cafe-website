"use client"
import Image from "next/image";
import heroimg2 from '../public/heroimg2.jpg'

export default function Hero(){
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url("/heroimg.jpg")' }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content flex flex-col md:flex-row lg:flex-row text-neutral-content text-center">
    <div className="max-w-md">
      <Image src={heroimg2} width={10000} height={800} alt='foreground'/>
     
    </div>
    <div>
        <h1 className="text-5xl text-white font-extrabold font-serif ">Coffee-a-day</h1>
         <p className="m-5 text-white font-bold ">Provident cupiditate voluptatem Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, natus! et in. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, suscipit repellat blanditiis rerum ducimus voluptatum neque dolores provident ipsam deleniti reprehenderit fugit minima qui autem officia. Nobis, explicabo consectetur eos fugiat harum vel ipsa! Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
         <button className="btn bg-opacity-60 text-black hover:text-white bg-white">Jump to Menu</button></div>
  </div>
   
</div>
    );
}   