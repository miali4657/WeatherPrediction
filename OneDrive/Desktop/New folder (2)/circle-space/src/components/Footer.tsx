import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-10">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <div className="text-xl font-bold">CircleSpace</div>
        </div>
        <div className="mb-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Sign up</button>
        </div>
        <div className="text-gray-600">
          <p>© 2022 Brand, Inc. · Privacy · Terms · Sitemap</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
