/*function urlSubmit(event) {
    event.preventDefault()
    // check what text was put into the form field
    let formText = document.getElementById('url').value
    if (isValidURL(formText)) {
        fetchData(formText)
    }
    else {
        handleError();
    }
}

async function fetchData(formText) {
    console.log("We are sending this");
    console.log(formText);
    const result = await fetch('http://localhost:9000/checkUrl', {
        method: 'POST',
        body: JSON.stringify({
            value: formText
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    try {
        const newData = await result.json();
        console.log(newData);
        fillData(newData)
    }
    catch (error) {
        console.log("error", error);
    }
}*/

function fillData(newData) {
    document.getElementById('results').innerHTML = newData.confidence
    document.getElementById('agreement').innerHTML = newData.agreement
    document.getElementById('confidence').innerHTML = newData.confidence
    document.getElementById('irony').innerHTML = newData.irony
    document.getElementById('model').innerHTML = newData.model
    document.getElementById('score_tag').innerHTML = newData.score_tag
}
function isValidURL(str) {
    var res = str.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    if (res == null)
        return false;
    else
        return true;
}

function handleError() {
    console.log("This is not a real url");
}

export { fillData,isValidURL,handleError}