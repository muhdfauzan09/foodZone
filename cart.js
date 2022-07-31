let parseData = JSON.parse(localStorage.getItem("data"));

let updateItem = () => {
  let cartItem = document.getElementsByClassName("cart-item-clone");
  let cartItems = 0;
  for (let i = 0; i < cartItem.length; i++) {
    cartItems = cartItem.length;
  }
  document.getElementsByClassName("item")[0].innerHTML = cartItems;
};

let updateSubTotal = () => {
  localStorage.setItem("sub", JSON.stringify());
  let sub = document.getElementsByClassName("sub-total")[0];
  let subtotal = 0;
  let getdata = JSON.parse(localStorage.getItem("data"));
  for (let i = 0; i < getdata.length; i++) {
    let data = getdata[i];
    subtotal = subtotal + data.total;
    localStorage.setItem("sub", JSON.stringify(subtotal));
  }
  if (subtotal == 0) {
    console.log("hai");
  } else {
    let getsub = JSON.parse(localStorage.getItem("sub"));
    document.getElementsByClassName("sub-total")[0].innerHTML = "RM" + getsub;
  }
};

let remove = (event) => {
  let target = event.target;
  let parentElement = target.parentElement.parentElement.parentElement;
  let id = parentElement.getElementsByClassName("id")[0].innerText;
  console.log(id);
  let removeBtn = parseData.filter((data) => data.id != id);
  localStorage.setItem("data", JSON.stringify(removeBtn));
  window.location.reload();
};

let quantity = (event) => {
  let target = event.target;
  let parentElement = target.parentElement; // get Input Quantity
  let parent = target.parentElement.parentElement; //get ID
  let quantity = parentElement.getElementsByClassName("cart-input")[0].value;
  let id = parent.getElementsByClassName("id")[0].innerText;
  let cartPrice = parent.getElementsByClassName("cart-price")[0].innerText;
  let cartTotal = parent.getElementsByClassName("total")[0];
  let parsePrice = parseFloat(cartPrice.replace("RM", ""));

  let getData = JSON.parse(localStorage.getItem("data"));
  let data = getData.map((data) => {
    if (data.id == id) {
      data.quantity = quantity;
      data.total = data.quantity * parsePrice;
      cartTotal.value = data.total;
      window.location.reload();
    }
    return data;
  });
  localStorage.setItem("data", JSON.stringify(data));
};

//Display cart
let getCart = parseData.find((data) => {
  let div = document.createElement("tr");
  div.classList.add("cart-item-clone");
  let cartRows = document.getElementsByClassName("cart-rows")[0];
  let eachCart = `
 
                <div class="id">${data.id}</div>
                <td class="cart-flex"> 
                  <img class = "cart-images" src="${data.image}">
                  <div>
                    <div class = "cart-name">${data.name}</div>
                    <div class="cart-price">${data.price}</div>
                    <a type="button" class="btn-remove">Remove</a>
                  </div>
                  
                </td>
                <td>
                  <input class="cart-input" type="number" max="10"min="0" value="${data.quantity}" />
                </td>
                <td>
                  <div class="cart-total">RM<span class = "total">${data.total}</span></div> 
                </td>
  
    `;
  div.innerHTML = eachCart;
  cartRows.append(div);

  // removeBtn
  let removebtn = document.getElementsByClassName("btn-remove");
  for (let i = 0; i < removebtn.length; i++) {
    let button = removebtn[i];
    button.addEventListener("click", remove);
  }

  //Input total number cart
  let cartInput = document.getElementsByClassName("cart-input");
  for (let i = 0; i < cartInput.length; i++) {
    let quantityCart = cartInput[i];
    quantityCart.addEventListener("click", quantity);
    updateItem();
  }
});

updateSubTotal();

let btnCheckout = document.getElementsByClassName("btn-checkout")[0];
btnCheckout.addEventListener("click", function () {
  let getdata = JSON.parse(localStorage.getItem("data"));

  if (getdata.length === 0) {
    alert("No item in cart");
  } else {
    location.replace("checkout.html");
  }
});
