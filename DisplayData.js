function DisplayData({ data }) {
  return (
    <div className="mt-6 p-4 bg-gray-50 rounded-md border border-gray-200">
      <h2 className="text-lg font-semibold mb-4">Submitted Data</h2>
      <p><strong>Name:</strong> {data.name || 'Not provided'}</p>
      <p><strong>Email:</strong> {data.email || 'Not provided'}</p>
      <p><strong>Education Level:</strong> {data.education || 'Not provided'}</p>
      {data.education === 'Graduate' && data.educationDetails && (
        <div className="mt-2">
          <h3 className="font-medium">Graduate Details</h3>
          <p><strong>Degree:</strong> {data.educationDetails.degree || 'Not provided'}</p>
          <p><strong>Year:</strong> {data.educationDetails.year || 'Not provided'}</p>
          <p><strong>Final Year Score:</strong> {data.educationDetails.score || 'Not provided'}</p>
          <p><strong>University:</strong> {data.educationDetails.university || 'Not provided'}</p>
        </div>
      )}
      {data.education === 'PG' && data.educationDetails && (
        <div className="mt-2">
          <h3 className="font-medium">Postgraduate Details</h3>
          <p><strong>Year:</strong> {data.educationDetails.year || 'Not provided'}</p>
          <p><strong>Thesis Subject:</strong> {data.educationDetails.thesis || 'Not provided'}</p>
        </div>
      )}
      {data.education === 'UnderGrad' && data.educationDetails && (
        <div className="mt-2">
          <h3 className="font-medium">Undergraduate Details</h3>
          <p><strong>SSC Score:</strong> {data.educationDetails.ssc || 'Not provided'}</p>
          <p><strong>HSC Score:</strong> {data.educationDetails.hsc || 'Not provided'}</p>
        </div>
      )}
    </div>
  );
}