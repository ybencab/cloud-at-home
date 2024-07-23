import { useState, useEffect } from "preact/hooks"
import FileList from "./FileList"
import FileUpload from "./FileUpload"

const API_URL = "http://localhost:8000";

export default function Files() {
  const [files, setFiles] = useState([]);
  const [error, setError] = useState(null);

  const fetchFiles = async () => {
    await fetch(`${API_URL}/content`)
    .then(async response => {
      let data = await response.json();
      setFiles(data);
      setError(null);
    })
    .catch(error => {
      console.error("Fetch error: ", error);
      setFiles([]);
      setError(error.message);
    });
  }

  useEffect(() => {
    fetchFiles();
  }, []);

  return (
    <div>
      <h1>Files</h1>
      <FileUpload onUpload={fetchFiles} />
      <FileList files={files} error={error} />
    </div>
  )
}
