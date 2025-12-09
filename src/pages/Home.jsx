import React from 'react';
import Hero from '../components/home/Hero';
import WhoWeAre from '../components/home/WhoWeAre';
import OrchardsPreview from '../components/home/OrchardsPreview';
import ProductsPreview from '../components/home/ProductsPreview';
import Expectations from '../components/home/Expectations';
import FromOrchardToTruck from '../components/home/FromOrchardToTruck';
import Quality from '../components/home/Quality';
import WhyUs from '../components/home/WhyUs';
import ContactSection from '../components/home/ContactSection';

const Home = () => {
  return (
    <main>
      <Hero />
      <WhoWeAre />
      <OrchardsPreview />
      <ProductsPreview />
      <Expectations />
      <Quality />
      <FromOrchardToTruck />
      <WhyUs />
      <ContactSection />
    </main>
  );
};

export default Home;
