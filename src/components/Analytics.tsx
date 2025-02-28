
import React from 'react';

const Analytics: React.FC = () => {
  const metrics = [
    { label: "Page Views", value: "1.2M", change: "+15.3%" },
    { label: "Unique Visitors", value: "548K", change: "+9.2%" },
    { label: "Bounce Rate", value: "32.8%", change: "-3.1%" },
    { label: "Avg. Session", value: "4m 12s", change: "+18.4%" }
  ];

  const channels = [
    { name: "Direct", value: 35, color: "#4ade80" },
    { name: "Organic Search", value: 25, color: "#22c55e" },
    { name: "Social Media", value: 20, color: "#16a34a" },
    { name: "Referral", value: 15, color: "#15803d" },
    { name: "Email", value: 5, color: "#166534" }
  ];

  return (
    <div className="section-fadeIn p-8 w-full">
      <div className="flex items-center">
        <h1 className="text-3xl font-light text-futuristic-silver">Analytics</h1>
        <div className="ml-4 px-3 py-1 rounded-full bg-futuristic-green/10 text-futuristic-green text-xs">
          Last 30 Days
        </div>
      </div>
      
      <p className="mt-2 text-futuristic-silver/60">Performance metrics and insights</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {metrics.map((metric, index) => (
          <div key={index} className="card p-5">
            <p className="text-futuristic-silver/60 text-sm">{metric.label}</p>
            <div className="flex items-end justify-between mt-2">
              <h3 className="text-2xl text-futuristic-silver font-light">{metric.value}</h3>
              <p className={`text-sm ${metric.change.startsWith('+') ? 'text-futuristic-green' : 'text-red-400'}`}>
                {metric.change}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        <div className="card p-5 h-96">
          <h3 className="text-futuristic-silver font-light mb-4">Traffic Overview</h3>
          <div className="h-80 flex items-end mt-5">
            <div className="flex-1 h-full flex items-end">
              {[40, 65, 35, 55, 60, 45, 70, 50, 62, 58, 75, 55].map((height, i) => (
                <div key={i} className="flex-1 flex flex-col items-center justify-end h-full">
                  <div className="w-6 bg-futuristic-green/20 rounded-t-sm relative overflow-hidden mb-2" style={{ height: `${height}%` }}>
                    <div className="absolute bottom-0 left-0 w-full bg-futuristic-green" style={{ height: `${height * 0.6}%` }}></div>
                  </div>
                  <span className="text-xs text-futuristic-silver/40">{`W${i+1}`}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="card p-5 h-96">
          <h3 className="text-futuristic-silver font-light mb-6">Traffic Channels</h3>
          <div className="flex h-64 my-4">
            <div className="w-1/2 h-full flex items-center justify-center">
              <div className="relative w-40 h-40">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  {channels.map((channel, i) => {
                    // Calculate the starting angle for this segment
                    const offset = channels.slice(0, i).reduce((sum, c) => sum + c.value, 0);
                    const startAngle = (offset / 100) * 360;
                    const endAngle = startAngle + (channel.value / 100) * 360;
                    
                    // Convert angles to radians for calculation
                    const startRad = (startAngle - 90) * Math.PI / 180;
                    const endRad = (endAngle - 90) * Math.PI / 180;
                    
                    // Calculate the SVG arc path
                    const x1 = 50 + 40 * Math.cos(startRad);
                    const y1 = 50 + 40 * Math.sin(startRad);
                    const x2 = 50 + 40 * Math.cos(endRad);
                    const y2 = 50 + 40 * Math.sin(endRad);
                    
                    // Determine if the arc should be drawn as a large arc
                    const largeArcFlag = channel.value > 50 ? 1 : 0;
                    
                    return (
                      <path
                        key={i}
                        d={`M 50 50 L ${x1} ${y1} A 40 40 0 ${largeArcFlag} 1 ${x2} ${y2} Z`}
                        fill={channel.color}
                        stroke="#121212"
                        strokeWidth="1"
                      />
                    );
                  })}
                  <circle cx="50" cy="50" r="25" fill="#1e1e1e" />
                </svg>
              </div>
            </div>
            <div className="w-1/2 h-full flex flex-col justify-center space-y-3">
              {channels.map((channel, i) => (
                <div key={i} className="flex items-center">
                  <div className="w-3 h-3 rounded-sm mr-2" style={{ backgroundColor: channel.color }}></div>
                  <div className="flex-1 flex justify-between">
                    <span className="text-sm text-futuristic-silver">{channel.name}</span>
                    <span className="text-sm text-futuristic-silver/60">{channel.value}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="card p-5 mt-8">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-futuristic-silver font-light">Top Pages</h3>
          <div className="px-3 py-1 rounded-full bg-futuristic-darkGray text-futuristic-silver/60 text-xs">
            View All
          </div>
        </div>
        <table className="w-full">
          <thead>
            <tr className="text-left text-futuristic-silver/60 text-sm border-b border-futuristic-darkGray">
              <th className="pb-3 font-normal">Page</th>
              <th className="pb-3 font-normal">Views</th>
              <th className="pb-3 font-normal">Unique</th>
              <th className="pb-3 font-normal">Bounce Rate</th>
              <th className="pb-3 font-normal">Avg. Time</th>
            </tr>
          </thead>
          <tbody>
            {[
              { page: "/home", views: "124,563", unique: "98,651", bounce: "21.8%", time: "1m 32s" },
              { page: "/products", views: "98,457", unique: "87,213", bounce: "35.2%", time: "2m 45s" },
              { page: "/blog", views: "76,315", unique: "64,759", bounce: "42.3%", time: "3m 12s" },
              { page: "/about", views: "45,127", unique: "38,941", bounce: "28.7%", time: "1m 15s" },
              { page: "/contact", views: "32,845", unique: "29,738", bounce: "18.5%", time: "0m 52s" }
            ].map((row, i) => (
              <tr key={i} className="text-sm border-b border-futuristic-darkGray/30 hover:bg-futuristic-darkGray/20">
                <td className="py-4 text-futuristic-silver">{row.page}</td>
                <td className="py-4 text-futuristic-silver/80">{row.views}</td>
                <td className="py-4 text-futuristic-silver/80">{row.unique}</td>
                <td className="py-4 text-futuristic-silver/80">{row.bounce}</td>
                <td className="py-4 text-futuristic-silver/80">{row.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Analytics;
