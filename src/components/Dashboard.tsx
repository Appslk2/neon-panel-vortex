
import React from 'react';

const Dashboard: React.FC = () => {
  const stats = [
    { title: "Total Users", value: "24,532", change: "+12.4%" },
    { title: "Revenue", value: "$12,389", change: "+8.7%" },
    { title: "Active Sessions", value: "1,293", change: "+23.1%" },
    { title: "Conversion Rate", value: "3.42%", change: "-2.3%" }
  ];

  return (
    <div className="section-fadeIn p-8 w-full">
      <div className="flex items-center">
        <h1 className="text-3xl font-light text-futuristic-silver">Dashboard</h1>
        <div className="ml-4 px-3 py-1 rounded-full bg-futuristic-green/10 text-futuristic-green text-xs">
          Live Data
        </div>
      </div>
      
      <p className="mt-2 text-futuristic-silver/60">System overview and key metrics</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {stats.map((stat, index) => (
          <div key={index} className="card p-5">
            <p className="text-futuristic-silver/60 text-sm">{stat.title}</p>
            <div className="flex items-end justify-between mt-2">
              <h3 className="text-2xl text-futuristic-silver font-light">{stat.value}</h3>
              <p className={`text-sm ${stat.change.startsWith('+') ? 'text-futuristic-green' : 'text-red-400'}`}>
                {stat.change}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
        <div className="lg:col-span-2 card p-5 h-64">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-futuristic-silver font-light">Performance Overview</h3>
            <div className="flex space-x-2">
              <div className="px-3 py-1 rounded-full bg-futuristic-darkGray text-futuristic-silver/60 text-xs">
                Daily
              </div>
              <div className="px-3 py-1 rounded-full bg-futuristic-green/20 text-futuristic-green text-xs">
                Weekly
              </div>
              <div className="px-3 py-1 rounded-full bg-futuristic-darkGray text-futuristic-silver/60 text-xs">
                Monthly
              </div>
            </div>
          </div>
          <div className="h-full flex items-center justify-center">
            <div className="w-full h-32 flex items-end justify-around">
              {[35, 48, 62, 74, 58, 65, 80, 72, 68, 75, 82, 65].map((height, i) => (
                <div key={i} className="relative h-full w-full mx-1 flex items-end">
                  <div 
                    className="w-full bg-futuristic-green/20 rounded-sm relative overflow-hidden"
                    style={{ height: `${height}%` }}
                  >
                    <div 
                      className="absolute bottom-0 left-0 w-full bg-futuristic-green/40" 
                      style={{ height: `${height * 0.6}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="card p-5 h-64">
          <h3 className="text-futuristic-silver font-light mb-4">System Status</h3>
          <div className="space-y-4">
            {[
              { name: "Main Server", status: "Operational", value: 98 },
              { name: "Database", status: "Operational", value: 100 },
              { name: "API Gateway", status: "Degraded", value: 72 },
              { name: "CDN Network", status: "Operational", value: 94 }
            ].map((item, i) => (
              <div key={i} className="w-full">
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-futuristic-silver/80">{item.name}</span>
                  <span className={`text-xs ${
                    item.value > 90 ? 'text-futuristic-green' : 
                    item.value > 80 ? 'text-yellow-400' : 'text-red-400'
                  }`}>{item.status}</span>
                </div>
                <div className="w-full h-1.5 bg-futuristic-darkGray rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full ${
                      item.value > 90 ? 'bg-futuristic-green' : 
                      item.value > 80 ? 'bg-yellow-400' : 'bg-red-400'
                    }`} 
                    style={{ width: `${item.value}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="card p-5 mt-8">
        <h3 className="text-futuristic-silver font-light mb-4">Recent Activities</h3>
        <div className="space-y-4">
          {[
            { user: "System", action: "Scheduled maintenance completed", time: "2 minutes ago", icon: "🔧" },
            { user: "Jane Cooper", action: "Created new project", time: "24 minutes ago", icon: "📁" },
            { user: "Robert Fox", action: "Updated security settings", time: "1 hour ago", icon: "🔒" },
            { user: "Jenny Wilson", action: "Deployed new version", time: "3 hours ago", icon: "🚀" }
          ].map((activity, i) => (
            <div key={i} className="flex items-start p-3 hover:bg-futuristic-darkGray/40 rounded-lg transition-colors">
              <div className="w-8 h-8 rounded-full bg-futuristic-darkGray flex items-center justify-center mr-3">
                <span className="text-xs">{activity.icon}</span>
              </div>
              <div>
                <p className="text-futuristic-silver">{activity.action}</p>
                <div className="flex text-xs text-futuristic-silver/60 mt-1">
                  <p>{activity.user}</p>
                  <span className="mx-2">•</span>
                  <p>{activity.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
