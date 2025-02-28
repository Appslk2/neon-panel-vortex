
import React, { useState } from 'react';
import { Zap } from 'lucide-react';

const TraitUpgrade: React.FC = () => {
  const [traitType, setTraitType] = useState('');
  
  const traitTypes = [
    "Background",
    "Special Power",
    "Weapons and Gear",
    "Body",
    "Skull",
    "Head",
    "Eyes",
    "Mouth"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ traitType });
    // Handle upgrade logic here
  };

  return (
    <div className="section-fadeIn p-8 w-full">
      <div className="flex items-center">
        <h1 className="text-3xl font-light text-futuristic-silver">Trait Upgrade</h1>
        <div className="ml-4 px-3 py-1 rounded-full bg-futuristic-green/10 text-futuristic-green text-xs">
          Upgrade Section
        </div>
      </div>
      
      <p className="mt-2 text-futuristic-silver/60">Upgrade NFT traits to enhance properties</p>
      
      <div className="card p-6 mt-8 max-w-3xl mx-auto">
        <form onSubmit={handleSubmit}>
          {/* Trait Type Dropdown */}
          <div className="mb-8">
            <label className="block text-futuristic-silver mb-2">Trait Upgrade Type</label>
            <div className="relative">
              <select
                className="w-full bg-futuristic-black border border-futuristic-darkGray rounded-md px-4 py-3 text-futuristic-silver focus:outline-none focus:border-futuristic-green transition-colors appearance-none"
                value={traitType}
                onChange={(e) => setTraitType(e.target.value)}
              >
                <option value="" disabled>Select trait type to upgrade</option>
                {traitTypes.map((type, index) => (
                  <option key={index} value={type}>{type}</option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg className="w-5 h-5 text-futuristic-silver" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-futuristic-darkGray/40 rounded-xl p-6 mb-8">
            <h3 className="text-futuristic-silver mb-4">Upgrade Benefits</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="mt-1 mr-3 flex-shrink-0 w-5 h-5 rounded-full bg-futuristic-green/20 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-futuristic-green"></div>
                </div>
                <span className="text-futuristic-silver/80">Increased rarity score</span>
              </li>
              <li className="flex items-start">
                <div className="mt-1 mr-3 flex-shrink-0 w-5 h-5 rounded-full bg-futuristic-green/20 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-futuristic-green"></div>
                </div>
                <span className="text-futuristic-silver/80">Enhanced visual effects</span>
              </li>
              <li className="flex items-start">
                <div className="mt-1 mr-3 flex-shrink-0 w-5 h-5 rounded-full bg-futuristic-green/20 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-futuristic-green"></div>
                </div>
                <span className="text-futuristic-silver/80">Additional utility in ecosystem</span>
              </li>
            </ul>
          </div>

          <div className="mt-8 flex justify-end">
            <button 
              type="button" 
              className="px-6 py-3 bg-futuristic-darkGray text-futuristic-silver rounded-md hover:bg-futuristic-darkGray/80 transition-colors mr-4"
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="px-6 py-3 bg-futuristic-green text-white rounded-md hover:bg-futuristic-darkGreen transition-colors flex items-center"
            >
              <Zap className="w-5 h-5 mr-2" />
              Initiate Upgrade
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TraitUpgrade;
