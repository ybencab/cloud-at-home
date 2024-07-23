const API_URL = "http://localhost:8000"

export default function FileList({ files, error }) {
  const handleDownload = (filename) => {
    window.location.href = `${API_URL}/get-file/${filename}`;
  };

  const handleDelete = async (filename) => {
    try {
      const response = await fetch(`${API_URL}/remove-file/${filename}`, {
        method: "DELETE",
      });
      if (response.ok) {
        window.location.reload();
      } else {
        console.error("Failed to delete the file");
      }
    } catch (error) {
      console.error("Error deleting the file: ", error);
    }
  }

  return (
    <div>
      <h2>Files</h2>
      {error ? (
        <p>Ha ocurrido un error: {error}</p>
      ) : (
        <ul>
          {files.map((file, index) => (
            <li key={index}>{file} - 
              <button onClick={() => handleDownload(file)}>Download</button>
              <button onClick={() => handleDelete(file)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
