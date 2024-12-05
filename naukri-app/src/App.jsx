import React from 'react';
import './styles/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import JobList from './components/JobList';
import JobSearch from './components/JobSearch';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />  {/* Navbar component */}
        <main>
          <Routes>
            <Route path="/" element={<JobList />} />
            <Route path="/jobs" element={<JobList />} />
            {/* Add other routes for different sections like Companies, Login, etc. */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
