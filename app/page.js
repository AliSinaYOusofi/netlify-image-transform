"use client"
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  
  const [quality, setQuality] = useState(75); 
  const [width, setWidth] = useState(800);
  const [height, setHeight] = useState(500);
  const [objectFit, setObjectFit] = useState("cover");
  const objectFitOptions = ["cover", "contain", "fill", "none", "scale-down"];

  const handleQualityChange = (event) => {
    
    const value = parseInt(event.target.value); 
    
    if (isNaN(value) || value < 1 || value > 100) {
      return; 
    }
    
    setQuality(value);
  };

  const handleWidthChange = (event) => {
    setWidth(parseInt(event.target.value));
  };

  const handleHeightChange = (event) => {
    setHeight(parseInt(event.target.value));
  };
  const handleObjectFitChange = (event) => {
    setObjectFit(event.target.value);
  };

  const transformImage = () => {

  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      
      <div className="image h-[90%] border-10 border-white">
        <Image src={"/images/uwp4301503.jpeg"} alt="Picture of the author" width={width} height={height} />
      </div>
  
        
        <form class=" flex  justify-between w-full gap-10 mt-10">
          <div className="form-group mb-3 w-1/2">
            <label htmlFor="quality" className="form-label inline-block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Quality:
            </label>
            <input
              type="number"
              id="quality"
              className="form-control bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Quality"
              required
              value={quality}
              onChange={handleQualityChange}
            />
          </div>

          <div className="form-group mb-3 w-1/2">
            <label htmlFor="width" className="form-label inline-block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Width:
            </label>
            <input
              type="number"
              id="width"
              className="form-control bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Width"
              required
              value={width}
              onChange={handleWidthChange}
            />
          </div>

          <div className="form-group mb-3 w-1/2">
            <label htmlFor="width" className="form-label inline-block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Height:
            </label>
            <input
              type="number"
              id="width"
              className="form-control bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Width"
              required
              value={height}
              onChange={handleHeightChange}
            />
          </div>

          <div className="form-group mb-3 w-1/2">
          <label htmlFor="objectFit" className="form-label inline-block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Object fit:
            </label>
            <select
              id="objectFit"
              className="form-control bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={handleObjectFitChange}
            >
              {objectFitOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </form>
        <div className="mt-4 gap-10  relative">
          <button 
            type="button"
            onClick={transformImage} 
            className="w-full gap  text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
              Transform &nbsp;
              <div className="absolute right-1  animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-white" role="status" aria-label="loading">
                
              </div>
            </button>
        </div>
    </main>
  );
}
