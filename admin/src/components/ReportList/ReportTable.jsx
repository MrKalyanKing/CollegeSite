import React from "react";

// export default function ReportTable({ reports }) {
//   return (
//     <div className="overflow-x-auto">
//       <table className="min-w-full divide-y divide-gray-200">
//         <thead>
//           <tr>
//             <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//               Image
//             </th>
//             <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//               Date
//             </th>
//             <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//               Description
//             </th>
//             <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//               Hallticket
//             </th>
//           </tr>
//         </thead>
//         <tbody className="bg-white divide-y divide-gray-200">
//           {reports.map((report, index) => (
//             <tr key={index}>
//               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
//                 <img src={report.image} alt="image" style={{width:'100px',height:'80px'}}/>
//               </td>
//               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
//                 {report.date}
//               </td>
//               <td className="px-6 py-4 text-sm text-gray-900">
//                 {report.description}
//               </td>
//               <td className="px-6 py-4 whitespace-nowrap text-sm">
//                 <span
//                   className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
//                     report.status === "Pending"
//                       ? "bg-yellow-100 text-yellow-800"
//                       : report.status === "In Progress"
//                       ? "bg-blue-100 text-blue-800"
//                       : "bg-green-100 text-green-800"
//                   }`}
//                 >
//                   {report.hallticket}
//                 </span>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }


export default function ReportTable({ reports }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Image
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Date
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Description
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Hallticket
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {reports.map((report, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                <img src={report.image} alt="image" style={{ width: "100px", height: "80px" }} />
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {report.date}
              </td>
              <td className="px-6 py-4 text-sm text-gray-900">
                {report.description}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {report.hallticket}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
