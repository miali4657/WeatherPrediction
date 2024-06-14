import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Section from './components/Section';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <HeroSection />
      <Section
        title="Homeowners"
        description="Can browse through a curated list of professional interior designers, view detailed portfolios and previous work, read client reviews and ratings and directly connect with designers to discuss projects and get quotes."
        button1Text="Try now"
        button2Text="Learn more"
        imageUrl="path/to/homeowners-image.jpg"
      />
      <Section
        title="Architects & Interior Designers"
        description="Can create a unique profile that showcases their design preferences and style to increase their visibility in the industry and attract potential clients and partners."
        button1Text="Try now"
        button2Text="Learn more"
        imageUrl="path/to/architects-image.jpg"
      />
      <Section
        title="Brands & Vendors"
        description="Can connect with suppliers, manufacturers and other industry professionals and access exclusive deals and collaborations."
        button1Text="Try now"
        button2Text="Learn more"
        imageUrl="path/to/vendors-image.jpg"
      />
      <Footer />
    </div>
  );
};

export default App;
