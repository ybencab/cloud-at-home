document.getElementById("fetch-button")?.addEventListener("click", async () => {
  const responseEl = document.getElementById("response");
  await fetch("http://localhost:8000", {
    method: "GET"
  })
  .then(response => {
    if (responseEl && response) responseEl.innerText = "ok";
  })
  .catch(error => {
    if (responseEl) responseEl.innerText = error;
  })
})