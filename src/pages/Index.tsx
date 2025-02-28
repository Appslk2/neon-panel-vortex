
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import NFTTraitUpload from '../components/NFTTraitUpload';
import TraitUpgrade from '../components/TraitUpgrade';
import Airdrop from '../components/Airdrop';

const Index = () => {
  const [activeSection, setActiveSection] = useState('nftTraitUpload');

  return (
    <div className="flex min-h-screen overflow-hidden bg-futuristic-black">
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="flex-1 overflow-y-auto">
        {activeSection === 'nftTraitUpload' && <NFTTraitUpload />}
        {activeSection === 'traitUpgrade' && <TraitUpgrade />}
        {activeSection === 'airdrop' && <Airdrop />}
      </main>
    </div>
  );
};

export default Index;
