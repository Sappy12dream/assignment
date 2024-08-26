const boxes = [
  {
    id: "box1",
    title: "Buy 1 Get 2",
    discount: 30,
    price: 18,
    isPopular: false,
    oldPrice: null,
  },
  {
    id: "box2",
    title: "Buy 2 Get 4",
    discount: 30,
    price: 24,
    isPopular: true,
    oldPrice: null,
  },

  {
    id: "box3",
    title: "Buy 3 Get 6",
    discount: 10,
    price: 36,
    isPopular: false,
    oldPrice: 10,
  },
];

const radioContainer = document.getElementById("offer-container");

function selectOffer(boxId, price, containerId) {
  document.querySelectorAll(".box-container").forEach((box) => {
    box.classList.remove("selected");
    document.getElementById(box.querySelector("input").id).checked = false;
  });
  document.getElementById("price").textContent = price;
  document.getElementById(containerId).classList.add("selected");
  document.getElementById(boxId).checked = true;
}
radioContainer.innerHTML = boxes
  .map(
    (box) => `
    <div class="box-container" id="${box.id}-container" onclick="selectOffer('${
      box.id
    }',${box.price}, '${box.id}-container')">
      <span class="badge">${box.discount}% <span>Off</span></span>
      <div class="box-content">
        <div class="box-price-details">
          <input type="radio" id="${box.id}" name="radio-group">
          <div class="box-details">
            <label for="${box.id}" class="box-title">${box.title}</label>
            <span class="box-price">$${box.price}.00 USD ${
      box.oldPrice
        ? `<span class="box-old-price">$${box.oldPrice}.00 USD</span>`
        : ""
    }      </span>
          </div>
          ${
            box.isPopular
              ? `<span class="popular-badge">Most Popular</span>`
              : ""
          }
        </div>
        <div class="select-item-container">
        <div class="select-item-row">
            <span></span>
            <span>Size</span>
            <span>Colour</span>
        </div>
        <div class="select-item-row">
            <span>#1</span>
            <select name="size1" class="select-box">
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
            </select>
            <select name="colour1" class="select-box">
                <option value="black">Black</option>
                <option value="white">White</option>
                <option value="blue">Blue</option>
            </select>
        </div>
        <div class="select-item-row">
            <span>#2</span>
            <select name="size2" class="select-box">
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
            </select>
            <select name="colour2" class="select-box">
                <option value="black">Black</option>
                <option value="white">White</option>
                <option value="blue">Blue</option>
            </select>
        </div>
        </div>
      </div>
    </div>
`
  )
  .join("");

window.onload = () => {
  const popularBox = boxes.find((box) => box.isPopular);
  if (popularBox) {
    selectOffer(popularBox.id, popularBox.price, `${popularBox.id}-container`);
  }
};
