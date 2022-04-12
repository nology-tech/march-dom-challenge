const welcomeElement = document.getElementById("welcome-title");
welcomeElement.innerHTML = "Welcome to Nology Conference 2023!";

welcomeElement.addEventListener("click", () => {
  alert("You clicked me");
});

const formInputs = document.querySelectorAll(".form-input");
// LIKE AN ARRAY -> NODE-LIST -> .form-input

const handleRegister = event => {
  // 3.1 Stop the form from submitting
  event.preventDefault();
  // 3.2 Display a success if the form valid
  const errorMsg = document.getElementById("error-message");
  // if both have values
  if (formInputs[0].value && formInputs[1].value) {
    errorMsg.classList.remove("show");
    alert("You have registered");
    welcomeElement.innerHTML = "Thank you for registering";
  } else if (formInputs[0].value || formInputs[1].value) {
    alert("One of the fields is empty");
    errorMsg.classList.add("show");
  } else {
    errorMsg.classList.add("show");
  }
};

formInputs.forEach(formInput => {
  formInput.addEventListener("input", event => {
    const inputValue = event.target.value;

    if (inputValue != undefined && inputValue.length > 0) {
      event.target.classList.remove("invalid");
      event.target.classList.add("valid");
    } else {
      event.target.classList.remove("valid");
      event.target.classList.add("invalid");
    }
  });

  // blur -> CLICKS AWAY FROM INPUT
  // focus -> CLICKS INTO INPUT
  // click 
  formInput.addEventListener("blur", event => {
    event.target.classList.add("active");
  });
});

const summaryPoints = ["Disco", "SCSS", "Disco", "Challenges"];

const summaryList = document.getElementById("summary-list");

const summaryPointsHTML = summaryPoints.map(summaryPoint => {
  return `<li>${summaryPoint}</li>`;
});


summaryList.innerHTML = summaryPointsHTML.join("");
