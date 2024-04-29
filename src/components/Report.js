import React, { useState } from 'react';
import './Report.css';
const ReportForm = () => {
  const [reporterName, setReporterName] = useState('');
  const [date, setDate] = useState('');
  const [complaintType, setComplaintType] = useState('');
  const [report, setReport] = useState('');
  const [submitted, setSubmitted] = useState(false); // State to track form submission

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can implement the logic to submit the report
    console.log("Report submitted:", {
      reporterName,
      date,
      complaintType,
      report
    });
    // You can also make an API call to send the report data to the server
    // Reset the form after submission
    setReporterName('');
    setDate('');
    setComplaintType('');
    setReport('');
    // Set submitted to true after successful submission
    setSubmitted(true);
  };

  return (
    <div className="report-form-container">
      <form className="report-form" onSubmit={handleSubmit}>
        <h2>Report Unusual Activity</h2>
        <label htmlFor="reporterName">Your Name:</label><br />
        <input 
          type="text" 
          id="reporterName" 
          value={reporterName} 
          onChange={(e) => setReporterName(e.target.value)}
          required
        /><br />
        <label htmlFor="date">Date:</label><br />
        <input 
          type="date" 
          id="date" 
          value={date} 
          onChange={(e) => setDate(e.target.value)}
          required
        /><br />
        <label htmlFor="complaintType">Type of Complaint:</label><br />
        <select 
          id="complaintType" 
          value={complaintType} 
          onChange={(e) => setComplaintType(e.target.value)}
          required
        >
          <option value="">Select Type</option>
          <option value="Illegal hunting">Illegal hunting</option>
          <option value="Deforestation">Deforestation</option>
          <option value="Pollution">Pollution</option>
          <option value="Invasive species">Invasive species</option>
          {/* Add more options as needed */}
        </select><br />
        <label htmlFor="report">Description:</label><br />
        <textarea 
          id="report" 
          rows="4" 
          cols="50" 
          value={report} 
          onChange={(e) => setReport(e.target.value)}
          required
        ></textarea><br />
        <button type="submit">Submit</button>
      </form>
      {submitted && (
        <p className="success-message">Complaint submitted successfully!</p>
      )} {/* Conditional rendering for success message */}
    </div>
  );
};


export default ReportForm;