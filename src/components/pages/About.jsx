import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <>
      <div>This is a simple Task tracker created by react.js</div>
      <Link to='/'>Home Page</Link>
    </>
  );
}

export default About;
