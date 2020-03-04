import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Employee from '../components/Employee';

const EmployeesList = () => {
  const [hasError, setErrors] = useState(false);
  const [data, setData] = useState([]);

  const getEmployees = async () => {
    try {
      const response = await axios.get('https://dummy.restapiexample.com/api/v1/employees');
      const {data} = response.data;
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
  }, [])

  return (
    <section className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
          {data.map((employee) => (
            <Employee key={employee.id} id={employee.id} name={employee.employee_name} age={employee.employee_age} salary={employee.employee_salary} avatar={employee.profile_image}/>
          ))}
      </section>
  );
};

export default EmployeesList;
