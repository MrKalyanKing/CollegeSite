
import React, { useState } from "react";
import ReportTable from "../ReportList/ReportTable";
// export default function SelectionArea({
//   selectedDepartment,
//   selectedFloor,
//   selectedClassroom,
//   handleSelectionChange,
// }) {
//   return (
//     <section className="bg-white rounded-lg shadow p-4 md:p-6">
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         <div>
//           <label
//             htmlFor="department"
//             className="block text-sm font-medium text-gray-700 mb-1"
//           >
//             Department
//           </label>
//           <select
//             id="department"
//             className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//             value={selectedDepartment}
//             onChange={(e) =>
//               handleSelectionChange("department", e.target.value)
//             }
//           >
//             <option value="">Select Department</option>
//             <option value="BTECH">BTECH</option>
//             <option value="DIPLAMA">DIPLAMA</option>
            
//           </select>
//         </div>

//         <div>
//           <label
//             htmlFor="floor"
//             className="block text-sm font-medium text-gray-700 mb-1"
//           >
//             Floor
//           </label>
//           <select
//             id="floor"
//             className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//             value={selectedFloor}
//             onChange={(e) => handleSelectionChange("floor", e.target.value)}
//             disabled={!selectedDepartment}
//           >
//             <option value="">Select Floor</option>
//             <option value="1">1</option>
//             <option value="2">2</option>
//             <option value="3">3</option>
//           </select>
//         </div>

//         <div>
//           <label
//             htmlFor="classroom"
//             className="block text-sm font-medium text-gray-700 mb-1"
//           >
//             Classroom
//           </label>
//           <select
//             id="classroom"
//             className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//             value={selectedClassroom}
//             onChange={(e) =>
//               handleSelectionChange("classroom", e.target.value)
//             }
//             disabled={!selectedFloor}
//           >
//             <option value="">Select Classroom</option>
//             <option value="101">101</option>
//             <option value="102">102</option>
//             <option value="103">103</option>
//           </select>
//         </div>
//       </div>
//     </section>
//   );
// }
export default function AdminPanel() {
  const [selectedFloor, setSelectedFloor] = useState("");
  const [selectedClassroom, setSelectedClassroom] = useState("");
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFetchReports = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:3000/api/show", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          floor: selectedFloor,
          classroom: selectedClassroom,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const result = await response.json();
      if (result.success) {
        setReports(result.data);
      } else {
        setError(result.message || "Error fetching reports");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>

      {/* Dropdowns */}
      <div className="mb-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        <select
          value={selectedFloor}
          onChange={(e) => setSelectedFloor(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="">Select Floor</option>
          {[1, 2, 3, 4].map((floor) => (
            <option key={floor} value={floor}>
              Floor {floor}
            </option>
          ))}
        </select>

        <select
          value={selectedClassroom}
          onChange={(e) => setSelectedClassroom(e.target.value)}
          className="p-2 border rounded"
          disabled={!selectedFloor}
        >
          <option value="">Select Classroom</option>
          {[
            "Class 1A", "Class 1B", "Class 1C", "Class 1D", "Class 1E",
            "Class 58", "Class 63", "Class 64", "Class 65", "Class 81", "Class 78", "Class 68", "Class 69",
            "Class 3A", "Class 3B", "Class 3C", "Class 3D", "Class 3E",
            "Class 4A", "Class 4B", "Class 4C", "Class 4D", "Class 4E",
          ].map((cls) => (
            <option key={cls} value={cls}>
              {cls}
            </option>
          ))}
        </select>
      </div>

      {/* Fetch Button */}
      <button
        onClick={handleFetchReports}
        disabled={!selectedFloor || !selectedClassroom}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Fetch Reports
      </button>

      {/* Display Reports */}
      <div className="mt-6">
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {reports.length > 0 && <ReportTable reports={reports} />}
      </div>
    </div>
  );
}