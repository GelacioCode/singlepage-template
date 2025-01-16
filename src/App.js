// src/App.js
import React from 'react';
import Gallery from './components/Gallery';
import PropertyDetails from './components/PropertyDetails';
import Amenities from './components/Amenities';
import Footer from './components/Footer';
import propertyData from './data/propertyData';
import Header from './components/Header';
import Section1 from './components/Section1';
import Map from './components/Map';
import Iframe3d from './components/Iframe3d';
import Carousel from './components/Carousel';
import CommunitySection from './components/Community';

const App = () => {
  console.log("Property details:", propertyData.details);

  return (
    <div className="App">
      <Header headerLogo={propertyData.headerLogo} />
      <Section1 
        title={propertyData.title}
        address={propertyData.address}
      />

      <Amenities section2Image={propertyData.section2Image} 
        title={propertyData.title} 
        address={propertyData.address} 
        description={propertyData.description} 
        details={propertyData.details} />
  
      <Carousel images={propertyData.images} />
      <PropertyDetails 
        title={propertyData.title} 
        subheading={propertyData.subheading} 
        longDescription={propertyData.longDescription} 
        images={propertyData.floorplanimages} 
      />

      {propertyData.iframe3d && (
        <Iframe3d src={propertyData.iframe3d} title={propertyData.title} />
      )}

      <CommunitySection />

      <Map
        title="Where You'll Be"
        contactLink="https://christinacavallo.realtor/" // Replace with your desired URL
      />
      <Footer />
    </div>
  );
};

export default App;
