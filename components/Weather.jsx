import Image from 'next/image';
import React from 'react';

const Weather = ({ data }) => {
  console.log(data);
  return (
    <div className='relative flex flex-col justify-between max-w-[500px] w-full h-[80vh] m-auto z-10'>
      {/* Top */}
      <div className='relative flex justify-between pt-12 text-emerald-300'>
        <div className='flex flex-col items-center '>
          <Image
            src={`http://openweathermap.org/img/wn/${data?.weather[0].icon}@2x.png`}
            alt='/'
            width='110'
            height='110'
          />
          <p className='text-2xl'>{data?.weather[0].main}</p>
        </div>
        <p className='text-9xl'>{data?.main.temp.toFixed(0)}&#176;</p>
      </div>

      {/* Bottom */}

      <div id='weather-container' className='bg-black/40 m-2 relative p-8 rounded-lg text-emerald-300'>
          <p className='text-2xl text-center pb-6'>Weather in {data?.name}</p>
          <div className='grid grid-cols-3 md:grid-cols-5 gap-2 justify-between text-center'>
              <div>
                  <p id='main-feel' className='font-bold text-xl'>{data?.main.feels_like.toFixed(0)}&#176;</p>
                  <p className='text-xl'>Feels Like</p>
              </div>
              <div>
                  <p id='humidity' className='font-bold text-xl'>{data?.main.humidity}%</p>
                  <p className='text-xl'>Humidity</p>
              </div>
              <div>
                  <p id='wind-speed' className='font-bold text-xl'>{data?.wind.speed.toFixed(0)} KM/H</p>
                  <p className='text-xl'>Winds</p>
              </div>
              <div>
                  <p id='pressure' className='font-bold text-xl'>{data?.main.pressure} </p>
                  <p className='text-xl'>Pressure</p>
              </div>
              <div>
                  <p id='country' className='font-bold text-xl'>{data?.sys.country} </p>
                  <p className='text-xl'>Country</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Weather;
