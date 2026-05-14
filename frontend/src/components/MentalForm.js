import React, { useState } from "react";
import axios from "axios";

function MentalForm() {

  const [formData, setFormData] = useState({
    sleepHours: "",
    stressLevel: "",
    workHours: "",
    screenTime: ""
  });

  const [result, setResult] = useState("");

  // Handle Input Changes

  const handleChange = (event) => {

    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value
    }));
  };

  // Handle Form Submit

  const handleSubmit = async (event) => {

    event.preventDefault();

    try {

      const response = await axios.post(
        "http://localhost:5000/predict",
        formData
      );

      setResult(response.data.prediction);

    }

    catch (error) {

      console.error("Error:", error);

      setResult("Server Error");

    }
  };

  return (

    <div className="form-container">

      <form onSubmit={handleSubmit}>

        <h2>Mental Health Analysis</h2>

        <input
          type="number"
          name="sleepHours"
          placeholder="Enter Sleep Hours"
          value={formData.sleepHours}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="stressLevel"
          placeholder="Enter Stress Level"
          value={formData.stressLevel}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="workHours"
          placeholder="Enter Work Hours"
          value={formData.workHours}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="screenTime"
          placeholder="Enter Screen Time"
          value={formData.screenTime}
          onChange={handleChange}
          required
        />

        <button type="submit">
          Predict Mental Overload
        </button>

      </form>

      {result && (
        <div className="result-box">

          <h3>Prediction Result</h3>

          <p>{result}</p>

        </div>
      )}

    </div>
  );
}

export default MentalForm;