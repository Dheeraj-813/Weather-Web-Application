import React, { useState } from 'react';
import WeatherData from './WeatherDate';

function DisplayWeather() {
  const [cityName, setCityName] = useState('');
  const [countryName, setCountryName] = useState('');
  const [submitCity, setSubmitCity] = useState('');
  const [submitCountry, setSubmitCountry] = useState('');

  const handleCity = (e) => setCityName(e.target.value);
  const handleCountry = (e) => setCountryName(e.target.value);

  const handleSubmit = () => {
    setSubmitCity(cityName);
    setSubmitCountry(countryName);
  };

  return (
    <>
      <h1 className='mb-6 text-4xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl'>
        Weather Application
      </h1>

      {/* Input section */}
      <div className='flex justify-center flex-wrap gap-6 mb-8'>

          <label htmlFor='Enter City' className="mb-4 text-xl font-medium text-gray-900">Enter City</label>
          <input id='Enter City' onChange={handleCity} className='h-[3rem] w-[14rem] bg-gray-200 px-4 rounded' type='text' value={cityName} placeholder='e.g. Mumbai'
          />
        

          <label htmlFor='Enter Country' className="mb-4 text-xl font-medium text-gray-900">Enter Country</label>
          <input id='Enter Country' onChange={handleCountry} className='h-[3rem] w-[14rem] bg-gray-200 px-4 rounded' type='text' value={countryName} placeholder='e.g. IN'
          />

        <div className='flex items-end'>
          <button
            onClick={handleSubmit}
            className='h-[3rem] text-white bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-cyan-600 dark:hover:bg-cyan-700'
          >
            Show me
          </button>
        </div>
      </div>

      {/* Weather Data section */}
      <div className='flex justify-center'>
        {submitCity && submitCountry && (
          <WeatherData cityName={submitCity} countryName={submitCountry} />
        )}
      </div>
    </>
  );
}

export default DisplayWeather;
