import React, { useState, useEffect } from 'react';

const NewEmployee = () => {
  return (
    <div className="container mx-auto">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full">
        <div className="mb-4">
          <label htmlFor="name" className="block">Name:</label>
          <input type="text" name="name" placeholder="Name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
          <p className="text-red-500 text-xs italic mt-2 invisible">Please place a Name</p>
        </div>
        <div className="mb-4">
          <label htmlFor="age" className="block">Age:</label>
          <input type="text" name="age" placeholder="Age" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
          <p className="text-red-500 text-xs italic mt-2 invisible">Please place a Employee Age</p>
        </div>
        <div className="mb-4">
          <label htmlFor="salary" className="block">Salary:</label>
          <input type="text" name="salary" placeholder="Salary" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
          <p className="text-red-500 text-xs italic mt-2 invisible">Please place a Salary</p>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
          Create
        </button>

      </form>
    </div>
  )
}


export default NewEmployee
