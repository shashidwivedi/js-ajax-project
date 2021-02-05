const DOG_URL = "https://dog.ceo/api/breeds/image/random";

const doggos = document.querySelector(".doggos");

let buttonClicks = 0;

document.querySelector(".add-doggo").addEventListener("click", addNewDoggo);

function addNewDoggo() {
  buttonClicks++;
  const promise = fetch(DOG_URL);

  const loadingGif = document.createElement("img");
  loadingGif.src = "https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif";
  loadingGif.alt = "Loading Gif";
  loadingGif.id = "loading-gif" + buttonClicks;

  doggos.appendChild(loadingGif);

  promise
    .then(function (response) {
      console.log(response);
      const processingPromise = response.json();
      return processingPromise;
    })
    .then(function (processedResponse) {
      console.log(processedResponse);
      doggos.removeChild(document.getElementById("loading-gif" + buttonClicks));
      appendImage(processedResponse.message);
    });
}

function appendImage(imageSource) {
  const img = document.createElement("img");
  img.src = imageSource;
  img.alt = "Cute Doggo";

  doggos.appendChild(img);
}
