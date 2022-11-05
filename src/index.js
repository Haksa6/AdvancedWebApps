import "./styles.css";

if (document.readyState !== "loading") {
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    initializeCode();
  });
}

async function initializeCode() {
  let container = document.querySelector(".container");

  for (let i = 0; i < 5; i++) {
    const response = await fetch(
      "https://dog.ceo/api/breed/akita/images/random",
      { mode: "cors" }
    );
    const data = await response.json();
    const response2 = await fetch(
      "https://en.wikipedia.org/api/rest_v1/page/summary/Akita_%28dog%29?redirect=false",
      { mode: "cors" }
    );
    const data2 = await response2.json();
    console.log(data.message);

    //wiki item
    let wikiItem = document.createElement("div");
    wikiItem.classList.add("wiki-item");

    //wiki header
    let wikiHeader = document.createElement("h1");
    wikiHeader.innerHTML = "Akita";
    wikiHeader.classList.add("wiki-header");
    wikiItem.appendChild(wikiHeader);
    //wiki content
    let wikiContent = document.createElement("div");
    wikiItem.appendChild(wikiContent);
    wikiContent.classList.add("wiki-content");

    //wiki text
    let wikiText = document.createElement("p");
    wikiContent.appendChild(wikiText);
    wikiText.innerHTML = data2.extract;
    wikiText.classList.add("wiki-text");

    //wiki img
    let imgContainer = document.createElement("div");
    wikiContent.appendChild(imgContainer);
    imgContainer.classList.add("img-container");
    let img = document.createElement("img");

    img.classList.add("wiki-img");
    img.src = data.message;
    imgContainer.appendChild(img);

    //final add
    container.appendChild(wikiItem);
  }
}
