import React from 'react'

const Employee = (props) => {
  const {name, age, salary, avatar} = props;
  return (
    <div>
      {avatar ? (<img src={avatar} alt={`{name} Avatar`}/>) : (<img src={`https://api.adorable.io/avatars/100/${name}.png`} alt={`{name} Avatar`}/>)}
      <p>{name}</p>
      <p>{age}</p>
      <p>{salary}</p>
    </div>
  )
}

export default Employee;
