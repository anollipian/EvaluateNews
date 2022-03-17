function handleSubmit(event) {
    event.preventDefault()
    let formText = document.getElementById('url').value
    if (Client.isValidURL(formText)) {
        fetchData(formText)
    }
    else {
        Client.handleError();
    }
}

async function fetchData(formText) {
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
        Client.fillData(newData)
    }
    catch (error) {
        console.log("error", error);
    }
}

export { handleSubmit }