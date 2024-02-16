ocument.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector("#loginForm");
  const signUpForm = document.querySelector("#signUpForm");

  const email = document.querySelector("#email");
  const password = document.querySelector("#password");
  const confirmPassword = document.querySelector("#confirmPassword");
  const username = document.querySelector("#username");
  const message = document.querySelector("#message");

  const signUpLink = document.querySelector("#signUpLink");
  const loginLink = document.querySelector("#loginLink");

  signUpLink.addEventListener("click", (e) => {
    e.preventDefault();
    signUpForm.style.display = "block";
    loginForm.style.display = "none";
  });

  loginLink.addEventListener("click", (e) => {
    e.preventDefault();
    signUpForm.style.display = "none";
    loginForm.style.display = "block";
  });

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!validateEmail(email.value.trim())) {
      message.textContent = "Please enter a valid email address.";
      return;
    }

    if (password.value.length < 6) {
      message.textContent = "Password must be at least 6 characters long.";
      return;
    }

    // If the form is valid, you can submit it here.
    // For example, you can send an AJAX request to the server for authentication.
  });

  signUpForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!validateEmail(email.value.trim())) {
      message.textContent = "Please enter a valid email address.";
      return;
    }

    if (password.value.length < 6) {
      message.textContent = "Password must be at least 6 characters long.";
      return;
    }

    if (password.value !== confirmPassword.value) {
      message.textContent = "Passwords do not match.";
      return;
    }

    if (username.value.length < 3) {
      message.textContent = "Username must be at least 3 characters long.";
      return;
    }

    // If the form is valid, you can submit it here.
    // For example, you can send an AJAX request to the server for registration.
  });

  function validateEmail(email) {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
});