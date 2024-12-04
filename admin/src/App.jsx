// import React, { useState } from "react";
// import Header from "./components/Breadcrumb/Breadcrumb";
// import SelectionArea from "./components/Selectionarea/SelectionArea";
// import ReportTable from "./components/ReportList/ReportTable";
// import { damageReports } from "./assets/Data/damageReports";

// export default function App() {
//   const [selectedDepartment, setSelectedDepartment] = useState("");
//   const [selectedFloor, setSelectedFloor] = useState("");
//   const [selectedClassroom, setSelectedClassroom] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);
 

//   const handleSelectionChange = (type, value) => {
//     setIsLoading(true);
//     setError(null);
//     try {
//       switch (type) {
//         case "department":
//           setSelectedDepartment(value);
//           setSelectedFloor("");
//           setSelectedClassroom("");
//           break;
//         case "floor":
//           setSelectedFloor(value);
//           setSelectedClassroom("");
//           break;
//         case "classroom":
//           setSelectedClassroom(value);
//           break;
//         default:
//           break;
//       }
//     } catch (err) {
//       setError("Error updating selection");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <main className="min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8">
//       <div className="max-w-7xl mx-auto space-y-6">
//       <div className="bg-blue-500 text-white p-4">Hello Tailwind!</div>
//         <Header />

//         <SelectionArea
//           selectedDepartment={selectedDepartment}
//           selectedFloor={selectedFloor}
//           selectedClassroom={selectedClassroom}
//           handleSelectionChange={handleSelectionChange}
//         />

//         <section className="bg-white rounded-lg shadow p-4 md:p-6">
//           {error && (
//             <div className="mb-4 p-4 bg-red-50 text-red-700 rounded-md">
//               {error}
//             </div>
//           )}

//           {isLoading ? (
//             <div className="flex justify-center items-center h-40">
//               <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
//             </div>
//           ) : (
//             <>
//               <div className="mb-6 p-4 bg-gray-50 rounded-md">
//                 <h2 className="text-lg font-semibold mb-2">
//                   Current Selection
//                 </h2>
//                 <p className="text-gray-600">
//                   Department: {selectedDepartment || "Not selected"} <br />
//                   Floor: {selectedFloor || "Not selected"} <br />
//                   Classroom: {selectedClassroom || "Not selected"}
//                 </p>
//               </div>

//               {/* <ReportTable reports={reports} /> */}
//             </>
//           )}
//         </section>
//       </div>
//     </main>
//   );
// }
import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Breadcrumb/Breadcrumb";
import SelectionArea from "./components/Selectionarea/SelectionArea";
import ReportTable from "./components/ReportList/ReportTable";

export default function App() {
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedFloor, setSelectedFloor] = useState("");
  const [selectedClassroom, setSelectedClassroom] = useState("");
  const [reports, setReports] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFetchReports = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post("http://localhost:3000/api/show", {
        department: selectedDepartment,
        floor: selectedFloor,
        classroom: selectedClassroom,
      });

      if (response.data.success) {
        setReports(response.data.data);
      } else {
        setError(response.data.message || "Error fetching reports");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleFetchReports();
  }, [selectedDepartment, selectedFloor, selectedClassroom]);

  return (
    <main className="min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="bg-blue-500 text-white p-4">Hello Admin!</div>
        <Header />

        <SelectionArea
          selectedDepartment={selectedDepartment}
          selectedFloor={selectedFloor}
          selectedClassroom={selectedClassroom}
          handleSelectionChange={(type, value) => {
            switch (type) {
              case "department":
                setSelectedDepartment(value);
                setSelectedFloor("");
                setSelectedClassroom("");
                break;
              case "floor":
                setSelectedFloor(value);
                setSelectedClassroom("");
                break;
              case "classroom":
                setSelectedClassroom(value);
                break;
              default:
                break;
            }
          }}
        />

        <section className="bg-white rounded-lg shadow p-4 md:p-6">
          {error && (
            <div className="mb-4 p-4 bg-red-50 text-red-700 rounded-md">
              {error}
            </div>
          )}

          {isLoading ? (
            <div className="flex justify-center items-center h-40">
              <div className="w-8 h-8 animate-spin text-blue-500" />
            </div>
          ) : (
            <>
              <div className="mb-6 p-4 bg-gray-50 rounded-md">
                <h2 className="text-lg font-semibold mb-2">
                  Current Selection
                </h2>
                <p className="text-gray-600">
                  Department: {selectedDepartment || "Not selected"} <br />
                  Floor: {selectedFloor || "Not selected"} <br />
                  Classroom: {selectedClassroom || "Not selected"}
                </p>
              </div>

              <ReportTable reports={reports} />
            </>
          )}
        </section>
      </div>
    </main>
  );
}
