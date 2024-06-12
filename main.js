const productCard = document.querySelector(".card.product");
const reviewsCard = document.querySelector(".card.reviews");
const overlay = document.querySelector(".overlay");
const notifier = document.querySelector(".notifier");

// functions for card switching

function displayReviews() {
  productCard.classList.remove("block");
  reviewsCard.classList.add("block");
}

function displayProduct() {
  productCard.classList.add("block");
  reviewsCard.classList.remove("block");
}

// functions for 'add to cart'

function addedToCart() {
  overlay.classList.add("visible");
  notifier.classList.add("visible");
}

function closeNotifier() {
  notifier.classList.remove("visible");
  overlay.classList.remove("visible");
}
