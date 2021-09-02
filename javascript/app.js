const darkButton = document.getElementById("dark");
const lightButton = document.getElementById("light");

const body = document.body;

// Apply the cached theme on reload

const theme = localStorage.getItem("theme");
const isSolar = localStorage.getItem("isSolar");

if (theme) {
  body.classList.add(theme);
  isSolar && body.classList.add("solar");
}

// Button Event Handlers

darkButton.onclick = () => {
  body.classList.replace("light", "dark");
  localStorage.setItem("theme", "dark");
};
// dark theme

lightButton.onclick = () => {
  body.classList.replace("dark", "light");
  localStorage.setItem("theme", "light");
};

// todo list
