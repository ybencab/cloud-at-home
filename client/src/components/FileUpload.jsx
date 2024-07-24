import { useState } from "preact/hooks";

export default function FileUpload({ onUpload, API_URL }) {
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
        setUploadStatus("File uploaded succesfully");
        onUpload();
      } else {
        setUploadStatus("Failed to upload file");
      }
    } catch (error) {
      setUploadStatus(error.message);
    }
  };

  return (
    <div>
      <input 
        type="file" 
        class="block w-full mb-2 text-sm text-gray-900 border border-gray-300 cursor-pointer bg-gray-50 focus:outline-none" 
        onChange={handleFileChange}
      />
      <button 
        type="button" 
        class="text-white bg-blue-600 rounded-lg p-1 text-sm font-semibold"
        onClick={handleUpload}
      >
        Upload
      </button>
      {uploadStatus && <p class="text-blue-300">{uploadStatus}</p>}
    </div>
  );
}