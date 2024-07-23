import { useState, useEffect } from "preact/hooks";

const API_URL = "http://localhost:8000"

export default function FileList({ files, error }) {
  const handleDownload = (filename) => {
    window.location.href = `${API_URL}/get-file/${filename}`;
  };

  return (
    <div>
      <h2>Files</h2>
      {error ? (
        <p>Ha ocurrido un error: {error}</p>
      ) : (
        <ul>
          {files.map((file, index) => (
            <li key={index}>{file} - <button onClick={() => handleDownload(file)}>Download</button></li>
          ))}
        </ul>
      )}
    </div>
  )
}
