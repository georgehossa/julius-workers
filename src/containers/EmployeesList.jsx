import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Employee from '../components/Employee';

const EmployeesList = () => {
  const [hasError, setErrors] = useState(false);
  const [data, setData] = useState([]);

  const getEmployees = async () => {
    try {
      const response = await axios.get('http://localhost:5000/employees/');
      const {data} = response;
      setData(data);
      setErrors(false);
    } catch (err) {
      setErrors(true);
      console.log(err);
    }
  };
// GET List of employees
  useEffect(() => {
    getEmployees();
  }, [data])

  return (
    <section className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
          {data.map((employee) => (
            <Employee key={employee._id} id={employee._id} name={employee.name} age={employee.age} salary={employee.salary} avatar={employee.avatar}/>
          ))}
      </section>
  );
};

export default EmployeesList;
