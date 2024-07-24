export default function FileList({ files, error, API_URL }) {
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
      <h2 class="m-2 text-gray-900">-- Files --</h2>
      {error ? (
        <p>Ha ocurrido un error: {error}</p>
      ) : (
        <ul>
          {files.map((file) => (
            <li 
              class="bg-gray-200 m-2 p-1 rounded-lg flex justify-between items-center"
            >
              <p>
                {file}
              </p>
              <div>
                <button 
                  type="button" 
                  class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 rounded-lg text-sm p-2 m-1"
                  onClick={() => handleDownload(file)}
                >
                  Download
                </button>
                <button 
                  type="button" 
                  class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 rounded-lg text-sm p-2 m-1"
                  onClick={() => handleDelete(file)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
