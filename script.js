document.getElementById("signup-form").addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("Form submitted");
});

function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!name || !email || !password) {
    alert("All fields are required!");
    return false;
  }
  if (!email.includes("@")) {
    alert("Invalid email address!");
    return false;
  }
  if (password.length < 6) {
    alert("Password must be at least 6 characters!");
    return false;
  }

  return true;
}
