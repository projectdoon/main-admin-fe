import React, { useState, useEffect } from "react";
import Holder from "../../components/Holder";
import axios from "axios"; // Make sure to import axios
import MapContainer from "../../components/maps";

export default function Dashboard() {
  const [alerts, setAlerts] = useState([]); // State for alerts
  const [error, setError] = useState(""); // State for error messages

  useEffect(() => {

    const fetchAlerts = async () => {
      try {
        const response = await axios.get("http://localhost:8000/admin/alerts");
        setAlerts(response.data);
      } catch (error) {
        setError("Error fetching alerts. Please try again later.");
        console.error("Error fetching alerts:", error);
      }
    };

    fetchAlerts(); // Fetch initial alerts

  }, []);

  return (
    <>
      <div className="w-[100%]"> 
        <div className="flex justify-between items-center">
          {/* added gap for responsive design */}
          <div className="flex flex-col items-end gap-3 xl:gap-0 w-[60%] -ml-20">
            {/* Fixed the mb */}
            <ul className="flex mb-[-0.3rem] gap-3 xl:gap-10">
              <Holder colour="#ED1C2580" number={9} title="Today's Complaints" url="complains" />
              <Holder colour="#3A81F1" number={9} title="Solved Complaints" url="active-services" />
            </ul>
            <ul className="flex mb-[-0.3rem] gap-3 xl:gap-10">
              <Holder colour="#77DD77E5" number={9} title="Active Schemes" url="active-schemes" />
              <Holder colour="#F4B400" number={9} title="Total Bookings" url="projects-under-audit" />
            </ul>
            <ul className="flex mb-[0.2rem] gap-3 xl:gap-10">
              <Holder colour="#9747FF" number={9} title="Active Services" url="active-schemes" />
              <Holder colour="#040287E5" number={9} title="Active Projects" url="projects-under-audit" />
            </ul>
          </div>

          <div className="w-[40%] pt-1">
            <div className="border-l border-gray-300">
              <ul className="flex flex-col justify-start">
                <li className="bg-white m-4 my-2 h-[42vh] xl:w-[28vw] w-[23vw] rounded-2xl flex flex-col items-start px-3">
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
                <li className="relative bg-white m-4 h-[20vh] xl:w-[28vw] w-[23vw] rounded-2xl overflow-hidden">
                  <div className="absolute top-11 left-28 z-[1000] bg-white bg-opacity-80 px-2 py-1 rounded text-sm font-semibold shadow-md">
                    Live Monitoring
                  </div>

                  <div className="flex justify-between items-center h-full xl:scale-100 ml-[-1.5rem] xl:ml-0 pb-4">
                    <MapContainer />
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
