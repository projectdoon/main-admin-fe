import React, { useState } from 'react';

function UpdateInfo() {
  const [activeTab, setActiveTab] = useState("contact");

  return (
    <div className="flex flex-col gap-5 py-7 px-5 w-full h-full">
      <div className="flex justify-between items-center">
        <div className="flex gap-6">
          <button
            onClick={() => setActiveTab("contact")}
            className={`pb-1 border-b-2 transition-all ${
              activeTab === "contact" ? "border-black" : "border-transparent"
            }`}
          >
            Contact Info
          </button>
          <button
            onClick={() => setActiveTab("about")}
            className={`pb-1 border-b-2 transition-all ${
              activeTab === "about" ? "border-black" : "border-transparent"
            }`}
          >
            About Info
          </button>
        </div>
        <button className="text-black bg-white border-2 border-[#3A81F1] px-20 py-1 text-xs rounded-lg">Save</button>
      </div>

      <div className="flex flex-col gap-3 w-full">
        {activeTab === "contact" && (
          <div className='bg-white rounded-xl p-2 text-sm'>
            <div className="flex justify-between w-full p-1">
              <div>Contact Info</div>
              <div>Last updated:</div>  
            </div>
            <textarea
              className="w-full 2xl:h-64 h-80 p-1"
              placeholder="Enter contact info"
            />
          </div>
        )}

        {activeTab === "about" && (
          <div className='bg-white rounded-xl p-2 text-sm'>
            <div className="flex justify-between w-full p-1">
              <div>About Info</div>
              <div>Last updated:</div>
            </div>
            <textarea
              className="w-full 2xl:h-64 h-80 p-1"
              placeholder="Enter about info"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default UpdateInfo;
