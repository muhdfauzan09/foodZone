let cartQuantity = () => {
  let getData = JSON.parse(localStorage.getItem("data"));
  let quantityData = getData.length;
  localStorage.setItem("quantityItem", JSON.stringify(quantityData));
  let getQuantity = JSON.parse(localStorage.getItem("quantityItem"));
  document.getElementsByClassName("cart-quantity")[0].innerText = getQuantity;
};

let buttonPrimary = document.getElementsByClassName("btn-primary");
for (let i = 0; i < buttonPrimary.length; i++) {
  let button = buttonPrimary[i];
  button.addEventListener("click", function (event) {
    let target = event.target;
    let productCenter = target.parentElement.parentElement;
    let productId = productCenter.getElementsByClassName("id")[0].innerText;
    let productImg = productCenter.getElementsByClassName("product-img")[0].src;
    let productName =
      productCenter.getElementsByClassName("product-name-main")[0].innerText;
    let productPrice =
      productCenter.getElementsByClassName("product-price-main")[0].innerText;
    let total = productCenter.getElementsByClassName("total")[0].innerText;
    let parseTotal = parseFloat(total);
    console.log(parseTotal);

    let data = [];
    let parseData = JSON.parse(localStorage.getItem("data")); //null

    let item = {
      id: productId,
      image: productImg,
      name: productName,
      price: productPrice,
      quantity: 1,
      total: parseTotal,
    };

    if (parseData === null) {
      data.push(item);
      localStorage.setItem("data", JSON.stringify(data));
      cartQuantity();
    }

    if (parseData.length == 0) {
      data.push(item);
      localStorage.setItem("data", JSON.stringify(data));
      cartQuantity();
    }

    let productFilter = parseData.map((data) => data.id).includes(productId);
    if (productFilter == true) {
      alert("sama");
    } else if (productFilter == false) {
      parseData.push(item);
      localStorage.setItem("data", JSON.stringify(parseData));
      cartQuantity();
    }
  });
}

cartQuantity();
