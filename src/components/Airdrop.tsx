
import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Airdrop: React.FC = () => {
  const [walletAddress, setWalletAddress] = useState('');
  const [nftId, setNftId] = useState('');
  const [amount, setAmount] = useState('1');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ walletAddress, nftId, amount });
    // Handle airdrop logic here
    alert(`Airdrop of ${amount} NFT(s) with ID ${nftId} sent to ${walletAddress}`);
  };
  
  const handleCancel = () => {
    setWalletAddress('');
    setNftId('');
    setAmount('1');
  };

  return (
    <div className="section-fadeIn p-8 w-full">
      <div className="flex items-center">
        <h1 className="text-3xl font-light text-futuristic-silver">NFT Airdrop</h1>
        <div className="ml-4 px-3 py-1 rounded-full bg-futuristic-green/10 text-futuristic-green text-xs">
          Distribution
        </div>
      </div>
      
      <p className="mt-2 text-futuristic-silver/60">Send NFTs to wallet addresses</p>
      
      <div className="card p-6 mt-8 max-w-3xl mx-auto">
        <form onSubmit={handleSubmit}>
          {/* Wallet Address */}
          <div className="mb-6">
            <label htmlFor="walletAddress" className="block text-futuristic-silver mb-2">Wallet Address</label>
            <input 
              id="walletAddress"
              type="text" 
              className="w-full bg-futuristic-black border border-futuristic-darkGray rounded-md px-4 py-3 text-futuristic-silver focus:outline-none focus:border-futuristic-green transition-colors"
              placeholder="Enter recipient wallet address (0x...)"
              value={walletAddress}
              {/*onChange={(e) => setWalletAddress(e.target.value)}*/}
            />
          </div>

          {/* NFT ID */}
          <div className="mb-6">
            <label htmlFor="nftId" className="block text-futuristic-silver mb-2">NFT ID</label>
            <input 
              id="nftId"
              type="text" 
              className="w-full bg-futuristic-black border border-futuristic-darkGray rounded-md px-4 py-3 text-futuristic-silver focus:outline-none focus:border-futuristic-green transition-colors"
              placeholder="Enter NFT ID"
              value={nftId}
              onChange={(e) => setNftId(e.target.value)}
            />
          </div>

          {/* Amount */}
          <div className="mb-8">
            <label htmlFor="amount" className="block text-futuristic-silver mb-2">Amount</label>
            <input 
              id="amount"
              type="number" 
              min="1"
              className="w-full bg-futuristic-black border border-futuristic-darkGray rounded-md px-4 py-3 text-futuristic-silver focus:outline-none focus:border-futuristic-green transition-colors"
              placeholder="Enter amount to send"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>

          {/* <div className="bg-futuristic-darkGray/40 rounded-xl p-4 mb-8 flex items-center">
            <div className="w-10 h-10 rounded-full bg-futuristic-green/20 flex items-center justify-center mr-4">
              <div className="w-5 h-5 text-futuristic-green">ℹ️</div>
            </div>
            <p className="text-futuristic-silver/80 text-sm">
              Please verify all details before initiating the airdrop. This action cannot be undone.
            </p>
          </div>*/}

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
              <Send className="w-5 h-5 mr-2" />
              Send Airdrop
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Airdrop;
