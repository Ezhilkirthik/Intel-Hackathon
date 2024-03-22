import React, { useState } from "react";
import axios from "axios";

const Home = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [uploadError, setUploadError] = useState("");

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", selectedFile);

      await axios.post("http://localhost:5173/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setUploadSuccess(true);
      setUploadError("");
    } catch (error) {
      setUploadSuccess(false);
      setUploadError("Error uploading file. Please try again.");
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>

      {uploadSuccess && <p>File uploaded successfully!</p>}
      {uploadError && <p style={{ color: "red" }}>{uploadError}</p>}
    </div>
  );
};

export default Home;
