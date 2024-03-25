"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const genericContainer = document.querySelector(".generic-container");
const passwordInput = document.getElementById("password");
const result = document.querySelector(".result-container");
const resultOut = document.querySelector(".result");
const button = document.getElementById("submit");
const password = passwordInput.value;
button.addEventListener("click", (event) => {
    showLoading(genericContainer);
    checkPassword(passwordInput.value);
});
passwordInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        showLoading(genericContainer);
        checkPassword(passwordInput.value);
    }
});
function checkPassword(password) {
    return __awaiter(this, void 0, void 0, function* () {
        const object = new PasswordCheckService();
        const isCommon = object.isPasswordCommon(password);
        const strength = object.checkPasswordStrength(password);
        if (strength == 0) {
            resultOut.innerHTML = "Password: Short";
            resultOut.style.color = "red";
        }
        else if (strength == 1) {
            resultOut.innerHTML = "Password: Common";
            resultOut.style.color = "red";
        }
        else if (strength == 2) {
            resultOut.innerHTML = "Password: Weak";
            resultOut.style.color = "orange";
        }
        else if (strength == 3) {
            resultOut.innerHTML = "Password: Ok";
            resultOut.style.color = "orange";
        }
        else if (strength == 4) {
            resultOut.innerHTML = "Password: Strong";
            resultOut.style.color = "green";
        }
        else if (isCommon === true) {
            resultOut.innerHTML = "Password: Common";
            resultOut.style.color = "red";
        }
        result.style.display = "block";
    });
}
