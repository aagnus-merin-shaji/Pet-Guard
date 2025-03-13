import React, { useState } from "react";

const AdminDashboard = () => {
  const [selectedMenu, setSelectedMenu] = useState("Dashboard");
  const [openDropdown, setOpenDropdown] = useState(null);

  const dashboardStats = [
    { title: "Registered Pets",  icon: "🐾" },
    { title: "Lost Pet Alerts", icon: "🔔" },
    { title: "Adoption Requests",  icon: "🏡" },
    { title: "Emergency Reports",  icon: "⚠️" },
    { title: "Total Users",  icon: "👥" },
    { title: "Monthly Analytics", count: "View Report", icon: "📊" },
  ];

  const menuItems = [
    { title: "Dashboard" },
    { title: "Users", subItems: ["View Users", "Manage Roles"] },
    { title: "Lost Pets", subItems: ["Reported Cases", "Found Pets"] },
    { title: "Adoptions", subItems: ["Pending Requests", "Approved Requests"] },
    { title: "Reports", subItems: ["View Reports", "Analytics"] },
  ];

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-5 hidden md:block">
        <h2 className="text-2xl font-bold mb-6">PAW GURDIAN</h2>
        <nav>
          <ul className="space-y-4">
            {menuItems.map((item, index) => (
              <li key={index}>
                <button
                  className={`w-full text-left hover:text-blue-400 ${selectedMenu === item.title ? "text-blue-400" : ""}`}
                  onClick={() => {
                    if (item.subItems) {
                      setOpenDropdown(openDropdown === index ? null : index);
                    } else {
                      setSelectedMenu(item.title);
                      setOpenDropdown(null);
                    }
                  }}
                >
                  {item.title}
                </button>
                {item.subItems && openDropdown === index && (
                  <ul className="ml-4 mt-2 space-y-2">
                    {item.subItems.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <button
                          className="w-full text-left text-gray-300 hover:text-blue-400"
                          onClick={() => setSelectedMenu(subItem)}
                        >
                          {subItem}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Header */}
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold uppercase"></h1>
          <div className="flex space-x-4">
            <button className="bg-red-500 text-white px-4 py-2 rounded-md">Logout</button>
          </div>
        </header>

        {/* Stats Cards */}
        {selectedMenu === "Dashboard" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {dashboardStats.map((stat, index) => (
              <div key={index} className="bg-white shadow-lg p-6 rounded-lg flex items-center space-x-4">
                <span className="text-4xl">{stat.icon}</span>
                <div>
                  <h2 className="text-lg font-semibold">{stat.title}</h2>
                  <p className="text-xl font-bold">{stat.count}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
