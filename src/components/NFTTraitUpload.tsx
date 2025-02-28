
import React, { useState } from 'react';
import { Upload, ImagePlus } from 'lucide-react';

const NFTTraitUpload: React.FC = () => {
  const [traitName, setTraitName] = useState('');
  const [traitType, setTraitType] = useState('');
  const [fileName, setFileName] = useState('');
  
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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ traitName, traitType, fileName });
    // Handle upload logic here
  };

  return (
    <div className="section-fadeIn p-8 w-full">
      <div className="flex items-center">
        <h1 className="text-3xl font-light text-futuristic-silver">NFT Trait Upload</h1>
        <div className="ml-4 px-3 py-1 rounded-full bg-futuristic-green/10 text-futuristic-green text-xs">
          Upload Section
        </div>
      </div>
      
      <p className="mt-2 text-futuristic-silver/60">Upload new NFT traits to the collection</p>
      
      <div className="card p-6 mt-8 max-w-3xl mx-auto">
        <form onSubmit={handleSubmit}>
          {/* Image Upload */}
          <div className="mb-8">
            <label className="block text-futuristic-silver mb-2">NFT Trait Image</label>
            <div className="relative border-2 border-dashed border-futuristic-darkGray rounded-lg p-8 flex flex-col items-center justify-center">
              <input 
                type="file" 
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                accept="image/*"
                onChange={handleFileChange}
              />
              <ImagePlus className="w-16 h-16 text-futuristic-silver/40 mb-4" />
              <p className="text-futuristic-silver text-center mb-2">
                {fileName ? fileName : "Drag and drop or click to upload"}
              </p>
              <p className="text-futuristic-silver/60 text-sm text-center">
                Supports JPG, PNG, GIF (Max 10MB)
              </p>
            </div>
          </div>

          {/* Trait Name */}
          <div className="mb-6">
            <label className="block text-futuristic-silver mb-2">Trait Name</label>
            <input 
              type="text" 
              className="w-full bg-futuristic-black border border-futuristic-darkGray rounded-md px-4 py-3 text-futuristic-silver focus:outline-none focus:border-futuristic-green transition-colors"
              placeholder="Enter trait name"
              value={traitName}
              onChange={(e) => setTraitName(e.target.value)}
            />
          </div>

          {/* Trait Type Dropdown */}
          <div className="mb-8">
            <label className="block text-futuristic-silver mb-2">Trait Type</label>
            <div className="relative">
              <select
                className="w-full bg-futuristic-black border border-futuristic-darkGray rounded-md px-4 py-3 text-futuristic-silver focus:outline-none focus:border-futuristic-green transition-colors appearance-none"
                value={traitType}
                onChange={(e) => setTraitType(e.target.value)}
              >
                <option value="" disabled>Select trait type</option>
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
              <Upload className="w-5 h-5 mr-2" />
              Upload Trait
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NFTTraitUpload;
