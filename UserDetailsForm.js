import { useState } from 'react';
import GraduateComponent from './GraduateComponent.js';
import PGComponent from './PGComponent.js';
import UnderGradComponent from './UnderGradComponent.js';
import DisplayData from './DisplayData.js';

function UserDetailsForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    education: ''
  });
  const [educationData, setEducationData] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleEducationData = (data) => {
    setEducationData(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData({ ...formData, educationDetails: educationData });
  };

  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-300"
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-300"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Education Level</label>
          <select
            name="education"
            value={formData.education}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-300"
          >
            <option value="">Select Education Level</option>
            <option value="Graduate">Graduate</option>
            <option value="PG">Postgraduate</option>
            <option value="UnderGrad">Undergraduate</option>
          </select>
        </div>

        {formData.education === 'Graduate' && <GraduateComponent onDataChange={handleEducationData} />}
        {formData.education === 'PG' && <PGComponent onDataChange={handleEducationData} />}
        {formData.education === 'UnderGrad' && <UnderGradComponent onDataChange={handleEducationData} />}

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </form>

      {submittedData && <DisplayData data={submittedData} />}
    </div>
  );
}