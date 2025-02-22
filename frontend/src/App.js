import React from 'react';
import { motion } from "framer-motion";
import { useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import UltrasoundUpload from "./pages/UltrasoundUpload";
import DilationTracker from "./pages/DilationTracker";
import UltrasoundAnalysis from "./pages/UltrasoundAnalysis";
import HealthTracking from "./pages/HealthTracking";
import HealthMonitoring from "./pages/HealthMonitoring";
import Community from "./pages/Community";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const mainNavItems = [
    { name: "Home", path: "/" },
    { name: "Upload Ultrasound", path: "/upload-ultrasound" },
    { name: "Dilation Tracker", path: "/dilation-tracker" },
    { name: "Community", path: "/community" }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-fixed bg-cover bg-center font-tinos"
      style={{ backgroundImage: "url('/images/backdrop.png')" }}>
        
        {/* Navigation Bar */}
        <motion.header 
          className="w-full fixed top-0 bg-white py-4 px-6 z-50 shadow-md"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Logo Section */}
            <div className="flex items-center gap-3">
              <img src="/images/logo.png" alt="Cervico Logo" className="h-10 w-auto" />
              <h1 className="text-2xl font-bold text-primary">Cervico</h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <ul className="flex gap-8">
                {mainNavItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className="text-secondary hover:text-primary transition-colors duration-300"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-secondary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                      d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          <motion.nav 
            className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute top-full left-0 right-0 bg-white shadow-soft`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : -20 }}
          >
            <ul className="px-6 py-4 space-y-4">
              <li>
                <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="nav-link">Home</Link>
              </li>
              <li>
                <Link to="/upload-ultrasound" className="nav-link">Upload Ultrasound</Link>
              </li>
              <li>
                <Link to="/dilation-tracker" className="nav-link">Dilation Tracker</Link>
              </li>
              <li>
                <Link to="/community" className="nav-link">Community</Link>
              </li>
            </ul>
          </motion.nav>
        </motion.header>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/upload-ultrasound" element={<UltrasoundUpload />} />
          <Route path="/ultrasound-analysis" element={<UltrasoundAnalysis />} />
          <Route path="/dilation-tracker" element={<DilationTracker />} />
          <Route path="/health-tracking" element={<HealthTracking />} />
          <Route path="/health-monitoring" element={<HealthMonitoring />} />
          <Route path="/community" element={<Community />} />
        </Routes>

        {/* Footer */}
        <footer className="bg-secondary text-white py-8 px-6 mt-auto">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Cervico</h3>
              <p className="text-gray-300">Advanced AI-powered cervical health monitoring</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Features</h4>
              <ul className="space-y-2">
                <li>AI Analysis</li>
                <li>Dilation Tracking</li>
                <li>Health Monitoring</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>Community</li>
                <li>Contact Support</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Data Security</li>
              </ul>
            </div>
          </div>
          <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
            <p>&copy; 2025 Cervico. All Rights Reserved.</p>
          </div>
        </footer>
      </div>
  );
}

function HomePage() {
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const careCategories = [
    {
      id: 'pregnancy-guide',
      title: "Pregnancy Health Guide",
      icon: "",
      description: "Comprehensive week-by-week guidance for a healthy pregnancy journey",
      content: `Our Pregnancy Health Guide provides detailed information about each stage of your pregnancy.
      From nutritional advice to exercise recommendations, we ensure you're well-informed about the changes
      happening in your body and your baby's development. Get weekly updates, health tips, and expert advice
      tailored to your pregnancy stage.`,
      images: {
        main: "/images/pregnancy-guide-main.jpg",
        secondary: "/images/pregnancy-guide-secondary.jpg",
        decorative: "/images/backgrounds/pregnancy-guide-bg.svg"
      },
      theme: {
        background: "linear-gradient(45deg, #f3e7ff 0%, #ffffff 100%)",
        accent: "rgba(147, 51, 234, 0.1)"
      }
    },
    {
      id: 'community',
      title: "Community Support",
      icon: "",
      description: "Connect with other expectant mothers and share experiences",
      content: `Join our supportive community of expectant mothers, experienced parents, and healthcare
      professionals. Share your journey, ask questions, and get advice from others who understand what
      you're going through. Participate in group discussions, virtual meetups, and educational sessions.`,
      images: {
        main: "/images/community-main.jpg",
        secondary: "/images/community-secondary.jpg",
        decorative: "/images/backgrounds/community-bg.svg"
      },
      theme: {
        background: "linear-gradient(45deg, #e7f5ff 0%, #ffffff 100%)",
        accent: "rgba(14, 165, 233, 0.1)"
      }
    },
    {
      id: 'expert-qa',
      title: "Expert Q&A",
      icon: "",
      description: "Get answers from certified healthcare professionals",
      content: `Access our panel of certified healthcare professionals including obstetricians, midwives,
      and maternal health specialists. Submit your questions and receive expert answers within 24 hours.
      Browse our extensive Q&A archive for immediate access to common pregnancy-related concerns.`,
      images: {
        main: "/images/expert-qa-main.jpg",
        secondary: "/images/expert-qa-secondary.jpg",
        decorative: "/images/backgrounds/expert-qa-bg.svg"
      },
      theme: {
        background: "linear-gradient(45deg, #ecfdf5 0%, #ffffff 100%)",
        accent: "rgba(16, 185, 129, 0.1)"
      }
    },
    {
      id: 'emergency',
      title: "Emergency Resources",
      icon: "",
      description: "Quick access to emergency information and contacts",
      content: `Our emergency resources section provides quick access to vital information when you need
      it most. Find nearby hospitals, emergency contact numbers, and guidelines for identifying urgent
      pregnancy-related situations. We also provide a printable emergency card with your key medical information.`,
      images: {
        main: "/images/emergency-main.jpg",
        secondary: "/images/emergency-secondary.jpg",
        decorative: "/images/backgrounds/emergency-bg.svg"
      },
      theme: {
        background: "linear-gradient(45deg, #fff1f2 0%, #ffffff 100%)",
        accent: "rgba(225, 29, 72, 0.1)"
      }
    },
    {
      id: 'exercise',
      title: "Exercise Plans",
      icon: "",
      description: "Safe and effective pregnancy workout routines",
      content: `Stay active with our pregnancy-safe exercise plans designed by prenatal fitness experts.
      Access video demonstrations of gentle exercises, yoga poses, and stretching routines suitable for
      each trimester. Our exercise plans adapt to your changing needs and energy levels throughout pregnancy.`,
      images: {
        main: "/images/exercise-main.jpg",
        secondary: "/images/exercise-secondary.jpg",
        decorative: "/images/backgrounds/exercise-bg.svg"
      },
      theme: {
        background: "linear-gradient(45deg, #faf5ff 0%, #ffffff 100%)",
        accent: "rgba(168, 85, 247, 0.1)"
      }
    },
    {
      id: 'nutrition',
      title: "Nutrition Advice",
      icon: "",
      description: "Healthy eating guidelines for pregnancy",
      content: `Get expert nutrition advice tailored for pregnancy. Find meal plans, recipes, and
      guidelines for essential nutrients. Learn about foods to avoid, safe supplements, and how to
      manage common pregnancy-related dietary challenges. Our nutrition guides help ensure you and
      your baby get the nutrients you need.`,
      images: {
        main: "/images/nutrition-main.jpg",
        secondary: "/images/nutrition-secondary.jpg",
        decorative: "/images/backgrounds/nutrition-bg.svg"
      },
      theme: {
        background: "linear-gradient(45deg, #f0fdf4 0%, #ffffff 100%)",
        accent: "rgba(34, 197, 94, 0.1)"
      }
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <motion.section 
        className="pt-32 pb-16 px-6 min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/backdrop.png')",
          backgroundPosition: 'center 30%'
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <motion.h1 
              className="text-6xl font-bold text-primary mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Cervical Health Monitoring
            </motion.h1>
            <motion.p 
              className="text-2xl text-gray-700 mb-12 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Advanced AI-powered ultrasound analysis for accurate cervical measurements
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <button 
                className="btn-primary"
                onClick={() => navigate('/upload-ultrasound')}
              >
                Upload Ultrasound
              </button>
              <button 
                className="btn-secondary"
                onClick={() => navigate('/dilation-tracker')}
              >
                Track Dilation
              </button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "AI Analysis",
                description: "Advanced ultrasound analysis using state-of-the-art AI technology",
                link: "/ultrasound-analysis"
              },
              {
                title: "Health Tracking",
                description: "Comprehensive tracking of cervical health measurements",
                link: "/health-tracking"
              },
              {
                title: "Continuous Monitoring",
                description: "Real-time monitoring and alerts for your pregnancy journey",
                link: "/health-monitoring"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <Link to={feature.link} className="text-primary hover:text-primary-dark font-medium">
                  Learn More →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comprehensive Care Section */}
      <section id="comprehensive-care" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary text-center mb-12">Comprehensive Care</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {careCategories.map((category, index) => (
              <motion.div 
                key={index} 
                className="bg-white rounded-lg p-6 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <button
                  onClick={() => scrollToSection(category.id)}
                  className="text-primary hover:text-primary-dark font-medium"
                >
                  Explore →
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Care Category Sections */}
      <div className="bg-white">
        {careCategories.map((category, index) => (
          <motion.section
            key={category.id}
            id={category.id}
            className="min-h-screen relative overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {/* Section Background */}
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                background: category.theme.background
              }}
            />

            {/* Decorative Background Pattern */}
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage: `url(${category.images.decorative})`,
                backgroundSize: '400px 400px',
                backgroundRepeat: 'repeat',
                opacity: 0.15
              }}
            />

            {/* Decorative Shapes */}
            <div 
              className="absolute inset-0 pointer-events-none overflow-hidden"
              aria-hidden="true"
            >
              <div 
                className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 rounded-full blur-3xl"
                style={{ background: category.theme.accent }} 
              />
              <div 
                className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 rounded-full blur-3xl"
                style={{ background: category.theme.accent }} 
              />
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 py-24 relative">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                {/* Text Content */}
                <div className="space-y-8">
                  <motion.h2 
                    className="text-5xl font-bold text-primary"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    {category.title}
                  </motion.h2>
                  <motion.p 
                    className="text-xl text-gray-700 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    {category.content}
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    <button
                      onClick={() => scrollToSection('comprehensive-care')}
                      className="text-primary hover:text-primary-dark font-medium flex items-center space-x-2"
                    >
                      <span>↑ Back to Categories</span>
                    </button>
                  </motion.div>
                </div>

                {/* Images */}
                <div className="relative">
                  {/* Main Image */}
                  <motion.div
                    className="rounded-lg overflow-hidden shadow-2xl"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                      <img
                        src={category.images.main}
                        alt={`${category.title} main`}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </motion.div>

                  {/* Secondary Image - Floating */}
                  <motion.div
                    className="absolute -bottom-8 -right-8 w-2/3 rounded-lg overflow-hidden shadow-xl"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    <div className="aspect-w-4 aspect-h-3 bg-gray-200">
                      <img
                        src={category.images.secondary}
                        alt={`${category.title} detail`}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </motion.div>

                  {/* Decorative Elements */}
                  <div className="absolute -left-4 -top-4 w-24 h-24 bg-primary/10 rounded-full" />
                  <div className="absolute -right-8 top-1/2 w-16 h-16 bg-primary/10 rounded-full" />
                </div>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="fixed right-8 top-1/2 transform -translate-y-1/2 space-y-4 z-50">
              {careCategories.map((cat, idx) => (
                <button
                  key={cat.id}
                  onClick={() => scrollToSection(cat.id)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    cat.id === category.id ? 'bg-primary scale-150' : 'bg-gray-300 hover:bg-primary/50'
                  }`}
                  aria-label={`Go to ${cat.title}`}
                />
              ))}
            </div>
          </motion.section>
        ))}
      </div>
    </div>
  );
}
