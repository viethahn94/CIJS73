// khai báo lỗi
let error = document.querySelector(".error");
// input
let inputString = document.querySelector(".input-string");
// Button Reserve String
let btnReserveString = document.querySelector(".btn-reserve-string");
// Result
let result = document.querySelector(".result");
let resultBox = document.querySelector(".result-box");

//Validation
function validate() {
  error.innerHTML = "";
  let errorMessage = [];
  let isValidate = true;
  // validate chưa nhập input
  if (!inputString.value) {
    errorMessage.push("Input không được để trống");
  }

  // hiện thị lỗi
  if (errorMessage.length > 0) {
    let errorHtml = "";
    isValidate = false;
    for (const message of errorMessage) {
      errorHtml += "<li>" + message + "</li>";
    }
    error.innerHTML = errorHtml;
  }

  return isValidate;
}

// Hiển thị string đảo ngược
function renderReserveString() {
  let resultReverseString = "";
  // nếu Validate
  if (validate()) {
    // hiện kết quả
    resultBox.classList.remove("d-none");
    let length = inputString.value.length - 1;
    for (let index = length; index >= 0; index--) {
      resultReverseString += inputString.value[index];
    }
    if (resultReverseString) {
      result.innerHTML = resultReverseString;
    }
  } else {
    resultBox.classList.add("d-none");
  }
}

btnReserveString.onclick = renderReserveString;
