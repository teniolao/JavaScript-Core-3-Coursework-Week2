const button = document.querySelector("button");

function addDogToList(dogURL) {
  const ulTag = document.querySelector("ul");
  const liTag = document.createElement("li");
  const image = document.createElement("img");
  image.src = dogURL;
  liTag.appendChild(image);
  ulTag.appendChild(liTag);
}

button.addEventListener("click", (e) => {
  addImage()
    .then((dogURL) => addDogToList(dogURL))
    .catch((err) => {
      const dog404Placeholder = "./dog-placeholder.jpg";
      addDogToList(dog404Placeholder);
    });
});

function addImage() {
  const apiURL = "https://dog.ceo/api/breeds/image/random";
  return fetch(apiURL)
    .then((response) => response.json())
    .then((data) => {
      if (data.code === 404) return Promise.reject("No dog found!");
      else return data.message;
    });
}


