import { useState } from 'react';
import GraduateComponent from './GraduateDetails.js';
import PGComponent from './PGDetails.js';
import UnderGradComponent from './UndergradDetails.js';

function UserDetailsForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    education: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="space-y-4">
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

      {formData.education === 'Graduate' && <GraduateComponent />}
      {formData.education === 'PG' && <PGComponent />}
      {formData.education === 'UnderGrad' && <UnderGradComponent />}
    </div>
  );
}
export default UserDetailsForm