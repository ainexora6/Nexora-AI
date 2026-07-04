/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { AmbientBackground } from './components/AmbientBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Process } from './components/Process';
import { Technologies } from './components/Technologies';
import { Portfolio } from './components/Portfolio';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#040810] text-slate-100 selection:bg-[#2853C3] selection:text-white overflow-x-hidden">
      {/* Dynamic Animated Ambient Gradients */}
      <AmbientBackground />

      {/* Top Glass Navigation */}
      <Navbar />

      {/* Main Page Content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Process />
        <Technologies />
        <Portfolio />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>

      {/* Comprehensive Footer */}
      <Footer />
    </div>
  );
}
