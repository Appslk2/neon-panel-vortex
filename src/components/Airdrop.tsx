
import React, { useState } from 'react';
import { Send, FileUp, Download } from 'lucide-react';

const Airdrop: React.FC = () => {
  const [walletAddress, setWalletAddress] = useState('');
  const [nftQuantity, setNftQuantity] = useState('0');
  const [tokenId, setTokenId] = useState('');
  const [selectedArmor, setSelectedArmor] = useState('');
  const [armorQuantity, setArmorQuantity] = useState('1');
  const [armorWalletAddress, setArmorWalletAddress] = useState('');
  const [walletList, setWalletList] = useState<Array<{walletAddress: string}>>([]);
  const [tokenList, setTokenList] = useState<Array<{tokenId: string}>>([]);
  const [armorList, setArmorList] = useState<Array<{tokenId: string, walletAddress: string, quantity: string}>>([]);

  const handleNftMint = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Minting ${nftQuantity} NFTs`);
    alert(`Minting ${nftQuantity} NFTs`);
  };

  const handleAddWallet = () => {
    if (walletAddress.trim()) {
      setWalletList([...walletList, { walletAddress }]);
      setWalletAddress('');
    }
  };

  const handleTokenAdd = () => {
    if (tokenId.trim()) {
      setTokenList([...tokenList, { tokenId }]);
      setTokenId('');
    }
  };

  const handleReveal = () => {
    console.log('Revealing NFTs');
    alert('NFTs revealed successfully!');
  };

  const handleArmorsAdd = () => {
    if (selectedArmor && armorWalletAddress && armorQuantity) {
      setArmorList([...armorList, { 
        tokenId: selectedArmor, 
        walletAddress: armorWalletAddress, 
        quantity: armorQuantity 
      }]);
    }
  };

  const handleAirdropArmor = () => {
    console.log('Airdropping armors', armorList);
    alert(`Armors airdropped to ${armorList.length} addresses!`);
  };

  const handleAirdropWallets = () => {
    console.log('Airdropping to wallets', walletList);
    alert(`Airdrop sent to ${walletList.length} wallet addresses!`);
  };

  const handleAddFile = () => {
    console.log('File upload functionality would go here');
    alert('File upload feature is coming soon!');
  };

  const handleSampleFile = () => {
    console.log('Download sample file');
    alert('Sample file download initiated!');
  };

  return (
    <div className="section-fadeIn p-4 w-full">
      <h1 className="text-2xl font-bold text-futuristic-silver mb-4">NFTs Settings</h1>
      
      {/* NFT Mint Section */}
      <div className="bg-white dark:bg-futuristic-darkGray shadow-md rounded-md mb-6 overflow-hidden">
        <div className="bg-futuristic-green text-white py-2 px-4 font-medium">
          Robotic Rabbit Syndicate
        </div>
        <div className="p-4">
          <div className="mb-4">
            <label htmlFor="nftQuantity" className="block text-futuristic-silver mb-2">
              Number of NFTs
            </label>
            <input 
              id="nftQuantity"
              type="number"
              min="0"
              className="w-full bg-futuristic-black border border-futuristic-darkGray rounded-md px-4 py-2 text-futuristic-silver focus:outline-none focus:border-futuristic-green transition-colors"
              placeholder="0"
              value={nftQuantity}
              onChange={(e) => setNftQuantity(e.target.value)}
            />
          </div>
          <button 
            onClick={handleNftMint}
            className="px-4 py-2 bg-futuristic-green text-white rounded-md hover:bg-futuristic-darkGreen transition-colors"
          >
            Mint
          </button>
        </div>
      </div>

      {/* Syndicate Airdrop Section */}
      <div className="bg-white dark:bg-futuristic-darkGray shadow-md rounded-md mb-6 overflow-hidden">
        <div className="bg-futuristic-green text-white py-2 px-4 font-medium">
          SYNDICATE AIRDROP
        </div>
        <div className="p-4">
          <div className="mb-4">
            <label htmlFor="walletAddress" className="block text-futuristic-silver mb-2">
              Wallet Address
            </label>
            <div className="flex">
              <input 
                id="walletAddress"
                type="text"
                className="flex-grow bg-futuristic-black border border-futuristic-darkGray rounded-md px-4 py-2 mr-2 text-futuristic-silver focus:outline-none focus:border-futuristic-green transition-colors"
                placeholder="Please enter wallet address"
                value={walletAddress}
                onChange={(e) => setWalletAddress(e.target.value)}
              />
              <button 
                onClick={handleAddWallet}
                className="px-4 py-2 bg-futuristic-green text-white rounded-md hover:bg-futuristic-darkGreen transition-colors"
              >
                Add
              </button>
            </div>
          </div>
          
          <div className="flex mb-4">
            <button 
              onClick={handleAddFile}
              className="px-4 py-2 bg-futuristic-green text-white rounded-md hover:bg-futuristic-darkGreen transition-colors flex items-center mr-2"
            >
              <FileUp className="w-4 h-4 mr-2" />
              Add File
            </button>
            
            <button 
              onClick={handleSampleFile}
              className="px-4 py-2 bg-futuristic-green text-white rounded-md hover:bg-futuristic-darkGreen transition-colors flex items-center"
            >
              <Download className="w-4 h-4 mr-2" />
              Sample File
            </button>
          </div>
          
          <button 
            onClick={handleAirdropWallets}
            className="px-4 py-2 bg-futuristic-green text-white rounded-md hover:bg-futuristic-darkGreen transition-colors"
          >
            Airdrop
          </button>
        </div>
      </div>

      {/* Syndicate NFT Reveal Section */}
      <div className="bg-white dark:bg-futuristic-darkGray shadow-md rounded-md mb-6 overflow-hidden">
        <div className="bg-futuristic-green text-white py-2 px-4 font-medium">
          SYNDICATE NFT REVEAL
        </div>
        <div className="p-4">
          <div className="mb-4">
            <label htmlFor="tokenId" className="block text-futuristic-silver mb-2">
              Token ID
            </label>
            <div className="flex">
              <input 
                id="tokenId"
                type="text"
                className="flex-grow bg-futuristic-black border border-futuristic-darkGray rounded-md px-4 py-2 mr-2 text-futuristic-silver focus:outline-none focus:border-futuristic-green transition-colors"
                placeholder="Enter token ID"
                value={tokenId}
                onChange={(e) => setTokenId(e.target.value)}
              />
              <button 
                onClick={handleTokenAdd}
                className="px-4 py-2 bg-futuristic-green text-white rounded-md hover:bg-futuristic-darkGreen transition-colors"
              >
                Add
              </button>
            </div>
          </div>
          
          <button 
            onClick={handleReveal}
            className="px-4 py-2 bg-futuristic-green text-white rounded-md hover:bg-futuristic-darkGreen transition-colors"
          >
            Reveal
          </button>
        </div>
      </div>

      {/* Armors Airdrop Section */}
      <div className="bg-white dark:bg-futuristic-darkGray shadow-md rounded-md overflow-hidden">
        <div className="bg-futuristic-green text-white py-2 px-4 font-medium">
          Armors Airdrop
        </div>
        <div className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label htmlFor="armorTokenId" className="block text-futuristic-silver mb-2">
                Armor Token ID
              </label>
              <select
                id="armorTokenId"
                className="w-full bg-futuristic-black border border-futuristic-darkGray rounded-md px-4 py-2 text-futuristic-silver focus:outline-none focus:border-futuristic-green transition-colors"
                value={selectedArmor}
                onChange={(e) => setSelectedArmor(e.target.value)}
              >
                <option value="">Select Armor</option>
                <option value="Tactical Turret Rabbequin (10)">Tactical Turret Rabbequin (10)</option>
                <option value="Heavy Assault Rabbequin (20)">Heavy Assault Rabbequin (20)</option>
                <option value="Stealth Rabbequin (30)">Stealth Rabbequin (30)</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="armorWalletAddress" className="block text-futuristic-silver mb-2">
                Wallet Address
              </label>
              <input 
                id="armorWalletAddress"
                type="text"
                className="w-full bg-futuristic-black border border-futuristic-darkGray rounded-md px-4 py-2 text-futuristic-silver focus:outline-none focus:border-futuristic-green transition-colors"
                placeholder="Enter wallet address"
                value={armorWalletAddress}
                onChange={(e) => setArmorWalletAddress(e.target.value)}
              />
            </div>
            
            <div>
              <label htmlFor="armorQuantity" className="block text-futuristic-silver mb-2">
                Quantity
              </label>
              <div className="flex">
                <input 
                  id="armorQuantity"
                  type="number"
                  min="1"
                  className="flex-grow bg-futuristic-black border border-futuristic-darkGray rounded-md px-4 py-2 mr-2 text-futuristic-silver focus:outline-none focus:border-futuristic-green transition-colors"
                  placeholder="1"
                  value={armorQuantity}
                  onChange={(e) => setArmorQuantity(e.target.value)}
                />
                <button 
                  onClick={handleArmorsAdd}
                  className="px-4 py-2 bg-futuristic-green text-white rounded-md hover:bg-futuristic-darkGreen transition-colors"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
          
          {armorList.length > 0 && (
            <div className="mb-4">
              <div className="grid grid-cols-3 font-medium text-futuristic-silver mb-2 border-b border-futuristic-darkGray pb-2">
                <div>Wallet Address</div>
                <div>Token ID</div>
                <div>Quantity</div>
              </div>
              {armorList.map((item, index) => (
                <div key={index} className="grid grid-cols-3 text-futuristic-silver py-2 border-b border-futuristic-darkGray/30">
                  <div className="truncate" title={item.walletAddress}>{item.walletAddress}</div>
                  <div className="truncate" title={item.tokenId}>{item.tokenId}</div>
                  <div>{item.quantity}</div>
                </div>
              ))}
            </div>
          )}
          
          <button 
            onClick={handleAirdropArmor}
            className="px-4 py-2 bg-futuristic-green text-white rounded-md hover:bg-futuristic-darkGreen transition-colors"
          >
            Airdrop
          </button>
        </div>
      </div>
    </div>
  );
};

export default Airdrop;
