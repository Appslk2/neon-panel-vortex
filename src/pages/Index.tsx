
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Dashboard from '../components/Dashboard';
import Analytics from '../components/Analytics';
import Settings from '../components/Settings';

const Index = () => {
  const [activeSection, setActiveSection] = useState('dashboard');

  return (
    <div className="flex min-h-screen overflow-hidden bg-futuristic-black">
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="flex-1 overflow-y-auto">
        {activeSection === 'dashboard' && <Dashboard />}
        {activeSection === 'analytics' && <Analytics />}
        {activeSection === 'settings' && <Settings />}
      </main>
    </div>
  );
};

export default Index;
