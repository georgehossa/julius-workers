import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Navbar from './components/Navbar';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getEmployees = async () => {
      try {
        const response = await axios.get('http://dummy.restapiexample.com/api/v1/employees');
        setData(response.data.data)
        console.log(response.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    getEmployees();
  }, [])

  return (
    <div className="App">
      <header className="header">
        <Navbar />
      </header>
      <section className="content container">
        <ul>
          {data.map((employee) => (
            <li key={employee.id}>{employee.employee_name}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;
