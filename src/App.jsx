import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom'
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
      <header className="header fixed w-full">
        <Navbar />
      </header>
      <section className="container mx-auto p-4 text-center text-4xl pt-24">
        <h1 className="">Employees</h1>
      </section>
      <section className="bg-blue-100 container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
          {data.map((employee) => (
            <Employee key={employee.id} name={employee.employee_name} age={employee.employee_age} salary={employee.employee_salary} avatar={employee.profile_image}/>
          ))}
      </section>
    </div>
  );
}

export default App;
