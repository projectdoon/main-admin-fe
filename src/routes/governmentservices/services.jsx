import React, { useState, useEffect } from 'react';
import SchemeHolder from '../../components/schemeHolder';
import axios from 'axios'; // Make sure to import axios
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Right from '../../assets/Expand_left_light.png';
import Left from '../../assets/Expand_left_light-2.png';
import MapContainer from '../../components/maps';

export default function Services() {
  const [alerts, setAlerts] = useState([]); // State for alerts
  const [error, setError] = useState(''); // State for error messages
  const [schemes, setServices] = useState([]); // State for schemes
  const [forward, setForward] = useState(0); // State for pagination

  useEffect(() => {

    const fetchAlerts = async () => {
      try {
        const response = await axios.get('http://localhost:8000/admin/alerts'); // Updated URL
        setAlerts(response.data);
      } catch (error) {
        setError('Error fetching alerts. Please try again later.');
        console.error('Error fetching alerts:', error);
      }
    };

    // const fetchServices = async () => {
    //   try {
    //     const response = await axios.get('http://localhost:8000/admin/scheme'); // API endpoint for schemes
    //     setServices(response.data);
    //   } catch (error) {
    //     setError('Error fetching services. Please try again later.');
    //     console.error('Error fetching services:', error);
    //   }
    // };

    fetchAlerts(); // Fetch initial alerts
    // fetchServices(); // Fetch initial schemes
  }, []);

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

  // const displayedSchemes = schemes.slice(startSlice, endSlice);
  const displayedServices = [
    "Service 1",
    "Service 2",
    "Service 3",
    "Service 4",
    "Service 5",
    "Service 6",
  ]

  return (
    <>
      <div className="w-[100%] h-full">
        <div className="flex justify-between items-center w-full h-full">
          <div className='flex flex-col justify-center items-center mb-2 w-[60%] h-full pl-2 -mt-3'>
            <div className='py-5'>
              <Button onClick={handleClick}>
                Add New Scheme
              </Button>
            </div>
            <div className='pt-2'>
              {Array.isArray(displayedServices) && displayedServices.length > 0 ? (
                <>
                  {displayedServices.slice().reverse().slice(0, 9).reduce((acc, service, index) => {
                    if (index % 3 === 0) {
                      acc.push([]);
                    }
                    acc[acc.length - 1].push(service);
                    return acc;
                  }, []).map((serviceGroup, groupIndex) => (
                    <ul key={groupIndex} className='flex mx-[-2rem] -my-1'>
                      {serviceGroup.map(service => (
                        <SchemeHolder key={service} title={service} />
                      ))}
                    </ul>
                  ))}
                </>
              ) : (
                <ul className='flex'>
                  <p className='text-2xl font-semibold m-6'>ADD MORE SERVICES</p>
                </ul>
              )}
            </div>
            <div className='flex gap-2'>
              <button className='h-6 w-6 rounded-full bg-white border-2 border-blue-300'><img src={Left} alt="" /></button>
              <button className='h-6 w-6 rounded-full bg-white border-2 border-blue-300'><img src={Right} alt="" /></button>
            </div>
          </div>

          <div className="w-[40%] h-full">
              <ul className="flex flex-col justify-center items-start gap-7 h-full w-full">
                <li className="bg-white h-[39vh] xl:w-[28vw] w-[23vw] rounded-2xl flex flex-col items-start px-4 py-0.5">
                  <p className="font-semibold text-xl my-1.5 text-red-500 flex w-full justify-between items-center">
                    <div>Active Alerts</div>
                    <div className="text-xs text-black font-normal scale-90">View All</div>
                  </p>
                  <div className="border-t-[1.5px] w-full border-slate-200">
                    {error && <p className="text-red-500">{error}</p>}
                    <ul className="flex flex-col mt-1 overflow-y-auto max-h-[32vh] overflow-x-hidden max-w-[27vw]" style={{ 
                      scrollbarWidth: 'none'  
                    }}>
                      {alerts.length > 0 ? (
                        alerts.slice().reverse().map((alert) => (
                          <li key={alert.id} className="my-1 w-full text-xs">
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
                <li className="relative bg-white h-[17.5vh] xl:w-[28vw] w-[23vw] rounded-2xl overflow-hidden">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[1000] bg-white bg-opacity-80 px-2 py-1 rounded text-sm font-semibold shadow-md">
                    Live Monitoring
                  </div>

                  <div className="flex justify-between items-center h-full xl:scale-100 pb-4">
                    <MapContainer />
                  </div>
                </li>
              </ul>
          </div>
        </div>
      </div>
    </>
  );
}
