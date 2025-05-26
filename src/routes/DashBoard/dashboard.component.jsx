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
      <div className="w-[100%] h-full"> 
        <div className="flex justify-between items-center w-full h-full pl-4 2xl:pl-0 xl:-ml-1.5">
          <div className="flex flex-col justify-center items-end gap-3.5 xl:gap-2 w-[60%] h-full">
            <ul className="flex justify-evenly w-full"> 
              <Holder colour="#ED1C2580" number={9} title="Today's Complaints" url="complains" />
              <Holder colour="#3A81F1" number={9} title="Solved Complaints" url="active-services" />
            </ul>
            <ul className="flex justify-evenly w-full">
              <Holder colour="#77DD77E5" number={9} title="Active Schemes" url="active-schemes" />
              <Holder colour="#F4B400" number={9} title="Total Bookings" url="projects-under-audit" />
            </ul>
            <ul className="flex justify-evenly w-full">
              <Holder colour="#9747FF" number={9} title="Active Services" url="active-schemes" />
              <Holder colour="#040287E5" number={9} title="Active Projects" url="projects-under-audit" />
            </ul>
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
