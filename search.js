const searchInput = document.querySelector(".search-box input");
const searchButton = document.querySelector(".search-box button");

searchButton.addEventListener("click", function () {

    const searchText = searchInput.value.toLowerCase().trim();

    const blogCards = document.querySelectorAll(".blog-card");

    blogCards.forEach(function (card) {

        const title = card.querySelector("h3").textContent.toLowerCase();

        if (title.includes(searchText)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

});
const clearButton = document.querySelector("#clearSearch");

clearButton.addEventListener("click", function () {

    searchInput.value = "";

    const blogCards = document.querySelectorAll(".blog-card");

    blogCards.forEach(function (card) {
        card.style.display = "block";
    });

});