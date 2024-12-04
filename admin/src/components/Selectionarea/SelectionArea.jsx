// import React from "react";

export default function SelectionArea({
  selectedDepartment,
  selectedFloor,
  selectedClassroom,
  handleSelectionChange,
}) {
  return (
    <div className="mb-4 grid grid-cols-1 md:grid-cols-4 gap-4">
      <select
        value={selectedDepartment}
        onChange={(e) => handleSelectionChange("department", e.target.value)}
        className="p-2 border rounded"
      >
        <option value="">Select Course</option>
        {["BTECH", ].map((dept) => (
          <option key={dept} value={dept}>
            {dept}
          </option>
        ))}
      </select>

      <select
        value={selectedFloor}
        onChange={(e) => handleSelectionChange("floor", e.target.value)}
        className="p-2 border rounded"
        disabled={!selectedDepartment}
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
        onChange={(e) => handleSelectionChange("classroom", e.target.value)}
        className="p-2 border rounded"
        disabled={!selectedFloor}
      >
        <option value="">Select Classroom</option>
        {[
          "Class 1A", "Class 1B", "Class 1C", "Class 1D", "Class 1E",
          "Class 58", "Class 63", "Class 64", "Class 65", "Class 81",
          "Class 78", "Class 68", "Class 69", "Class 3A", "Class 3B",
          "Class 3C", "Class 3D", "Class 3E", "Class 4A", "Class 4B",
          "Class 4C", "Class 4D", "Class 4E",
        ].map((cls) => (
          <option key={cls} value={cls}>
            {cls}
          </option>
        ))}
      </select>
    </div>
  );
}
