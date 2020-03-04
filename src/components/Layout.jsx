import React from 'react';
import Navbar from './Navbar';

const Layout = (props) => {
  return (
    <div className="App box-border bg-blue-100">
      <header className="header fixed w-full">
        <Navbar />
      </header>
      <section className="container mx-auto p-4 text-center text-4xl pt-24">
        <h1 className="">Employees</h1>
      </section>
      <section className="container mx-auto grid grid-cols-1">
        {props.children}
      </section>
    </div>
  )
}

export default Layout
