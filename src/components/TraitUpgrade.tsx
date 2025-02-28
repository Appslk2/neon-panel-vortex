
import React, { useState } from 'react';
import { Zap, ImagePlus } from 'lucide-react';

const TraitUpgrade: React.FC = () => {
  const [traitType, setTraitType] = useState('');
  const [upgradeMethod, setUpgradeMethod] = useState('withoutNftIds');
  const [nftIds, setNftIds] = useState('');
  const [fileName, setFileName] = useState('');
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  
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
      
      // Create image preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleMethodSelection = (method: string) => {
    setUpgradeMethod(method);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ traitType, upgradeMethod, nftIds, fileName });
    // Handle upgrade logic here
    alert(`Upgrade initiated for ${traitType} trait with method: ${upgradeMethod}`);
  };
  
  const handleCancel = () => {
    setTraitType('');
    setUpgradeMethod('withoutNftIds');
    setNftIds('');
    setFileName('');
    setImagePreview(null);
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
              {imagePreview ? (
                <div className="mb-4">
                  <img 
                    src={imagePreview} 
                    alt="Preview" 
                    className="max-h-48 rounded-md object-contain"
                  />
                </div>
              ) : (
                <ImagePlus className="w-16 h-16 text-futuristic-silver/40 mb-4" />
              )}
              <p className="text-futuristic-silver text-center mb-2">
                {fileName ? fileName : "Drag and drop or click to upload"}
              </p>
              <p className="text-futuristic-silver/60 text-sm text-center">
                Supports JPG, PNG, GIF (Max 10MB)
              </p>
            </div>
          </div>

          {/* Trait Type Dropdown */}
          <div className="mb-8">
            <label htmlFor="upgradeTraitType" className="block text-futuristic-silver mb-2">Trait Upgrade Type</label>
            <div className="relative">
              <select
                id="upgradeTraitType"
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

          {/* Upgrade Method Selection */}
          <div className="mb-6">
            <label className="block text-futuristic-silver mb-3">Upgrade Initiation Method</label>
            <div className="flex space-x-4">
              <label
                className={`flex-1 p-4 rounded-lg border cursor-pointer transition-all ${
                  upgradeMethod === 'withoutNftIds' 
                    ? 'border-futuristic-green bg-futuristic-green/10' 
                    : 'border-futuristic-darkGray bg-futuristic-black'
                }`}
              >
                <input
                  type="radio"
                  name="upgradeMethod"
                  value="withoutNftIds"
                  checked={upgradeMethod === 'withoutNftIds'}
                  onChange={() => handleMethodSelection('withoutNftIds')}
                  className="hidden"
                />
                <div className="flex items-center mb-2">
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mr-2 ${
                    upgradeMethod === 'withoutNftIds' 
                      ? 'border-futuristic-green' 
                      : 'border-futuristic-darkGray'
                  }`}>
                    {upgradeMethod === 'withoutNftIds' && (
                      <div className="w-2.5 h-2.5 rounded-full bg-futuristic-green"></div>
                    )}
                  </div>
                  <span className="text-futuristic-silver font-medium">Without NFT IDs</span>
                </div>
                <p className="text-sm text-futuristic-silver/60 pl-7">
                  Apply upgrade to all qualifying NFTs
                </p>
              </label>
              
              <label 
                className={`flex-1 p-4 rounded-lg border cursor-pointer transition-all ${
                  upgradeMethod === 'withNftIds' 
                    ? 'border-futuristic-green bg-futuristic-green/10' 
                    : 'border-futuristic-darkGray bg-futuristic-black'
                }`}
              >
                <input
                  type="radio"
                  name="upgradeMethod"
                  value="withNftIds"
                  checked={upgradeMethod === 'withNftIds'}
                  onChange={() => handleMethodSelection('withNftIds')}
                  className="hidden"
                />
                <div className="flex items-center mb-2">
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mr-2 ${
                    upgradeMethod === 'withNftIds' 
                      ? 'border-futuristic-green' 
                      : 'border-futuristic-darkGray'
                  }`}>
                    {upgradeMethod === 'withNftIds' && (
                      <div className="w-2.5 h-2.5 rounded-full bg-futuristic-green"></div>
                    )}
                  </div>
                  <span className="text-futuristic-silver font-medium">With NFT IDs</span>
                </div>
                <p className="text-sm text-futuristic-silver/60 pl-7">
                  Apply upgrade to specific NFT IDs only
                </p>
              </label>
            </div>
          </div>

          {/* NFT IDs Input (conditional) */}
          {upgradeMethod === 'withNftIds' && (
            <div className="mb-8 animate-fade-in">
              <label htmlFor="nftIds" className="block text-futuristic-silver mb-2">NFT IDs</label>
              <textarea
                id="nftIds"
                className="w-full bg-futuristic-black border border-futuristic-darkGray rounded-md px-4 py-3 text-futuristic-silver focus:outline-none focus:border-futuristic-green transition-colors"
                placeholder="Enter NFT IDs separated by commas (e.g. 1234, 5678, 9012)"
                rows={3}
                value={nftIds}
                onChange={(e) => setNftIds(e.target.value)}
              />
              <p className="text-xs text-futuristic-silver/60 mt-1">Optional: Leave blank to apply to all owned NFTs</p>
            </div>
          )}

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
              onClick={handleCancel}
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
