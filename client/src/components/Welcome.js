import React from 'react';
import { Link } from 'react-router-dom';

function Welcome() {

  return (
    <div className="fullscreen-background"> 
      <h1 className="font-tiny5 font-bold text-center text-white text-8xl mt-10 mb-1 heading-shadow">Welcome To HiveMind!</h1>
      <h3 className="font-dotgothic text-center text-white text-3xl my-5">Join the intellectual ecosystem</h3>

    <div style={{ display: 'inline' }}>
        <Link to="/register">
          <button className="font-dotgothic custom-button">Create Account</button>
        </Link>
        <Link to="/login">
          <button className="mt-10 font-dotgothic custom-button">Login</button>
        </Link>
    </div>
    </div>
  );
}

export default Welcome;
