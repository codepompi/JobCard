import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import FormPageOne from "./FormPageOne";
import FormPageTwo from "./FormPageTwo";
import JobCardsPage from "./JobCardsPage";

const App = () => {
  const [jobs, setJobs] = useState([]);

  const handleNext = (jobData) => {
    setJobs([...jobs, jobData]);
  };

  const handleDone = (additionalInfoData) => {
    const lastIndex = jobs.length - 1;
    const updatedJobs = [...jobs];
    updatedJobs[lastIndex] = {
      ...updatedJobs[lastIndex],
      ...additionalInfoData,
    };
    setJobs(updatedJobs);
  };

  return (
    <Router>
      <div>
        {/* <nav className="bg-indigo-500 py-4">
          <div className="container mx-auto px-4">
            <ul className="flex items-center">
              <li className="mr-4">
                <Link
                  to="/"
                  className="text-white hover:text-indigo-100 font-medium transition duration-200"
                >
                  Form Page One
                </Link>
              </li>
              <li className="mr-4">
                <Link
                  to="/form-two"
                  className="text-white hover:text-indigo-100 font-medium transition duration-200"
                >
                  Form Page Two
                </Link>
              </li>
              <li>
                <Link
                  to="/job-cards"
                  className="text-white hover:text-indigo-100 font-medium transition duration-200"
                >
                  Job Cards
                </Link>
              </li>
            </ul>
          </div>
        </nav> */}
        <div className="container mx-5 px-4 py-8 flex justify-center">
          <Routes>
            <Route path="/" element={<FormPageOne onNext={handleNext} />} />
            <Route
              path="/form-two"
              element={<FormPageTwo onDone={handleDone} />}
            />
          </Routes>
        </div>
        <div>
          <Routes>
            <Route path="/job-cards" element={<JobCardsPage jobs={jobs} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
