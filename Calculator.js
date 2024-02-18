// Reset Function :

const reset = () => {
  document.querySelector(".inputsec").value = "";
};

// Display Funciton :

const display = (e) => {
  document.querySelector(".inputsec").value += e;
};

// Equate or Evaluate Funciton :

const equate = () => {
  const inputValue = document.querySelector(".inputsec").value;

  const solve = eval(inputValue);

  document.querySelector(".inputsec").value = solve;
};

// Define HTML :

const calculator = document.querySelector(".calculatorsec");

calculator.innerHTML = `

<input class="inputsec" type="text" />

<input class="cancelsec" type="button" value="CE" onclick="reset()" />

<input class="numbersec" type="button" value="7" onclick="display('7')" />

<input class="numbersec" type="button" value="8" onclick="display('8')" />

<input class="numbersec" type="button" value="9" onclick="display('9')" />

<input class="signsec" type="button" value="+" onclick="display('+')" />

<input class="numbersec" type="button" value="4" onclick="display('4')" />

<input class="numbersec" type="button" value="5" onclick="display('5')" />

<input class="numbersec" type="button" value="6" onclick="display('6')" />

<input class="signsec" type="button" value="-" onclick="display('-')" />

<input class="numbersec" type="button" value="1" onclick="display('1')" />

<input class="numbersec" type="button" value="2" onclick="display('2')" />

<input class="numbersec" type="button" value="3" onclick="display('3')" />

<input class="signsec" type="button" value="/" onclick="display('/')" />

<input class="signsec" type="button" value="." onclick="display('.')" />

<input class="numbersec" type="button" value="0" onclick="display('0')" />

<input class="signsec" type="button" value="%" onclick="display('%')" />

<input class="signsec" type="button" value="*" onclick="display('*')" />

<input class="equaltosec" type="button" value="=" onclick="equate()" />

`;

// CSS Styling

document.querySelector(".cancelsec").style.background = "#dc3545";

const signSecElements = document.querySelectorAll(".signsec");

for (const element of signSecElements) {
  element.style.background = "#0069d9";
}

const numberSecElements = document.querySelectorAll(".numbersec");

for (const element of numberSecElements) {
  element.style.background = "#545b62a8";
}
