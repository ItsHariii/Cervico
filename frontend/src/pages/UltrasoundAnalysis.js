import React from 'react';
import { motion } from 'framer-motion';

export default function UltrasoundAnalysis() {
  return (
    <div className="min-h-screen bg-white">
      <motion.section 
        className="pt-32 pb-16 px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h1 
            className="text-5xl font-bold text-primary mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            AI-Powered Ultrasound Analysis
          </motion.h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div 
              className="space-y-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-3xl font-semibold text-gray-800">Advanced Technology for Accurate Measurements</h2>
              <p className="text-lg text-gray-600">
                Our AI-powered ultrasound analysis system provides precise cervical measurements using
                state-of-the-art machine learning algorithms. Get accurate results within minutes of uploading
                your ultrasound images.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-primary text-xl mr-2">•</span>
                  <span>Real-time cervical length measurements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary text-xl mr-2">•</span>
                  <span>Automated detection of key anatomical markers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary text-xl mr-2">•</span>
                  <span>Historical trend analysis and reporting</span>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              className="relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src="/images/ultrasound-analysis-demo.jpg" 
                  alt="Ultrasound Analysis Demo"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full" />
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
