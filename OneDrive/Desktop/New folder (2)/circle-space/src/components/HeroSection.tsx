import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div className="text-center py-20 bg-gray-50">
      <h1 className="text-5xl font-bold mb-4">CircleSpace</h1>
      <p className="text-xl mb-8">
        India's first comprehensive platform dedicated to revolutionizing the architecture & interior design industry.
        We connect homeowners, business owners & industry professionals, creating a vibrant marketplace where creativity meets opportunity.
      </p>
      <img src="path/to/hero-image.jpg" alt="Hero" className="mx-auto rounded-lg shadow-lg" />
    </div>
  );
};

export default HeroSection;
