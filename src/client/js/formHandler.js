import {checkForName} from './nameChecker';

async function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    if (formText == "") {
        alert("Please enter text in the text field");
    }
    else {
        checkForName(formText)
        console.log("::: Form Submitted :::")
        let res = await fetch('http://localhost:8081/key')
        let key = await res.text()
        await fetch(`https://api.meaningcloud.com/sentiment-2.1?key=${key}&of=json&txt=${formText}&lang=en`)
        .then(res => res.json())
        .then(function(res) {
            console.log(res);
            document.getElementById('results').innerHTML = `Agreement: ${res.agreement}, Irony: ${res.irony}, Model: ${res.model}`;
        })
    }
}

export { handleSubmit }
