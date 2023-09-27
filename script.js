// script.js
const uploadForm = document.getElementById("uploadForm");
const fileInput = document.getElementById("fileInput");
const message = document.getElementById("message");

uploadForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", fileInput.files[0]);

    try {
        const response = await fetch("/upload", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();

        if (response.status === 200) {
            message.textContent = `File "${data.fileName}" uploaded successfully.`;
        } else {
            message.textContent = `Error: ${data.message}`;
        }
    } catch (error) {
        console.error("Error uploading file:", error);
        message.textContent = "Error uploading file.";
    }
});
