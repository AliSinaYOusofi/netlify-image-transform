"use client"
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  
  const [quality, setQuality] = useState(75); 
  const [width, setWidth] = useState(800);
  const [height, setHeight] = useState(500);
  const [spinner, setSpinner] = useState(false)
  const [objectFit, setObjectFit] = useState("contain");
  const [isError, setIsError] = useState(false);
  const [format, setFormat] = useState('jpg')
  const [errorMessage, setErrorMessage] = useState("")
  const [position, setPosition] = useState('center')

  const objectFitOptions = ["cover", "contain", "fill"]
  const formatOptions = ['avif', 'jpg',  'webp', 'blurhash', 'gif']
  const positionOptions = ['top', 'center', 'bottom', 'left', 'center']

  const handleQualityChange = (event) => {
    
    const value = parseInt(event.target.value); 
    
    setQuality(value);
  };

  const handleWidthChange = (event) => {
    setWidth(parseInt(event.target.value));

  };

  const handleHeightChange = (event) => {
    setHeight(parseInt(event.target.value));
  }

  const handleObjectFitChange = (event) => {
    setObjectFit(event.target.value);
  };

  const transformImage = async  () => {

    // validate every field
    if (width < 1) {
      setIsError(true);
      setErrorMessage("Width must be a number greater than 0");
      return;
    }

    else if (height < 1) {
      setIsError(true);
      setErrorMessage("Height must be a number greater than 0");
      return;
    }

    else if (quality < 1 || quality > 100) {
      setIsError(true);
      setErrorMessage("Quality must be a number between 1 and 100");
      return;
    }

    setSpinner(true)
    
    try {
      const result = await fetch(`https://peppy-profiterole-58b1ee.netlify.app/.netlify/images?url=images/uwp4301503.jpeg&width=${width}&height=${height}&fit=${objectFit}&fm=${format}&position=${position}&q=${quality}`)
      console.log(result)
      window.open(result.url, '_blank')
    } catch (error) {
      console.error("error fetching: ", error.message)
    } finally {
      setSpinner(false)
    }
  }

  return (
    <main className="flex flex-col items-center justify-center relative">
      
      {
        errorMessage && isError
        &&
        <div className="flex p-4 bg-gray-600 rounded-md absolute top-2">
          
          <div className="flex-shrink-0">
            <svg className="flex-shrink-0 size-4 text-blue-500 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"></path>
            </svg>
          </div>
          
          <div className="ms-3">
            <p className="text-sm text-gray-100 dark:text-neutral-100">
              {errorMessage}
            </p>
          </div>
          
          <button
            onClick={() => setIsError(false)} 
            type="button" 
            className="inline-flex ml-3 flex-shrink-0 justify-center items-center size-5 rounded-lg text-white hover:text-white opacity-50 hover:opacity-100 focus:outline-none focus:opacity-100">
              
            <span className="sr-only">Close</span>
          
            <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
        </button>
        </div>
      }

      <div className="image h-[80%] min-h-screen w-[90%] mx-auto flex items-start justify-center ">
        <Image 
          src={"/images/uwp4301503.jpeg"} 
          alt="Picture" 
          width={800} 
          height={height} 
          className={`mt-10 h-[${height}px] object-[${objectFit}]`}
          priority
        />
      </div>


      <div className="absolute bottom-0 ">

        <form className=" flex  justify-between w-full gap-10 mt-10">
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
              value={objectFit}
            >
              {objectFitOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group mb-3 w-1/2">
            <label htmlFor="format" className="form-label inline-block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Format:
            </label>
            <select 
              id="format"
              value={format} 
              className="form-control bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => setFormat(e.target.value)}  
            >
              
              {formatOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group mb-3 w-1/2">
            
            <label 
              htmlFor="position" 
              className="form-label inline-block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Position:
            </label>
            
            <select id="position" value={position} className="form-control bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e) => setPosition(e.target.value)}>
              {positionOptions.map((option) => (
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
            disabled={spinner}
            className="w-full gap  text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
              Transform &nbsp;
              {
                spinner && <div className="absolute right-1  animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-white" role="status" aria-label="loading">
                
                </div>
              }
              
            </button>
        </div>
      </div>
    </main>
  );
}
