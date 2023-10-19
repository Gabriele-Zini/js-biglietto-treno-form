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

// selected variables
const minor = "minor";
const elderly = "elderly";

// btn event listener
sendBtn.addEventListener("click", function () {
  //   console.log("send button test");
  const userName = userNameInput.value;
  const userKm = parseInt(userKmInput.value);
  console.log(typeof userKm)

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

  const coach = Math.floor(Math.random() * 10 + 1);
  const ip_code = Math.floor(Math.random() * 100000);


//   output
  document.getElementById("ip-code").innerHTML = ip_code;
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
