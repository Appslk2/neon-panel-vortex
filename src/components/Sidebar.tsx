
import React from 'react';
import { UploadCloud, Zap, Send, Moon, Sun } from 'lucide-react';
import { useTheme } from '../utils/theme-context';
import { useIsMobile } from '../hooks/use-mobile';

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection, setActiveSection }) => {
  const { theme, toggleTheme } = useTheme();
  const isMobile = useIsMobile();
  
  return (
    <div className={`h-screen w-auto ${isMobile ? 'w-20' : 'w-64'} bg-futuristic-black border-r border-futuristic-darkGray flex flex-col items-center py-8 ${theme === 'light' ? 'light-sidebar' : ''}`}>
      <div className="mb-12 w-12 h-12 rounded-full bg-futuristic-green flex items-center justify-center futuristic-glow">
        <div className="w-8 h-8 rounded-full bg-futuristic-black flex items-center justify-center">
          <div className="w-6 h-6 rounded-full bg-futuristic-green/40"></div>
        </div>
      </div>
      
      <nav className="flex flex-col items-center w-full flex-1">
        <button 
          className={`sidebar-button ${activeSection === 'nftTraitUpload' ? 'active' : ''} ${!isMobile ? 'flex-row justify-start px-6 w-56' : ''}`}
          onClick={() => setActiveSection('nftTraitUpload')}
          aria-label="NFT Trait Upload"
        >
          <UploadCloud className="w-6 h-6" />
          {!isMobile && <span className="ml-3 text-sm font-medium">Trait Type</span>}
        </button>
        
        <button 
          className={`sidebar-button ${activeSection === 'traitUpgrade' ? 'active' : ''} ${!isMobile ? 'flex-row justify-start px-6 w-56' : ''}`}
          onClick={() => setActiveSection('traitUpgrade')}
          aria-label="Trait Upgrade"
        >
          <Zap className="w-6 h-6" />
          {!isMobile && <span className="ml-3 text-sm font-medium">Trait Upgrade</span>}
        </button>
        
        <button 
          className={`sidebar-button ${activeSection === 'airdrop' ? 'active' : ''} ${!isMobile ? 'flex-row justify-start px-6 w-56' : ''}`}
          onClick={() => setActiveSection('airdrop')}
          aria-label="Airdrop"
        >
          <Send className="w-6 h-6" />
          {!isMobile && <span className="ml-3 text-sm font-medium">Airdrop</span>}
        </button>
      </nav>
      
      <button 
        onClick={toggleTheme}
        className="mt-auto mb-6 w-10 h-10 rounded-full bg-futuristic-darkGray flex items-center justify-center cursor-pointer hover:bg-futuristic-darkGray/80 transition-all duration-300"
        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      >
        {theme === 'dark' ? (
          <Sun className="w-5 h-5 text-futuristic-silver" />
        ) : (
          <Moon className="w-5 h-5 text-futuristic-silver" />
        )}
      </button>
    </div>
  );
};

export default Sidebar;
