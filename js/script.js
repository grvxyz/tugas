// Welcome Text Dynamic
const nameInput = document.getElementById("name");
const welcomeText = document.getElementById("welcomeText");

if (nameInput && welcomeText) {
  nameInput.addEventListener("input", () => {
    welcomeText.textContent = nameInput.value
      ? `Hi ${nameInput.value}, Welcome To Website`
      : "Hi, Welcome To Website";
  });
}

// Form Validation & Show Result
const form = document.getElementById("messageForm");
const result = document.getElementById("result");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const birth = document.getElementById("birth").value;
    const gender = document.querySelector("input[name='gender']:checked");
    const message = document.getElementById("messageText").value;

    if (!name || !gender) {
      alert("Nama dan Jenis Kelamin wajib diisi!");
      return;
    }

    result.innerHTML = `
      <p><strong>Current Time:</strong> ${new Date()}</p>
      <p><strong>Nama:</strong> ${name}</p>
      <p><strong>Tanggal Lahir:</strong> ${birth}</p>
      <p><strong>Jenis Kelamin:</strong> ${gender.value}</p>
      <p><strong>Pesan:</strong> ${message}</p>
    `;
  });
}
