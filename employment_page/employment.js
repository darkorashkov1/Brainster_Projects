// Navbar
const hamburger = document.querySelector(".hamburger");
      const hamburger_icon = hamburger.querySelector("span");
      const mobile_menu = document.querySelector(".mobile-menu");

      hamburger.addEventListener("click", () => {
        hamburger_icon.innerText =
          hamburger_icon.innerText === "sort" ? "close" : "sort";
        mobile_menu.classList.toggle("is-open");
      });

// radio form
const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");

const optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
});

optionsList.forEach((o) => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active");
  });
});

//   Popup window
var popup = document.getElementById("popup");
function openPopup() {
  popup.classList.add("open-popup");
}
function closePopup() {
  popup.classList.remove("open-popup");
}

//   validation
var validate = function (e) {
  var fields = document.querySelectorAll(
    '.options-container radio, .form-control input[type="text"]'
  );
  var regEx;
  var removeSpan;
  var par;
  var check = false;
  var val;
  var errArr = [];

  for (var i = 0; i < fields.length; i++) {
    if (fields[i].value === "") {
      if (fields[i].nextElementSibling.classList.contains("error")) {
        removeSpan = fields[i].nextElementSibling;
        par = fields[i].parentNode;
        par.removeChild(removeSpan);
        fields[i].nextElementSibling.innerHTML =
          fields[i].placeholder + " е задолжително поле!";
        fields[i].style.boxShadow = "0 0 2px 1px #eb3b3b";
        check = false;
        errArr.push(fields[i]);
      }
      fields[i].nextElementSibling.innerHTML =
        fields[i].placeholder + " е задолжително поле!";
      fields[i].style.boxShadow = "0 0 2px 1px #eb3b3b";
      check = false;
      errArr.push(fields[i]);
    } else {

      // check for validation
      if (fields[i].id !== "email" && fields[i].id !== "phone") {
        val = isValidChar(fields[i]);
        if (val === false) {
          fields[i].nextElementSibling.innerHTML =
            "Пополнете со валидни податоци!";
          fields[i].style.boxShadow = "0 0 2px 1px #eb3b3b";
          check = false;
          errArr.push(fields[i]);
        } else {
          fields[i].nextElementSibling.innerHTML = "";
          fields[i].style.boxShadow = "none";
          check = true;
        }
      }

      if (fields[i].id === "phone") {
        val = isValidPhone(fields[i]);
        if (val === false) {
          fields[i].nextElementSibling.innerHTML =
            "Хммм! Вашиот број не е валиден.";
          fields[i].style.boxShadow = "0 0 2px 1px #eb3b3b";
          check = false;
          errArr.push(fields[i]);
        } else {
          fields[i].nextElementSibling.innerHTML = "";
          fields[i].style.boxShadow = "none";
          check = true;
        }
      }

      if (fields[i].id === "email") {
        val = isValidEmail(fields[i]);
        if (val === false) {
          fields[i].nextElementSibling.innerHTML =
            "Хммм! Вашата имејл адреса не е валидна.";
          fields[i].style.boxShadow = "0 0 2px 1px #eb3b3b";
          check = false;
          errArr.push(fields[i]);
        } else {
          fields[i].nextElementSibling.innerHTML = "";
          fields[i].style.boxShadow = "none";
          check = true;
        }
      }
    }
  }

  if (check === false) {
    var count = 0;
    var toErr = setInterval(function () {
      var e = errArr[0].offsetTop + -25;
      var pos = Math.abs(e);
      if (count < pos) {
        count++;
        window.scrollTo(0, count);
      } else {
        clearInterval(toErr);
      }
    }, 1);
  }

  return check;

  // Patterns
  function isValidEmail(e) {
    regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var email = e.value;
    if (!regEx.test(email)) {
      return false;
    }
  }

  function isValidChar(e) {
    regEx = /^[a-zA-Z@#$%!?^&*()_+\-=\[\]{};':"\\|,.\/? ]*$/;
    var value = e.value;
    if (!regEx.test(value)) {
      return false;
    }
  }

  function isValidPhone(e) {
    regEx = /^[+]?[(]?[+]?\d{2,4}[)]?[-\s]?\d{2,8}[-\s]?\d{2,8}$/;
    var value = e.value;
    if (!regEx.test(value)) {
      return false;
    }
  }
};