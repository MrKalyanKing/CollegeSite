import React, { useState,useCallback } from "react";
import Lightbox from "../LightBox/Lightbox";
export default function ReportTable({ reports }) {
  const [selectedImage, setSelectedImage] = useState(null); 


  const handleImageClick = useCallback((image) => {
     setSelectedImage(`https://collegesite-backend-e1x7.onrender.com/uploads/${image}`); 
    }, []); 
  const handleClose = useCallback(() => {
     setSelectedImage(null); 
    }, []);

    //delete the image
    const handleDelete = async (id) => {
      const confirmDelete = window.confirm("Are you sure you want to delete this record?");
      if (!confirmDelete) return;
      //console.log("Attempting to delete ID:", id);

      try {
        const response = await fetch(`https://collegesite-backend-e1x7.onrender.com/api/report/delete/${id}`, {
          method: 'DELETE',
        });
    
        const result = await response.json();
    
        if (result.success) {
          alert("Record deleted successfully!");
          setReports((prevReports) => prevReports.filter((report) => report._id !== id));
        } else {
          alert(`Error: ${result.message}`);
        }
      } catch (error) {
        console.error(error);
        //alert("Error deleting the record.");
      }
    };
    
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
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Remove
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {reports.map((report, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                <img
                  src={`https://collegesite-backend-e1x7.onrender.com/uploads/${report.image}`}
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
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                <button className="bg bg-danger rounded-2 h-10 w-20"  onClick={()=>handleDelete(report._id)} >Delete</button>
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

