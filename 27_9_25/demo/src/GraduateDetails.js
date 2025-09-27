import { useState } from 'react';

export default function GraduateComponent() {
  const [graduateData, setGraduateData] = useState({
    degree: '',
    year: '',
    score: '',
    university: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGraduateData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="space-y-4 p-4 border-t border-gray-200">
      <h2 className="text-lg font-semibold">Graduate Details</h2>
      <div>
        <label className="block text-sm font-medium text-gray-700">Degree</label>
        <input
          type="text"
          name="degree"
          value={graduateData.degree}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-300"
          placeholder="Enter degree"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Year</label>
        <input
          type="number"
          name="year"
          value={graduateData.year}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-300"
          placeholder="Enter year"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Final Year Score</label>
        <input
          type="text"
          name="score"
          value={graduateData.score}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-300"
          placeholder="Enter score"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">University</label>
        <input
          type="text"
          name="university"
          value={graduateData.university}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-300"
          placeholder="Enter university"
        />
      </div>
    </div>
  );
}