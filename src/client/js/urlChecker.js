/*const formdata = new FormData();
formdata.append("key", "719ca4341cfd5080fea2827cf87dd982");
formdata.append("txt", "YOUR TEXT HERE");
formdata.append("lang", "en");  // 2-letter code, like en es fr ...

const requestOptions = {
  method: 'POST',
  body: formdata,
  redirect: 'follow'
};

const response = fetch("https://api.meaningcloud.com/sentiment-2.1", requestOptions)
  .then(response => ({
    status: response.status, 
    body: response.json()
  }))
  .then(({ status, body }) => console.log(status, body))
  .catch(error => console.log('error', error));

*/

function urlSubmit(event) {
    //event.preventDefault()
    console.log("I'm Here");

    // check what text was put into the form field
    let formText = document.getElementById('url').value

    console.log(formText)

    /*const fetchLink ='http://localhost:8081/test' //"https://api.meaningcloud.com/sentiment-2.1?"+apiKey+""
    fetch(fetchLink)
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    })*/
}

export { urlSubmit }