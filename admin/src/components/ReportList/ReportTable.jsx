import React, { useState,useCallback } from "react";
import Lightbox from "../LightBox/Lightbox";
export default function ReportTable({ reports }) {
  const [selectedImage, setSelectedImage] = useState(null); 
  const handleImageClick = useCallback((image) => {
     setSelectedImage(`http://localhost:3000/uploads/${image}`); 
    }, []); 
  const handleClose = useCallback(() => {
     setSelectedImage(null); 
    }, []);
  return (
    <>
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
                <img
                  src={`http://localhost:3000/uploads/${report.image}`}
                  alt="image"
                  style={{ width: "100px", height: "80px" }}
                  onClick={()=>handleImageClick(report.image)}
                />
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {report.name}
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
      {selectedImage && <Lightbox image={selectedImage} onClose={handleClose} />} 
    </div>
   
    </>
  );
}

