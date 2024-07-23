import { useState } from "preact/hooks";

const API_URL = "http://localhost:8000"

export default function FileUpload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setUploadStatus("");
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setUploadStatus("No file selected");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await fetch(`${API_URL}/post-file`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setUploadStatus("File uploaded succesfully")
      } else {
        setUploadStatus("Failed to upload file");
      }
    } catch (error) {
      setUploadStatus(error.message);
    }
  };

  return (
    <di>
      <h2>Upload File</h2>
      <input type="file" onChange={handleFileChange}/>
      <button onClick={handleUpload}>Upload</button>
      {uploadStatus && <p>{uploadStatus}</p>}
    </di>
  );
}