import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center p-5 bg-gray-100 shadow-md">
      <div className="text-2xl font-bold">CircleSpace</div>
      <div>
        <button className="mr-4">Sign in</button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Sign up</button>
      </div>
    </nav>
  );
};

export default Navbar;
