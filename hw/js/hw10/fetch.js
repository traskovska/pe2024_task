const dog_URL = "https://dog.ceo/api/breeds/image/random";

function displayImage() {
  fetch(dog_URL)
    .then((response) => response.json())
    .then((data) => {
      console.log("data :>> ", data);
      const imageUrl = data.message;

      const imgElement = document.getElementById("imgEl");
      if (imgElement) {
        imgElement.src = imageUrl;
        imgElement.alt = "Random Dog";
      }
    })
    .catch((error) => console.log("error :>> ", error));
}

document.addEventListener("DOMContentLoaded", () => {
  const imgElement = document.getElementById("imgEl");
  if (imgElement) {
    imgElement.addEventListener("click", displayImage);
  }

  displayImage();
});
