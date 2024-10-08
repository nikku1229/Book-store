import books from "../../DataBase/Data.js";
import productMaker from "../defaultScript.js";

const rating = books().sort(function (a, b) {
  let rateA = a.rating,
    rateB = b.rating;
  return rateB - rateA;
});
productMaker(rating);


// search section

const main = document.querySelector("#thumb");

const searchBar = document.querySelector(".searchBar");

setInterval(() => {
  if (Boolean(searchBar.value)) {
    main.innerHTML = "";
    books().map((book) => {
      if (book.name.includes(searchBar.value)) {
        main.innerHTML += `<div class="thumb-wrapper flex-row shadow">
      <div class="img-box">
        <img src="${book.cover}" class="img-fluid" alt="book cover">
      </div>
      <div class="thumb-content">
        <h4 class="book-name">${book.name}</h4>
        <div class="star-rating">
          ${book.stars}
        </div>
        <p class="item-price"><strike class="">${
          book.lastPrice || ""
        }</strike><b>$${book.price}</b></p>
        <button class="btn btn-outline-danger">MY CART</button> <i class="bi bi-bag"></i></button>
      </div>
      </div>`;
      }
    });
  }
}, 1000);