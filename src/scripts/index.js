import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";
import "../styles/responsive.css";

import("../DATA.json").then(({ default: jsonData }) => {
  let datas = jsonData["restaurants"];
  let dataList = "";
  datas.forEach(function (data) {
    dataList += `
    <div class="list_items">
        <img class="list_items-thumb" src="${data["pictureId"]}" alt="${
      data["name"]
    }" title="${data["name"]}">
        <div class="city">${data["city"]}</div>
        <div class="list_items-content">
            <p class="list_items-rating">
                Rating :
                <a href="#" class="list_items-rating-value">${
                  data["rating"]
                }</a>
            </p>
            <h1 class="list_items-title"><a href="#">${data["name"]}</a></h1>
            <div class="list_items-description">${data["description"].slice(
              0,
              150
            )}...</div>
        </div>
    </div>
    `;
  });
  document.querySelector("#tes").innerHTML = dataList;
});

// menu
const hamburger = document.querySelector("#hamburger");
const hero = document.querySelector(".hero");
const main = document.querySelector("main");
const drawer = document.querySelector("#drawer");

hamburger.addEventListener("click", function (event) {
  drawer.classList.toggle("open");
  event.stopPropagation();
});

hero.addEventListener("click", function () {
  drawer.classList.remove("open");
});

main.addEventListener("click", function () {
  drawer.classList.remove("open");
});
