// data collection
const userNameInput = document.getElementById("name");
// console.log("test");

const userKmInput = document.getElementById("km");
// console.log("test km");

const resultSection = document.querySelector(".result-section");

// PROGRAM LOGIC

// user input send button
const sendBtn = document.getElementById("send");
const selectElement = document.getElementById("age");
selectElement.addEventListener("change", function () {
  const selectValue = selectElement.value;
  //   console.log("selected value: " + selectValue);
});

// ticket-offer variable
let ticketOfferVariable = "Standard ticket";

// selected variables
const minor = "minor";
const elderly = "elderly";

// btn event listener
sendBtn.addEventListener("click", function () {
  //   console.log("send button test");
  const userName = userNameInput.value;
  const userKm = parseInt(userKmInput.value);
  console.log(typeof userKm);

  if (userName === "" || isNaN(userKm)) {
    alert("Please enter name and kilometers");
    window.location.reload();
  }

  let ticketPrice = 0.21 * userKm;

  const selectValue = selectElement.value;
  if (selectValue === minor) {
    ticketPrice = (ticketPrice - ticketPrice * 0.2)
      .toFixed(2)
      .replace(".", ",");
  } else if (selectValue === elderly) {
    ticketPrice = (ticketPrice - ticketPrice * 0.4)
      .toFixed(2)
      .replace(".", ",");
  } else {
    ticketPrice = ticketPrice.toFixed(2).replace(".", ",");
  }

  if (selectValue === minor) {
    ticketOfferVariable = "20% discount";
  } else if (selectValue === elderly) {
    ticketOfferVariable = "40% discount";
  } else {
    ticketOfferVariable = "Standard ticket";
  }

  const coach = Math.floor(Math.random() * 10 + 1);
  const ipCode = Math.floor(Math.random() * 100000);

  //   output
  document.getElementById("ticket-offer").innerHTML = ticketOfferVariable;
  document.getElementById("ip-code").innerHTML = ipCode;
  document.getElementById("coach").innerHTML = coach;
  document.getElementById("passenger-name").innerHTML = userName;
  document.getElementById("ticket-price").innerHTML = ticketPrice;
});

// clear button
const clearBtn = document.getElementById("clear");
clearBtn.addEventListener("click", function () {
  //   console.log("clear button test");
  userNameInput.value = " ";
  userKmInput.value = " ";

  document.getElementById("ip-code").innerHTML = "";
  document.getElementById("coach").innerHTML = "";
  document.getElementById("passenger-name").innerHTML = "";
  document.getElementById("ticket-price").innerHTML = "";
});
