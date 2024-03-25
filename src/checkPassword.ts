const genericContainer = document.querySelector(".generic-container") as HTMLDivElement;
const passwordInput = document.getElementById("password") as HTMLInputElement;
const result = document.querySelector(".result-container") as HTMLDivElement;
const resultOut = document.querySelector(".result") as HTMLDialogElement;
const button = document.getElementById("submit") as HTMLButtonElement;


const password = passwordInput.value;

button.addEventListener("click", (event: MouseEvent) =>{
    showLoading(genericContainer);
    checkPassword(passwordInput.value);
})

passwordInput.addEventListener("keypress", (event: KeyboardEvent) => {
    if(event.key === "Enter"){
        showLoading(genericContainer);
        checkPassword(passwordInput.value);
    }
})

async function checkPassword(password: string) {

    const object = new PasswordCheckService();

    const isCommon = object.isPasswordCommon(password);

    const strength = object.checkPasswordStrength(password);

    if(strength == 0){
        resultOut.innerHTML = "Password: Short";
        resultOut.style.color = "red";
    }
    else if(strength == 1){
        resultOut.innerHTML = "Password: Common";
        resultOut.style.color = "red";
    }
    else if(strength == 2){
        resultOut.innerHTML = "Password: Weak";
        resultOut.style.color = "orange";
    }
    else if(strength == 3){
        resultOut.innerHTML = "Password: Ok";
        resultOut.style.color = "orange";
    }
    else if(strength == 4){
        resultOut.innerHTML = "Password: Strong";
        resultOut.style.color = "green";
    }
    else if(isCommon === true){
        resultOut.innerHTML = "Password: Common";
        resultOut.style.color = "red";
    }

    result.style.display = "block";
}