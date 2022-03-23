function fillData(newData) {
    document.getElementById('agreement').innerHTML = newData.agreement;
    document.getElementById('confidence').innerHTML = newData.confidence;
    document.getElementById('irony').innerHTML = newData.irony;
    document.getElementById('model').innerHTML = newData.model;
    document.getElementById('score_tag').innerHTML = newData.score_tag;
}
function isValidURL(str) {
    var res = str.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    if (res == null)
    {

        return false;
    }
    else
    {
        document.getElementById('error').innerHTML = "";
        return true;
    }
}

function handleError() {
    document.getElementById('agreement').innerHTML = "";
    document.getElementById('confidence').innerHTML = "";
    document.getElementById('irony').innerHTML = "";
    document.getElementById('model').innerHTML = "";
    document.getElementById('score_tag').innerHTML ="";
    document.getElementById('error').innerHTML = "There is an error with the url you entered";
}

export { fillData,isValidURL,handleError}