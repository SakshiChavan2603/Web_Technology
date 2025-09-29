import { useState, useEffect } from 'react';

function PGComponent({ onDataChange }) {
  const [pgData, setPGData] = useState({
    year: '',
    thesis: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPGData(prev => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    onDataChange(pgData);
  }, [pgData, onDataChange]);

  return (
    <div className="space-y-4 p-4 border-t border-gray-200">
      <h2 className="text-lg font-semibold">Postgraduate Details</h2>
      <div>
        <label className="block text-sm font-medium text-gray-700">Year</label>
        <input
          type="number"
          name="year"
          value={pgData.year}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-300"
          placeholder="Enter year"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Thesis Subject</label>
        <input
          type="text"
          name="thesis"
          value={pgData.thesis}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-300"
          placeholder="Enter thesis subject"
        />
      </div>
    </div>
  );
}