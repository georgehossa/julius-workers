import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const NewEmployee = ({history}) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [salary, setSalary] = useState(0);

  const handleName = (e) => {
    setName(e.target.value);
  }
  const handleAge = (e) => {
    setAge(e.target.value);
  }
  const handleSalary = (e) => {
    setSalary(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name: name,
      age: age,
      salary: salary,
      avatar: `https://api.adorable.io/avatars/190/${encodeURI(name.toLocaleLowerCase())}.png`
    }
    Axios.post('http://localhost:5000/employees/add', newUser)
    .then(res => console.log(res.data))
    .catch(error => console.log(error));
    // window.location.replace('/');
    history.push('/');
  }
  return (
    <div className="container mx-auto">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block">Name:</label>
          <input onChange={handleName} type="text" name="name" placeholder="Name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
          <p className="text-red-500 text-xs italic mt-2 invisible">Please place a Name</p>
        </div>
        <div className="mb-4">
          <label htmlFor="age" className="block">Age:</label>
          <input onChange={handleAge} type="text" name="age" placeholder="Age" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
          <p className="text-red-500 text-xs italic mt-2 invisible">Please place a Employee Age</p>
        </div>
        <div className="mb-4">
          <label htmlFor="salary" className="block">Salary:</label>
          <input onChange={handleSalary} type="text" name="salary" placeholder="Salary" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
          <p className="text-red-500 text-xs italic mt-2 invisible">Please place a Salary</p>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
          Create
        </button>

      </form>
    </div>
  )
}


export default NewEmployee
