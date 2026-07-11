const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {
  navLinks.classList.toggle("open");
});

const tags = document.querySelectorAll(".tag");

tags.forEach(function (tag) {
  tag.addEventListener("click", function () {
    tags.forEach(function (t) {
      t.classList.remove("active");
    });
    tag.classList.add("active");
  });
});

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(function (item) {
  const question = item.querySelector(".faq-question");

  question.addEventListener("click", function () {
    const isOpen = item.classList.contains("open");

    faqItems.forEach(function (i) {
      i.classList.remove("open");
    });

    if (!isOpen) {
      item.classList.add("open");
    }
  });
});

const loginPageForm = document.getElementById("loginPageForm");

if (loginPageForm) {
  const lEmail = document.getElementById("lEmail");
  const lPassword = document.getElementById("lPassword");
  const lEmailErr = document.getElementById("lEmailErr");
  const lPasswordErr = document.getElementById("lPasswordErr");
  const emailPattern = /^[\w.-]+@[\w.-]+\.\w+$/;

  loginPageForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let isValid = true;
    lEmail.classList.remove("invalid");
    lPassword.classList.remove("invalid");
    lEmailErr.textContent = "";
    lPasswordErr.textContent = "";

    if (lEmail.value.trim() === "") {
      lEmail.classList.add("invalid");
      lEmailErr.textContent = "Email can't be empty";
      isValid = false;
    } else if (!emailPattern.test(lEmail.value.trim())) {
      lEmail.classList.add("invalid");
      lEmailErr.textContent = "Enter a valid email address";
      isValid = false;
    }

    if (lPassword.value === "") {
      lPassword.classList.add("invalid");
      lPasswordErr.textContent = "Password can't be empty";
      isValid = false;
    }

    if (!isValid) {
      alert("Please fix the errors before logging in.");
      return;
    }

    alert("Logged in successfully! Welcome back.");
    loginPageForm.reset();
  });
}

const signupForm = document.getElementById("signupForm");

if (signupForm) {
  const sName = document.getElementById("sName");
  const sEmail = document.getElementById("sEmail");
  const sPassword = document.getElementById("sPassword");
  const sConfirm = document.getElementById("sConfirm");
  const sNameErr = document.getElementById("sNameErr");
  const sEmailErr = document.getElementById("sEmailErr");
  const sPasswordErr = document.getElementById("sPasswordErr");
  const sConfirmErr = document.getElementById("sConfirmErr");
  const emailPattern2 = /^[\w.-]+@[\w.-]+\.\w+$/;

  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let isValid = true;
    [sName, sEmail, sPassword, sConfirm].forEach(function (input) {
      input.classList.remove("invalid");
    });
    [sNameErr, sEmailErr, sPasswordErr, sConfirmErr].forEach(function (span) {
      span.textContent = "";
    });

    if (sName.value.trim() === "") {
      sName.classList.add("invalid");
      sNameErr.textContent = "Name can't be empty";
      isValid = false;
    }

    if (sEmail.value.trim() === "") {
      sEmail.classList.add("invalid");
      sEmailErr.textContent = "Email can't be empty";
      isValid = false;
    } else if (!emailPattern2.test(sEmail.value.trim())) {
      sEmail.classList.add("invalid");
      sEmailErr.textContent = "Enter a valid email address";
      isValid = false;
    }

    if (sPassword.value === "") {
      sPassword.classList.add("invalid");
      sPasswordErr.textContent = "Password can't be empty";
      isValid = false;
    } else if (sPassword.value.length < 6) {
      sPassword.classList.add("invalid");
      sPasswordErr.textContent = "Must be at least 6 characters";
      isValid = false;
    }

    if (sConfirm.value === "") {
      sConfirm.classList.add("invalid");
      sConfirmErr.textContent = "Please confirm your password";
      isValid = false;
    } else if (sConfirm.value !== sPassword.value) {
      sConfirm.classList.add("invalid");
      sConfirmErr.textContent = "Passwords don't match";
      isValid = false;
    }

    if (!isValid) {
      alert("Please fix the errors before continuing.");
      return;
    }

    alert("Account created successfully! Welcome, " + sName.value.trim());
    signupForm.reset();
  });
}
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  const nameField = document.getElementById("cName");
  const emailField = document.getElementById("cEmail");
  const messageField = document.getElementById("cMessage");
  const formMsg = document.getElementById("formMsg");
  const emailPattern = /^[\w.-]+@[\w.-]+\.\w+$/;

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    if (nameField.value.trim() === "") {
      formMsg.textContent = "Please enter your name.";
      return;
    }

    if (!emailPattern.test(emailField.value.trim())) {
      formMsg.textContent = "Please enter a valid email address.";
      return;
    }

    if (messageField.value.trim() === "") {
      formMsg.textContent = "Please write a message before sending.";
      return;
    }

    formMsg.textContent = "Thanks! Your message has been sent.";
    contactForm.reset();
  });
}
