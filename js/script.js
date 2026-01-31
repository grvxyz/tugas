// Welcome Text Dynamic
const nameInput = document.getElementById("name");
const welcomeText = document.getElementById("welcomeText");

if (nameInput) {
  nameInput.addEventListener("input", () => {
    welcomeText.innerText = nameInput.value
      ? `Hi ${nameInput.value}, Welcome To Website`
      : "Hi, Welcome To Website";
  });
}

// Form Validation + Show Result
const form = document.getElementById("messageForm");
const result = document.getElementById("result");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const birth = document.getElementById("birth").value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const message = document.getElementById("messageText").value;

    if (!name || !gender) {
      alert("Please fill name and gender!");
      return;
    }

    result.innerHTML = `
      <p><b>Name:</b> ${name}</p>
      <p><b>Birth Date:</b> ${birth}</p>
      <p><b>Gender:</b> ${gender.value}</p>
      <p><b>Message:</b> ${message}</p>
    `;
  });
}
