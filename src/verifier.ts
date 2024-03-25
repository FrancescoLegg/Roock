let APIKey = "Your APIKey";

const email = document.getElementById("emailInput") as HTMLInputElement;
const sendButton = document.getElementById("submit") as HTMLButtonElement;
const container = document.querySelector(".generic-container") as HTMLDivElement;
const statusDiv = document.getElementById("status") as HTMLDivElement;
const emailDiv = document.getElementById("email") as HTMLDivElement;
const resultDiv = document.getElementById("result") as HTMLDivElement;
const scoreDiv = document.getElementById("score") as HTMLDivElement;
const infoContainer = document.getElementById("info-container") as HTMLDivElement;

sendButton.addEventListener("click", (e: MouseEvent) => {
    showLoading(container);
    EmailVerify();
})

email.addEventListener("keydown", (event: KeyboardEvent) => {

    if(event.key === "Enter"){
        showLoading(container);
        EmailVerify();
    }

})


async function EmailVerify(): Promise<void> {
    if(email.value != ''){
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
    
                if(json.data.status == "valid")
                    statusDiv.style.color = "green";
                else if(json.data.status == "invalid")
                    statusDiv.style.color = "red";
    
                if(json.data.score >= 60)
                    scoreDiv.style.color = "green";
                else if(json.data.score >= 30 && json.data.score <60)
                    scoreDiv.style.color = "orange";
                else if(json.data.score < 30)
                    scoreDiv.style.color = "red";
    
            });
    }else{alert("Insert an Email");}
}
