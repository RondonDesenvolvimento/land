import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProfileSection from './components/ProfileSection';
import SolutionsSection from './components/SolutionsSection';
import ComparisonSection from './components/ComparisonSection';
import TestimonialsSection from './components/TestimonialsSection';
import SimulatorSection from './components/SimulatorSection';
import AboutSection from './components/AboutSection';
import LocationSection from './components/LocationSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <HeroSection />
      <ProfileSection />
      <SolutionsSection />
      <ComparisonSection />
      <TestimonialsSection />
      <SimulatorSection />
      <AboutSection />
      <LocationSection />
      <Footer />
    </div>
  );
}

export default App;
