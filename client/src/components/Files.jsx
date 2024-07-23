import { useState, useEffect } from "preact/hooks"
import FileList from "./FileList"
import FileUpload from "./FileUpload"


export default function Files({ API_URL }) {
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
      <FileUpload API_URL={API_URL} onUpload={fetchFiles} />
      <FileList API_URL={API_URL} files={files} error={error} />
    </div>
  )
}
