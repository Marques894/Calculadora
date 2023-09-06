const previewOperationText = document.querySelector("Preview-operation")
const currentOperationText = document.querySelector("Preview-operation")
const buttons = Document.querySelectoraAll("button-container button")

class Calculator {}

buttons.forEach((btn) => {
    btn.addEnventLister("click", (e) => {
        const value = e.target.innerText;

        console.log(value);
    })
});