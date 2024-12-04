import {
    Search,
    Home,
    Building2,
    Layers,
    ChevronRight,
    Clock,
    CheckCircle,
    List,
  } from "lucide-react";
  import { render } from "react-dom";
  import React, { useState } from "react";
  export default function DamageDashboard() {
    const [activeTab, setActiveTab] = useState("active");
    const [selectedDept, setSelectedDept] = useState("CS");
    const [selectedFloor, setSelectedFloor] = useState("Ground");
    const [selectedClass, setSelectedClass] = useState("101");
    const [searchQuery, setSearchQuery] = useState("");
    const damageReports = [
      {
        id: 1,
        date: "2024-01-15",
        location: "CS-Ground-101",
        description: "Broken window glass",
        status: "Active",
      },
      {
        id: 2,
        date: "2024-01-14",
        location: "Civil-First-102",
        description: "Faulty electrical socket",
        status: "Resolved",
      },
      {
        id: 3,
        date: "2024-01-13",
        location: "Mechanical-Second-103",
        description: "Water leakage from ceiling",
        status: "Active",
      },
    ];
    const filteredReports = damageReports.filter((report) => {
      const matchesSearch =
        report.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        report.location.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesTab =
        activeTab === "all" ||
        (activeTab === "active" && report.status === "Active") ||
        (activeTab === "resolved" && report.status === "Resolved");
      return matchesSearch && matchesTab;
    });
    return (
      <div className="flex h-screen bg-gray-50">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-lg hidden md:block">
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-4">Navigation</h2>
  
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2 flex items-center gap-2">
                  <Building2 size={18} />
                  Departments
                </h3>
                <div className="ml-6 space-y-1">
                  {["CS", "Civil", "Mechanical"].map((dept) => (
                    <button
                      key={dept}
                      onClick={() => setSelectedDept(dept)}
                      className={`block w-full text-left px-2 py-1 rounded ${selectedDept === dept ? "bg-blue-50 text-blue-600" : ""}`}
                    >
                      {dept}
                    </button>
                  ))}
                </div>
              </div>
  
              <div>
                <h3 className="font-medium mb-2 flex items-center gap-2">
                  <Layers size={18} />
                  Floors
                </h3>
                <div className="ml-6 space-y-1">
                  {["Ground", "First", "Second"].map((floor) => (
                    <button
                      key={floor}
                      onClick={() => setSelectedFloor(floor)}
                      className={`block w-full text-left px-2 py-1 rounded ${selectedFloor === floor ? "bg-blue-50 text-blue-600" : ""}`}
                    >
                      {floor}
                    </button>
                  ))}
                </div>
              </div>
  
              <div>
                <h3 className="font-medium mb-2 flex items-center gap-2">
                  <Home size={18} />
                  Classrooms
                </h3>
                <div className="ml-6 space-y-1">
                  {["101", "102", "103"].map((room) => (
                    <button
                      key={room}
                      onClick={() => setSelectedClass(room)}
                      className={`block w-full text-left px-2 py-1 rounded ${selectedClass === room ? "bg-blue-50 text-blue-600" : ""}`}
                    >
                      {room}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </aside>
  
        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          <div className="p-4 md:p-6">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
              <span>{selectedDept}</span>
              <ChevronRight size={16} />
              <span>{selectedFloor}</span>
              <ChevronRight size={16} />
              <span>{selectedClass}</span>
            </div>
  
            {/* Search */}
            <div className="relative mb-6">
              <input
                type="text"
                placeholder="Search damage reports..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-lg"
              />
              <Search
                className="absolute left-3 top-2.5 text-gray-400"
                size={20}
              />
            </div>
  
            {/* Tabs */}
            <div className="border-b mb-6">
              <div className="flex space-x-4">
                <button
                  onClick={() => setActiveTab("active")}
                  className={`pb-2 px-1 ${activeTab === "active" ? "border-b-2 border-blue-500 text-blue-600" : "text-gray-500"}`}
                >
                  <Clock size={18} className="inline mr-1" />
                  Active Reports
                </button>
                <button
                  onClick={() => setActiveTab("resolved")}
                  className={`pb-2 px-1 ${activeTab === "resolved" ? "border-b-2 border-blue-500 text-blue-600" : "text-gray-500"}`}
                >
                  <CheckCircle size={18} className="inline mr-1" />
                  Resolved
                </button>
                <button
                  onClick={() => setActiveTab("all")}
                  className={`pb-2 px-1 ${activeTab === "all" ? "border-b-2 border-blue-500 text-blue-600" : "text-gray-500"}`}
                >
                  <List size={18} className="inline mr-1" />
                  All Reports
                </button>
              </div>
            </div>
  
            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">
                      Date
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">
                      Location
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">
                      Description
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredReports.map((report) => (
                    <tr key={report.id}>
                      <td className="px-4 py-3 text-sm text-gray-900">
                        {report.date}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-900">
                        {report.location}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-900">
                        {report.description}
                      </td>
                      <td className="px-4 py-3 text-sm">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${report.status === "Active" ? "bg-yellow-100 text-yellow-800" : "bg-green-100 text-green-800"}`}
                        >
                          {report.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    );
  }
  render(<DamageDashboard />, document.getElementById("root"));
  