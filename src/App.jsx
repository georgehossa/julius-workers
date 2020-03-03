import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Navbar from './components/Navbar';
import Employee from './components/Employee';

const App = () => {
  const [hasError, setErrors] = useState(false);
  const [data, setData] = useState([]);

  const getEmployees = async () => {
    try {
      const response = await axios.get('https://dummy.restapiexample.com/api/v1/employees');
      setData(response.data.data);
      setErrors(false);
    } catch (err) {
      setErrors(true);
      console.log(err);
    }
  };

  useEffect(() => {
    getEmployees();
  }, [])

  return (
    <div className="App box-border bg-blue-100">
      <header className="header">
        <Navbar />
      </header>
      <section className="container mx-auto">
          {data.map((employee) => (
            <Employee key={employee.id} name={employee.employee_name} age={employee.employee_age} salary={employee.employee_salary} avatar={employee.profile_image}/>
          ))}
      </section>
    </div>
  );
}

export default App;
