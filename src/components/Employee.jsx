import React from 'react'
import axios from 'axios';

const Employee = ({ id, name, age, salary, avatar, onDelete }) => {

  const handleDeleteEmploye = () => {
    axios.delete(`http://localhost:5000/employees/${id}`)
      .then(res => {
        console.log(res);
        onDelete();
      })
      .catch(error => console.log(error))
  }

  return (
    <article className="bg-white rounded-lg shadow-lg p-4 grid grid-cols-2">
      <div className="mx-auto self-center rounded-full overflow-hidden h-22 w-22 flex items-center justify-center align-center">
        {avatar ? (<img className="w-full" src={avatar} alt={`{name} Avatar`} />) : (<img className="w-full" src={`https://api.adorable.io/avatars/100/${name}.png`} alt={`{name} Avatar`} />)}
      </div>
      <div className="">
          <p className="font-bold">{name}</p>
          <p><span className="font-bold">Age: </span>{age}</p>
          <p><span className="font-bold">Salary: </span>${salary}</p>
        <div className="controls">
          <button className="rounded p-1 text-gray-500 hover:text-blue-400 transition-colors duration-300" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path className="fill-current heroicon-ui" d="M6.3 12.3l10-10a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1 0 1.4l-10 10a1 1 0 0 1-.7.3H7a1 1 0 0 1-1-1v-4a1 1 0 0 1 .3-.7zM8 16h2.59l9-9L17 4.41l-9 9V16zm10-2a1 1 0 0 1 2 0v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h6a1 1 0 0 1 0 2H4v14h14v-6z"/></svg>
          </button>
          <button onClick={handleDeleteEmploye} className="rounded p-1 text-gray-500 hover:text-red-400 transition-colors duration-300" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path className="fill-current heroicon-ui" d="M8 6V4c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2h5a1 1 0 0 1 0 2h-1v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8H3a1 1 0 1 1 0-2h5zM6 8v12h12V8H6zm8-2V4h-4v2h4zm-4 4a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0v-6a1 1 0 0 1 1-1zm4 0a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0v-6a1 1 0 0 1 1-1z"/></svg>
          </button>
        </div>
      </div>
    </article>
  )
}

export default Employee;
