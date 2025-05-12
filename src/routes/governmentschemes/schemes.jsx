import React, { useState, useEffect } from 'react';
import SchemeHolder from '../../components/schemeHolder';
import axios from 'axios'; // Make sure to import axios
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Right from '../../assets/Expand_left_light.png';
import Left from '../../assets/Expand_left_light-2.png';

export default function Schemes() {
  const [date, setDate] = useState(new Date());
  const [temperature, setTemperature] = useState('N/A'); // Default to 'N/A'
  const [alerts, setAlerts] = useState([]); // State for alerts
  const [error, setError] = useState(''); // State for error messages
  const [schemes, setSchemes] = useState([]); // State for schemes
  const [forward, setForward] = useState(0); // State for pagination

  useEffect(() => {
    const updateDate = () => {
      setDate(new Date());
    };

    const fetchTemperature = async () => {
      try {
        const response = await fetch('http://localhost:8000/temperature'); // Updated URL
        const data = await response.json();
        setTemperature(data.temperature); // Adjust according to your API response
      } catch (error) {
        console.error('Error fetching temperature:', error);
      }
    };

    const fetchAlerts = async () => {
      try {
        const response = await axios.get('http://localhost:8000/admin/alerts'); // Updated URL
        setAlerts(response.data);
      } catch (error) {
        setError('Error fetching alerts. Please try again later.');
        console.error('Error fetching alerts:', error);
      }
    };

    const fetchSchemes = async () => {
      try {
        const response = await axios.get('http://localhost:8000/admin/scheme'); // API endpoint for schemes
        setSchemes(response.data);
      } catch (error) {
        setError('Error fetching schemes. Please try again later.');
        console.error('Error fetching schemes:', error);
      }
    };

    updateDate(); // Update date on component mount
    fetchTemperature(); // Fetch initial temperature
    fetchAlerts(); // Fetch initial alerts
    fetchSchemes(); // Fetch initial schemes

    // Update date every minute
    const dateInterval = setInterval(updateDate, 60000);
    const tempInterval = setInterval(fetchTemperature, 3600000);

    return () => {
      clearInterval(dateInterval);
      clearInterval(tempInterval);
    };
  }, []);

  // Format date and time for the Indian time zone
  const dateTimeOptions = {
    timeZone: 'Asia/Kolkata',
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  };
  const formattedDate = new Intl.DateTimeFormat('en-IN', dateTimeOptions).format(date);
  const [datePart, time] = formattedDate.split(" at ");
  const [dayOfWeek, ...rest] = datePart.split(" ");
  const monthDay = rest.join(" ").replace(",", "");

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/admin/dashboard/govscheme/addscheme'); // Programmatically navigate
  };

  // Handler for left button click
  const handleLeftClick = () => {
    if (forward > 0) {
      setForward(forward - 1);
    }
  };

  // Handler for right button click
  const handleRightClick = () => {
    if (forward < 2) {
      setForward(forward + 1);
    }
  };

  // Determine the slice range based on forward
  const startSlice = forward * 9;
  const endSlice = startSlice + 9;
  const displayedSchemes = schemes.slice(startSlice, endSlice);

  return (
    <>
      <div>        
        <div className='flex justify-between items-start'>
          <div className='flex flex-col justify-start items-center min-w-[40vw] mb-2 w-[60%]'>
            <div className='py-5'>
              <Button onClick={handleClick}>
                Add New Scheme
              </Button>
            </div>
            <div className='pt-2'>
              {Array.isArray(displayedSchemes) && displayedSchemes.length > 0 ? (
                <>
                  {displayedSchemes.slice().reverse().slice(0, 9).reduce((acc, scheme, index) => {
                    if (index % 3 === 0) {
                      acc.push([]);
                    }
                    acc[acc.length - 1].push(scheme);
                    return acc;
                  }, []).map((schemeGroup, groupIndex) => (
                    <ul key={groupIndex} className='flex mx-[-2.5rem]'>
                      {schemeGroup.map(scheme => (
                        <SchemeHolder key={scheme.id} title={scheme.name} url={scheme.url} />
                      ))}
                    </ul>
                  ))}
                </>
              ) : (
                <ul className='flex'>
                  <p className='text-2xl font-semibold m-6'>ADD MORE SCHEMES</p>
                </ul>
              )}
            </div>
            <div className='flex gap-2 pt-3'>
              <button className='h-6 w-6 rounded-full bg-white border-2 border-blue-300'><img src={Left} alt="" /></button>
              <button className='h-6 w-6 rounded-full bg-white border-2 border-blue-300'><img src={Right} alt="" /></button>
            </div>
          </div>

          <div className="w-[40%] pt-1">
            <div className="border-l border-gray-300">
              <ul className="flex flex-col justify-start">
                <li className="bg-white m-4 h-[42vh] xl:w-[28vw] w-[23vw] rounded-2xl flex flex-col items-start px-3">
                  <p className="font-semibold text-xl mt-2 mb-[-0.5rem] text-red-500">
                    Alerts
                  </p>
                  <div className="m-4 ml-0 border-t-[1.5px] w-full border-slate-200">
                    {error && <p className="text-red-500">{error}</p>}
                    <ul className="flex flex-col mt-1 overflow-y-auto max-h-[32vh] overflow-x-hidden max-w-[27vw]" style={{ 
                      scrollbarWidth: 'none'  
                    }}>
                      {alerts.length > 0 ? (
                        alerts.slice().reverse().map((alert) => (
                          <li key={alert.id} className="m-1 w-full">
                            {alert.alert}
                          </li>
                        ))
                      ) : (
                        <li className="m-2 p-2 rounded-lg bg-gray-200">
                          No alerts available
                        </li>
                      )}
                    </ul>
                  </div>
                </li>
                <li className="bg-white m-4 h-[20vh] xl:w-[28vw] w-[23vw] rounded-2xl">
                  <div className="flex justify-between items-center h-full xl:scale-100 ml-[-1.5rem] xl:ml-0">
                    <div className="text-4xl m-3 text-center w-full">{temperature}°C</div>
                    <ul className="flex flex-col gap-2 justify-center items-start m-4 w-full">
                      <li className="text-sm font-semibold uppercase">{dayOfWeek}</li>
                      <li className="text-sm font-semibold">{monthDay}</li>
                      <li className="text-sm font-semibold">{time}</li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
