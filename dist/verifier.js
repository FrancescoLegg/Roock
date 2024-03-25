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
let APIKey = "fe75acc9e19cf1b25d62375ab5523722529d501e";
const email = document.getElementById("emailInput");
const sendButton = document.getElementById("submit");
const container = document.querySelector(".generic-container");
const statusDiv = document.getElementById("status");
const emailDiv = document.getElementById("email");
const resultDiv = document.getElementById("result");
const scoreDiv = document.getElementById("score");
const infoContainer = document.getElementById("info-container");
sendButton.addEventListener("click", (e) => {
    showLoading(container);
    EmailVerify();
});
email.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        showLoading(container);
        EmailVerify();
    }
});
function EmailVerify() {
    return __awaiter(this, void 0, void 0, function* () {
        if (email.value != '') {
            const URL = `https://api.hunter.io/v2/email-verifier?email=${email.value}&api_key=${APIKey}`;
            fetch(URL)
                .then(response => response.json())
                .then(json => {
                container.style.top = "0%";
                container.style.transform = "translate(0%,0%)";
                infoContainer.style.display = "block";
                statusDiv.innerHTML = "Status: " + json.data.status;
                emailDiv.innerHTML = "Email: " + json.data.email;
                resultDiv.innerHTML = "Result: " + json.data.result;
                scoreDiv.innerHTML = "Score: " + json.data.score + "%";
                if (json.data.status == "valid")
                    statusDiv.style.color = "green";
                else if (json.data.status == "invalid")
                    statusDiv.style.color = "red";
                if (json.data.score >= 60)
                    scoreDiv.style.color = "green";
                else if (json.data.score >= 30 && json.data.score < 60)
                    scoreDiv.style.color = "orange";
                else if (json.data.score < 30)
                    scoreDiv.style.color = "red";
            });
        }
        else {
            alert("Insert an Email");
        }
    });
}
