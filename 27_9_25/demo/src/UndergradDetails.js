import { useState } from 'react';

export default function UnderGradComponent() {
  const [underGradData, setUnderGradData] = useState({
    ssc: '',
    hsc: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUnderGradData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="space-y-4 p-4 border-t border-gray-200">
      <h2 className="text-lg font-semibold">Undergraduate Details</h2>
      <div>
        <label className="block text-sm font-medium text-gray-700">SSC Score</label>
        <input
          type="text"
          name="ssc"
          value={underGradData.ssc}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-300"
          placeholder="Enter SSC score"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">HSC Score</label>
        <input
          type="text"
          name="hsc"
          value={underGradData.hsc}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-300"
          placeholder="Enter HSC score"
        />
      </div>
    </div>
  );
}