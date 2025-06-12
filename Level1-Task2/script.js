const sectionColors = [
  "linear-gradient(to right, #ff512f, #dd2476)",
  "linear-gradient(to right, #24c6dc, #514a9d)",
  "linear-gradient(to right, #00b09b, #96c93d)",
  "linear-gradient(to right, #e65c00, #f9d423)",
  "linear-gradient(to right, #fc00ff, #00dbde)",
  "linear-gradient(to right, #4e54c8, #8f94fb)"
];

let currentColor = 0;

function changeSectionColor() {
  const section = document.getElementById("colorSection");
  section.style.background = sectionColors[currentColor];
  currentColor = (currentColor + 1) % sectionColors.length;
}

function showGreeting() {
  const hour = new Date().getHours();
  let greeting = "Hello!";
  if (hour < 12) greeting = "Good Morning, Developer.";
  else if (hour < 18) greeting = "Good Afternoon, Developer.";
  else greeting = "Good Evening, Developer.";
  alert(greeting);
}

function addNumbers() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const resultField = document.getElementById("result");
  if (isNaN(num1) || isNaN(num2)) {
    resultField.textContent = "Please enter valid numbers.";
    resultField.style.color = "#ff4b2b";
  } else {
    resultField.textContent = "Result: " + (num1 + num2);
    resultField.style.color = "#00ff95";
  }
}