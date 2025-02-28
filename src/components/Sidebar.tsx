
import React from 'react';
import { UploadCloud, Zap, Send } from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection, setActiveSection }) => {
  return (
    <div className="h-screen w-20 bg-futuristic-black border-r border-futuristic-darkGray flex flex-col items-center py-8">
      <div className="mb-12 w-12 h-12 rounded-full bg-futuristic-green flex items-center justify-center futuristic-glow">
        <div className="w-8 h-8 rounded-full bg-futuristic-black flex items-center justify-center">
          <div className="w-6 h-6 rounded-full bg-futuristic-green/40"></div>
        </div>
      </div>
      
      <nav className="flex flex-col items-center w-full flex-1">
        <button 
          className={`sidebar-button ${activeSection === 'nftTraitUpload' ? 'active' : ''}`}
          onClick={() => setActiveSection('nftTraitUpload')}
          aria-label="NFT Trait Upload"
        >
          <UploadCloud className="w-6 h-6" />
        </button>
        
        <button 
          className={`sidebar-button ${activeSection === 'traitUpgrade' ? 'active' : ''}`}
          onClick={() => setActiveSection('traitUpgrade')}
          aria-label="Trait Upgrade"
        >
          <Zap className="w-6 h-6" />
        </button>
        
        <button 
          className={`sidebar-button ${activeSection === 'airdrop' ? 'active' : ''}`}
          onClick={() => setActiveSection('airdrop')}
          aria-label="Airdrop"
        >
          <Send className="w-6 h-6" />
        </button>
      </nav>
      
      <div className="mt-auto mb-6 w-10 h-10 rounded-full bg-futuristic-darkGray flex items-center justify-center cursor-pointer hover:bg-futuristic-darkGray/80 transition-all duration-300">
        <div className="w-6 h-6 rounded-full bg-futuristic-silver"></div>
      </div>
    </div>
  );
};

export default Sidebar;
