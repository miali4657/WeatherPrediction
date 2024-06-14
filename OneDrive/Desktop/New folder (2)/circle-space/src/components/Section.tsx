import React from 'react';

interface SectionProps {
  title: string;
  description: string;
  button1Text: string;
  button2Text: string;
  imageUrl: string;
}

const Section: React.FC<SectionProps> = ({ title, description, button1Text, button2Text, imageUrl }) => {
  return (
    <div className="flex flex-col md:flex-row items-center py-10">
      <div className="md:w-1/2 p-5">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="mb-4">{description}</p>
        <div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">{button1Text}</button>
          <button className="bg-gray-200 px-4 py-2 rounded">{button2Text}</button>
        </div>
      </div>
      <div className="md:w-1/2 p-5">
        <img src={imageUrl} alt={title} className="rounded-lg shadow-lg" />
      </div>
    </div>
  );
};

export default Section;
 