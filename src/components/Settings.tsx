
import React from 'react';

const Settings: React.FC = () => {
  return (
    <div className="section-fadeIn p-8 w-full">
      <h1 className="text-3xl font-light text-futuristic-silver">Settings</h1>
      <p className="mt-2 text-futuristic-silver/60">System configuration and preferences</p>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <div className="card p-6 col-span-2">
          <h3 className="text-futuristic-silver font-light mb-6">System Settings</h3>
          
          <div className="space-y-6">
            <div>
              <label className="block text-futuristic-silver mb-2">System Name</label>
              <input 
                type="text" 
                className="w-full bg-futuristic-black border border-futuristic-darkGray rounded-md px-4 py-2 text-futuristic-silver focus:outline-none focus:border-futuristic-green transition-colors"
                defaultValue="Futuristic Admin Panel"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-futuristic-silver mb-2">API Endpoint</label>
                <input 
                  type="text" 
                  className="w-full bg-futuristic-black border border-futuristic-darkGray rounded-md px-4 py-2 text-futuristic-silver focus:outline-none focus:border-futuristic-green transition-colors"
                  defaultValue="https://api.example.com/v1"
                />
              </div>
              
              <div>
                <label className="block text-futuristic-silver mb-2">API Key</label>
                <input 
                  type="password" 
                  className="w-full bg-futuristic-black border border-futuristic-darkGray rounded-md px-4 py-2 text-futuristic-silver focus:outline-none focus:border-futuristic-green transition-colors"
                  defaultValue="••••••••••••••••"
                />
              </div>
            </div>
            
            <div className="border-t border-futuristic-darkGray pt-6">
              <label className="block text-futuristic-silver mb-2">Data Refresh Rate</label>
              <div className="flex space-x-4">
                {["30 seconds", "1 minute", "5 minutes", "15 minutes", "30 minutes"].map((option, i) => (
                  <div key={i} className="flex items-center">
                    <input 
                      type="radio" 
                      id={`refresh-${i}`} 
                      name="refresh-rate" 
                      className="hidden"
                      defaultChecked={i === 1}
                    />
                    <label 
                      htmlFor={`refresh-${i}`}
                      className={`px-3 py-1 rounded-full text-sm cursor-pointer transition-colors ${
                        i === 1 
                          ? 'bg-futuristic-green/20 text-futuristic-green' 
                          : 'bg-futuristic-darkGray text-futuristic-silver/60 hover:bg-futuristic-darkGray/80'
                      }`}
                    >
                      {option}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="border-t border-futuristic-darkGray pt-6">
              <h4 className="text-futuristic-silver mb-4">Notification Settings</h4>
              
              {[
                "System alerts", 
                "Performance warnings", 
                "User activity", 
                "Updates available"
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between py-3 border-b border-futuristic-darkGray/30">
                  <span className="text-futuristic-silver">{item}</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      defaultChecked={i !== 2} 
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-futuristic-darkGray peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-futuristic-silver after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-futuristic-green"></div>
                  </label>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-8 flex justify-end">
            <button className="px-6 py-2 bg-futuristic-darkGray text-futuristic-silver rounded-md hover:bg-futuristic-darkGray/80 transition-colors mr-4">
              Cancel
            </button>
            <button className="px-6 py-2 bg-futuristic-green text-white rounded-md hover:bg-futuristic-darkGreen transition-colors">
              Save Changes
            </button>
          </div>
        </div>
        
        <div className="space-y-8">
          <div className="card p-6">
            <h3 className="text-futuristic-silver font-light mb-4">Theme</h3>
            
            <div className="space-y-4">
              <div>
                <p className="text-futuristic-silver/60 mb-2">Accent Color</p>
                <div className="flex space-x-3">
                  {["#4ade80", "#60a5fa", "#f43f5e", "#facc15", "#c084fc"].map((color, i) => (
                    <div 
                      key={i}
                      className={`w-8 h-8 rounded-full cursor-pointer ${i === 0 ? 'ring-2 ring-futuristic-green ring-offset-2 ring-offset-futuristic-black' : ''}`}
                      style={{ backgroundColor: color }}
                    ></div>
                  ))}
                </div>
              </div>
              
              <div>
                <p className="text-futuristic-silver/60 mb-2">Interface Style</p>
                <div className="grid grid-cols-2 gap-3">
                  {["Dark", "Light"].map((style, i) => (
                    <div 
                      key={i}
                      className={`p-3 rounded-md cursor-pointer text-center ${
                        i === 0 
                          ? 'bg-futuristic-darkGray text-futuristic-silver border-2 border-futuristic-green' 
                          : 'bg-futuristic-black border border-futuristic-darkGray text-futuristic-silver/60'
                      }`}
                    >
                      {style}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="card p-6">
            <h3 className="text-futuristic-silver font-light mb-4">System Info</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-futuristic-silver/60">Version</span>
                <span className="text-futuristic-silver">2.3.14</span>
              </div>
              <div className="flex justify-between">
                <span className="text-futuristic-silver/60">Last Updated</span>
                <span className="text-futuristic-silver">3 days ago</span>
              </div>
              <div className="flex justify-between">
                <span className="text-futuristic-silver/60">Update Status</span>
                <span className="text-futuristic-green">Up to date</span>
              </div>
              <div className="flex justify-between">
                <span className="text-futuristic-silver/60">License</span>
                <span className="text-futuristic-silver">PRO</span>
              </div>
              
              <button className="w-full mt-2 py-2 bg-futuristic-darkGray text-futuristic-silver rounded-md hover:bg-futuristic-darkGray/80 transition-colors">
                Check for Updates
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
