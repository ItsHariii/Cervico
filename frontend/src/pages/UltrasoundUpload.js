import { motion } from "framer-motion";
import React, { useState, useCallback } from "react";

export default function UltrasoundUpload() {
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState("");

  const handleDrag = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setIsDragging(true);
    } else if (e.type === "dragleave") {
      setIsDragging(false);
    }
  }, []);

  const validateFile = (file) => {
    const validTypes = ['image/jpeg', 'image/png', 'application/pdf'];
    const maxSize = 10 * 1024 * 1024; // 10MB

    if (!validTypes.includes(file.type)) {
      setError("Please upload only JPG, PNG, or PDF files");
      return false;
    }

    if (file.size > maxSize) {
      setError("File size must be less than 10MB");
      return false;
    }

    return true;
  };

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    setError("");

    const file = e.dataTransfer.files[0];
    if (file && validateFile(file)) {
      setSelectedFile(file);
    }
  }, []);

  const handleFileSelect = (e) => {
    setError("");
    const file = e.target.files[0];
    if (file && validateFile(file)) {
      setSelectedFile(file);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setError("Please select a file first");
      return;
    }
    // TODO: Implement file upload logic here
    console.log("Uploading file:", selectedFile);
  };

  return (
    <motion.div 
      className="min-h-screen pt-20 px-6 bg-gray-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-8">Upload Ultrasound</h1>
        
        <div className="bg-white p-8 rounded-lg shadow-soft">
          <div
            className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors
              ${isDragging ? "border-primary bg-primary/5" : "border-gray-300"}
              ${error ? "border-red-500" : ""}`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <input
              type="file"
              className="hidden"
              id="ultrasound-upload"
              accept=".jpg,.jpeg,.png,.pdf"
              onChange={handleFileSelect}
            />
            <div className="flex flex-col items-center">
              <span className="text-6xl mb-4">
                {selectedFile ? "📄" : "📤"}
              </span>
              <span className="text-xl font-bold text-primary mb-2">
                {selectedFile 
                  ? `Selected: ${selectedFile.name}`
                  : "Drop your ultrasound file here"}
              </span>
              <span className="text-gray-500 mb-4">
                Drag and drop or use the button below
              </span>
              {!selectedFile && (
                <label
                  htmlFor="ultrasound-upload"
                  className="btn-primary cursor-pointer"
                >
                  Select File
                </label>
              )}
            </div>
          </div>

          {error && (
            <div className="mt-4 p-4 bg-red-50 text-red-600 rounded-lg">
              {error}
            </div>
          )}

          {selectedFile && (
            <div className="mt-4 flex justify-center">
              <button 
                className="btn-primary"
                onClick={handleUpload}
              >
                Upload File
              </button>
            </div>
          )}
          
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-primary mb-4">Upload Guidelines</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Ensure the image is clear and well-lit</li>
              <li>Include the full ultrasound image</li>
              <li>Make sure the date is visible</li>
              <li>Maximum file size: 10MB</li>
              <li>Accepted formats: JPG, PNG, PDF</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}