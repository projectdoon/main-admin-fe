import React, { useState, useEffect } from "react";
import Img1 from "../../assets/transportation-truck_75588 1 .png";
import Img2 from "../../assets/dog 4.png";
import Img3 from "../../assets/Component 3.png";
import Img4 from "../../assets/blood_206397 1.png";
import Img5 from "../../assets/Shop@3x.png";
import Img6 from "../../assets/sea-waves_75765 1.png";
import Img7 from "../../assets/Road_alt_fill.png";
import Img8 from "../../assets/bus_162786 1.png";
import Img9 from "../../assets/street-lamp_2531855 1.png";
import axios from "axios"; // Make sure to import axios
import MapContainer from "../../components/maps";
import ComplaintHolder from "../../components/complaintHolder";

export default function Complaints() {
  const [date, setDate] = useState(new Date());
  const [alerts, setAlerts] = useState([]); // State for alerts
  const [error, setError] = useState(""); // State for error messages

  useEffect(() => {
    const updateDate = () => {
      setDate(new Date());
    };

    const fetchAlerts = async () => {
      try {
        const response = await axios.get("http://localhost:8000/admin/alerts");
        setAlerts(response.data);
      } catch (error) {
        setError("Error fetching alerts. Please try again later.");
        console.error("Error fetching alerts:", error);
      }
    };

    updateDate(); // Update date on component mount
    fetchAlerts(); // Fetch initial alerts

    // Update date every minute
    const dateInterval = setInterval(updateDate, 60000);

    return () => {
      clearInterval(dateInterval);
    };
  }, []);


  return (
    <>
      <div className="w-[100%] h-full">
        <div className="flex justify-between items-center w-full h-full">
          <div className="flex flex-col justify-center items-center gap-4 w-[60%] h-full 2xl:scale-90">
            <ul className="flex justify-evenly items-center w-full">
              <ComplaintHolder img={Img1} title="Garbage Vehicle" url="garbage" />
              <ComplaintHolder img={Img2} title="Dead Animal" url="deadanimal" />
              <ComplaintHolder img={Img3} title="Open Manholes" url="manholes" />
            </ul>
            <ul className="flex justify-evenly items-center w-full">
              <ComplaintHolder img={Img4} title="Water Leakage" url="water" />
              <ComplaintHolder img={Img5} title="Public Toilets" url="toilets" />
              <ComplaintHolder img={Img6} title="Stagnant Water" url="stagnant" />
            </ul>
            <ul className="flex justify-evenly items-center w-full">
              <ComplaintHolder img={Img7} title="Road Repair" url="road" />
              <ComplaintHolder img={Img8} title="Public Transport" url="transport" />
              <ComplaintHolder img={Img9} title="Street Lights" url="lights" />
            </ul>
          </div>

          <div className="w-[40%] h-full 2xl:pr-16 pr-4">
              <ul className="flex flex-col justify-center items-start xl:items-center gap-7 2xl:gap-6 h-full w-full">
                <li className="bg-white h-[39vh] 2xl:h-[42vh] xl:w-[28vw] w-[23vw] rounded-2xl flex flex-col items-start px-4 py-0.5">
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
                <li className="relative bg-white h-[17.5vh] 2xl:h-[19vh] xl:w-[28vw] w-[23vw] rounded-2xl overflow-hidden">
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