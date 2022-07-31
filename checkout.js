let getdata = JSON.parse(localStorage.getItem("data"));
let getsub = localStorage.getItem("sub");

// billing
let inputname = document.getElementsByClassName("input-name")[0];
let inputEmail = document.getElementsByClassName("input-email")[0];
let inputTable = document.getElementsByClassName("input-table")[0];

//Payement Method
let inputCardNumber = document.getElementsByClassName("input-card-number")[0];
let inputMonth = document.getElementsByClassName("input-month")[0];
let inputYear = document.getElementsByClassName("input-year")[0];
let inputSecurityCode = document.getElementsByClassName(
  "input-security-code"
)[0];

let radioCreditCard = document.getElementsByClassName("radio-credit-card")[0];
radioCreditCard.addEventListener("click", function () {
  inputCardNumber.removeAttribute("disabled");
  inputMonth.removeAttribute("disabled");
  inputYear.removeAttribute("disabled");
  inputSecurityCode.removeAttribute("disabled");
});

let radioOnlineBanking = document.getElementsByClassName(
  "radio-online-banking"
)[0];
radioOnlineBanking.addEventListener("click", function () {
  inputCardNumber.setAttribute("disabled", "true");
  inputMonth.setAttribute("disabled", "true");
  inputYear.setAttribute("disabled", "true");
  inputSecurityCode.setAttribute("disabled", "true");
});

let radioCash = document.getElementsByClassName("radio-cash")[0];
radioCash.addEventListener("click", function () {
  inputCardNumber.setAttribute("disabled", "true");
  inputMonth.setAttribute("disabled", "true");
  inputYear.setAttribute("disabled", "true");
  inputSecurityCode.setAttribute("disabled", "true");
});

let radioBts = document.getElementsByClassName("input-cash");
let radioValue;
for (let i = 0; i < radioBts.length; i++) {
  let buttons = radioBts[i];
  buttons.addEventListener("click", function () {
    radioValue = radioBts[i].value;
  });
}

// Display cart
let getCart = getdata.forEach((data) => {
  let parent = document.getElementsByClassName("cart-summary")[0];
  let table = parent.querySelector("table");
  let div = document.createElement("tr");
  // div.classList.add("flex-cart-summary");
  let code = `

  <td class="flex">
    <img src="${data.image}" alt="" class ="cart-summary-img">
    <div class="quantity-cart-summary">${data.quantity} x  <span class="name-cart-summary">${data.name}</span></div>
  </td>

  <td>
     <div class="price-cart-summary">RM ${data.total}</div>
  </td>
  `;

  div.innerHTML = code;
  table.append(div);
});

let totalSummary = (document.getElementsByClassName(
  "total-summary"
)[0].innerText = getsub);
// End of Display cart

// validation
let row = document.getElementsByClassName("row")[0];
let iname = row.getElementsByClassName("input-name")[0];
let iemail = row.getElementsByClassName("input-email")[0];
let itableNumber = row.getElementsByClassName("input-table")[0];
let radio = row.getElementsByClassName("input-cash");

let buttonCheckout = document.getElementsByClassName("btn-primary")[0];
buttonCheckout.addEventListener("click", function () {
  //billing
  let iNameValue = inputname.value;
  let iEmailValue = inputEmail.value;
  let iTable = inputTable.value;

  //payment Method
  let iCard = inputCardNumber.value;
  let iMonth = inputMonth.value;
  let iYear = inputYear.value;
  let iCode = inputSecurityCode.value;

  let data = [];
  let parseData = JSON.parse(localStorage.getItem("Checkout")); //null

  let item = {
    name: iNameValue,
    email: iEmailValue,
    table: iTable,
    method: radioValue,
    card: iCard,
    month: iMonth,
    year: iYear,
    code: iCode,
  };

  if (iname.value === "" && iemail.value === "" && itableNumber.value === "") {
    alert("You must fill all the input");
  }

  if (iname.value != "" && iemail.value != "" && itableNumber.value != "") {
    if (parseData === null) {
      data.push(item);
      localStorage.setItem("Checkout", JSON.stringify(data));
    }

    if (parseData != null) {
      parseData.push(item);
      localStorage.setItem("Checkout", JSON.stringify(parseData));
    }
    localStorage.clear();
    location.replace("success.html");
  }
});
