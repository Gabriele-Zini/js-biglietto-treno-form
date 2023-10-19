## EXERCISE

Write a program that asks the user for:

1. the number of kilometers to be traveled
2. passenger's age
3. based on this information, the program should calculate the total price of the travel ticket, following these rules:
4. the ticket price is defined based on the kilometers (€0.21 per km)
   - a 20% discount is applied for minors
   - a 40% discount is applied for passengers over 65 years old."

### SOLUTION

**Data collection**

1.  Retrieve the HTML input elements using document.getElementById().

```javascript
// data collection
const userNameInput = document.getElementById("name");
// console.log("test");

const userKmInput = document.getElementById("km");
// console.log("test km");

const resultSection = document.querySelector(".result-section");
```

<br>

2.  Retrieve the HTML input buttons using document.getElementById().
```javascript
const sendBtn = document.getElementById("send");
const selectElement = document.getElementById("age");
selectElement.addEventListener("change", function () {
  const selectValue = selectElement.value;
  //   console.log("selected value: " + selectValue);
});

const clearBtn = document.getElementById("clear");
```
<br>

**Program logic**

1. set an alert if the user does not enter any name or inputs NaN or a negative number.

```javascript
if (userName.trim() === "" || isNaN(userKm) || userKm < 0) {
  alert("Please enter name and kilometers");
  window.location.reload();
}
```

<br>

2. calculate the ticket price based on age-related discount conditions through a conditional algorithm.

```javascript
// ticket price
let ticketPrice = 0.21 * userKm;

const selectValue = selectElement.value;
if (selectValue === minor) {
  ticketPrice = (ticketPrice - ticketPrice * 0.2).toFixed(2).replace(".", ",");
} else if (selectValue === elderly) {
  ticketPrice = (ticketPrice - ticketPrice * 0.4).toFixed(2).replace(".", ",");
} else {
  ticketPrice = ticketPrice.toFixed(2).replace(".", ",");
}
```

<br>

3. Set up a conditional algorithm to print the type of ticket offer.

```javascript
//   ticket offer conditions
if (selectValue === minor) {
  ticketOfferVariable = "20% discount";
} else if (selectValue === elderly) {
  ticketOfferVariable = "40% discount";
} else {
  ticketOfferVariable = "Standard ticket";
}
```

4. generate a random coach number.

```javascript
//   random coach number
const coach = Math.floor(Math.random() * 10 + 1);
```

<br>

5. generate a random IP code number.

```javascript
//   random IP code
const ipCode = Math.floor(Math.random() * 100000);
```

<br>

6. set up the clear button to remove all the data entered in the input.

```javascript
// clear button
const clearBtn = document.getElementById("clear");
clearBtn.addEventListener("click", function () {
  //   console.log("clear button test");
  userNameInput.value = " ";
  userKmInput.value = " ";

  document.getElementById("ticket-offer").innerHTML = "";
  document.getElementById("ip-code").innerHTML = "";
  document.getElementById("coach").innerHTML = "";
  document.getElementById("passenger-name").innerHTML = "";
  document.getElementById("ticket-price").innerHTML = "";
});
```

<br>

**Output**

1. print the ticket results using document.getElementById().

```javascript
document.getElementById("ticket-offer").innerHTML = ticketOfferVariable;
document.getElementById("ip-code").innerHTML = ipCode;
document.getElementById("coach").innerHTML = coach;
document.getElementById("passenger-name").innerHTML = userName;
document.getElementById("ticket-price").innerHTML = ticketPrice;
```
