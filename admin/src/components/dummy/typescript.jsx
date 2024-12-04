import {
    Building2,
    Layers,
    School,
    Search,
    AlertCircle,
    CheckCircle2,
    Clock,
    ChevronRight,
    BarChart3,
    Settings,
  } from "lucide-react";
  import { render } from "react-dom";
  import React, { useEffect, useState } from "react";
  export default function DamageReportAdmin() {
    const [selectedDept, setSelectedDept] = useState("engineering");
    const [selectedFloor, setSelectedFloor] = useState(1);
    const [selectedRoom, setSelectedRoom] = useState("101");
    const [searchQuery, setSearchQuery] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [filterStatus, setFilterStatus] = useState("all");
    const departments = [
      {
        id: "engineering",
        name: "Engineering",
      },
      {
        id: "science",
        name: "Science",
      },
      {
        id: "arts",
        name: "Arts",
      },
      {
        id: "business",
        name: "Business",
      },
    ];
    const floors = [1, 2, 3, 4];
    const rooms = {
      1: ["101", "102", "103", "104"],
      2: ["201", "202", "203", "204"],
      3: ["301", "302", "303", "304"],
      4: ["401", "402", "403", "404"],
    };
    const damageReports = [
      {
        id: 1,
        department: "engineering",
        floor: 1,
        room: "101",
        status: "pending",
        title: "Broken Window",
        description: "Large crack in window pane near entrance",
        priority: "high",
        reportedAt: "2024-01-15",
        estimatedCost: "$500",
      },
      {
        id: 2,
        department: "engineering",
        floor: 1,
        room: "101",
        status: "completed",
        title: "Faulty Light Fixture",
        description: "Flickering lights in back corner",
        priority: "medium",
        reportedAt: "2024-01-14",
        estimatedCost: "$150",
      },
      {
        id: 3,
        department: "science",
        floor: 2,
        room: "201",
        status: "in-progress",
        title: "Leaking Pipe",
        description: "Water damage on ceiling",
        priority: "high",
        reportedAt: "2024-01-13",
        estimatedCost: "$800",
      },
    ];
    const metrics = {
      total: damageReports.length,
      pending: damageReports.filter((r) => r.status === "pending").length,
      completed: damageReports.filter((r) => r.status === "completed").length,
      inProgress: damageReports.filter((r) => r.status === "in-progress").length,
    };
    const filteredReports = damageReports.filter(
      (report) =>
        report.department === selectedDept &&
        report.floor === selectedFloor &&
        report.room === selectedRoom &&
        (filterStatus === "all" || report.status === filterStatus) &&
        (report.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          report.description.toLowerCase().includes(searchQuery.toLowerCase())),
    );
    const StatusBadge = ({ status }) => {
      const badges = {
        pending: "bg-yellow-100 text-yellow-800",
        completed: "bg-green-100 text-green-800",
        "in-progress": "bg-blue-100 text-blue-800",
      };
      return (
        <span className={`px-2 py-1 rounded-full text-sm ${badges[status]}`}>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      );
    };
    return (
      <div className="flex min-h-screen bg-gray-50">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-gray-200 p-4">
          <div className="flex items-center space-x-2 mb-8">
            <Building2 className="h-6 w-6 text-gray-700" />
            <h1 className="text-xl font-semibold text-gray-900">
              Damage Reports
            </h1>
          </div>
  
          <nav>
            <div className="space-y-6">
              <div>
                <h2 className="text-sm font-medium text-gray-500 mb-2">
                  Departments
                </h2>
                <ul className="space-y-1">
                  {departments.map((dept) => (
                    <li key={dept.id}>
                      <button
                        onClick={() => setSelectedDept(dept.id)}
                        className={`w-full text-left px-3 py-2 rounded-md text-sm ${selectedDept === dept.id ? "bg-gray-100 text-gray-900" : "text-gray-600 hover:bg-gray-50"}`}
                      >
                        {dept.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
  
              <div>
                <h2 className="text-sm font-medium text-gray-500 mb-2">Floor</h2>
                <ul className="space-y-1">
                  {floors.map((floor) => (
                    <li key={floor}>
                      <button
                        onClick={() => setSelectedFloor(floor)}
                        className={`w-full text-left px-3 py-2 rounded-md text-sm ${selectedFloor === floor ? "bg-gray-100 text-gray-900" : "text-gray-600 hover:bg-gray-50"}`}
                      >
                        Floor {floor}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
  
              <div>
                <h2 className="text-sm font-medium text-gray-500 mb-2">Room</h2>
                <ul className="space-y-1">
                  {rooms[selectedFloor].map((room) => (
                    <li key={room}>
                      <button
                        onClick={() => setSelectedRoom(room)}
                        className={`w-full text-left px-3 py-2 rounded-md text-sm ${selectedRoom === room ? "bg-gray-100 text-gray-900" : "text-gray-600 hover:bg-gray-50"}`}
                      >
                        Room {room}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </nav>
        </aside>
  
        {/* Main Content */}
        <main className="flex-1 p-8">
          {/* Metrics Dashboard */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Total Reports
                  </p>
                  <p className="text-2xl font-semibold text-gray-900">
                    {metrics.total}
                  </p>
                </div>
                <BarChart3 className="h-8 w-8 text-gray-400" />
              </div>
            </div>
  
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Pending</p>
                  <p className="text-2xl font-semibold text-yellow-600">
                    {metrics.pending}
                  </p>
                </div>
                <Clock className="h-8 w-8 text-yellow-400" />
              </div>
            </div>
  
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">In Progress</p>
                  <p className="text-2xl font-semibold text-blue-600">
                    {metrics.inProgress}
                  </p>
                </div>
                <AlertCircle className="h-8 w-8 text-blue-400" />
              </div>
            </div>
  
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Completed</p>
                  <p className="text-2xl font-semibold text-green-600">
                    {metrics.completed}
                  </p>
                </div>
                <CheckCircle2 className="h-8 w-8 text-green-400" />
              </div>
            </div>
          </div>
  
          {/* Search and Filters */}
          <div className="mb-6 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search reports..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
  
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>
  
          {/* Reports List */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Damage Reports
              </h2>
  
              {isLoading ? (
                <div className="text-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto"></div>
                  <p className="mt-2 text-gray-600">Loading reports...</p>
                </div>
              ) : filteredReports.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-600">No reports found</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {filteredReports.map((report) => (
                    <div
                      key={report.id}
                      className="border border-gray-200 rounded-lg p-4"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-lg font-medium text-gray-900">
                            {report.title}
                          </h3>
                          <p className="text-gray-600 mt-1">
                            {report.description}
                          </p>
                          <div className="mt-2 space-x-4">
                            <StatusBadge status={report.status} />
                            <span className="text-sm text-gray-500">
                              Reported: {report.reportedAt}
                            </span>
                            <span className="text-sm text-gray-500">
                              Est. Cost: {report.estimatedCost}
                            </span>
                          </div>
                        </div>
                        <ChevronRight className="h-5 w-5 text-gray-400" />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    );
  }
  render(<DamageReportAdmin />, document.getElementById("root"));
  