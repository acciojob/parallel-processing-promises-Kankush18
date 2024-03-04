//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];
function downloadImages(images) {
  return Promise.all(images.map(imageObj => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = () => reject(new Error(`Failed to load image's URL: ${imageObj.url}`));
      img.src = imageObj.url;
    });
  }));
}

// Function to display images on the webpage
function displayImages(images) {
  const output = document.getElementById("output");
  output.innerHTML = ''; // Clear previous images

  images.forEach(img => {
    output.appendChild(img);
  });
}



btn.addEventListener("click", () => {
  downloadImages(images)
    .then(displayImages)
    .catch(error => {
      console.error("Error occurred while downloading images:", error);
    });
});