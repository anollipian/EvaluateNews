// /*const formdata = new FormData();
// formdata.append("key", "719ca4341cfd5080fea2827cf87dd982");
// formdata.append("txt", "YOUR TEXT HERE");
// formdata.append("lang", "en");  // 2-letter code, like en es fr ...

// const requestOptions = {
//   method: 'POST',
//   body: formdata,
//   redirect: 'follow'
// };

// */

// function urlSubmit(event) {
//     event.preventDefault()
//     console.log("I'm Here");

//     // check what text was put into the form field
//     let formText = document.getElementById('url').value

//     console.log(formText)
//    if(isValidURL(formText))
//    {
//    /*fetch('http://localhost:3000/techeckUrl',formText)
//     .then(res => res.json())
//     .then(function(res) {
//         document.getElementById('results').innerHTML = res.message
//     })
// */
//     const checkUrl = async (url = "http://localhost:3000/checkUrl", data = formText) => {
//       console.log("We are sending this");
//       console.log(data);
//       const response = await fetch(url, {
//           method: 'POST',
//           credentials: 'same-origin',
//           headers: {
//               'Content-Type': 'application/json'
//           },
//           body: JSON.stringify(data),
//       });
//       try {
//           const returnedData = await response.json();
//           console.log("We'll add this to post" + returnedData);
//           return newData;
//       }
//       catch (error) {
//           console.log("error", error);
//       }
//   }
//    /*{
//     const fetchLink ="'http://localhost:3000/api"+"/"+formText;
//     console.log(fetchLink);
//     fetch(fetchLink)
//     .then(res => res.json())
//     .then(function(res) {
//       console.log(res.message);
//         document.getElementById('results').innerHTML = res.message;
//     })
//   }*/
//    }
//   }
// function isValidURL(str) {
//   var res = str.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
//     if(res == null)
//         return false;
//     else
//         return true;
// }

// export { urlSubmit }


// async function urlSubmit(){
//   console.log("We are here")
//   let response = await fetch("http://localhost:3000/checkUrl", {
//   method: 'POST',
//   body: JSON.stringify({
//       value: document.getElementById('url').value
//   }),
//   headers: {
//       'Content-Type': 'application/json'
//   }
// })
// const result = await response.json();
// console.log(result);
// //setData(result)
// return result;
// };
  function urlSubmit(){
    event.preventDefault()

  let response =   fetch('http://localhost:9000/checkUrl', {
  method: 'POST',
  body: JSON.stringify({
      value: document.getElementById('url').value
  }),
  headers: {
      'Content-Type': 'application/json'
  }
})
const result =   response.json();
console.log(result);
//setData(result)
return result;
};

// function setData(result) {
//   let dataresult = document.getElementById('results');
//   console.log(dataresult)
//  // dataresult.innerText = `This phrase is ${result.irony} and it's ${result.subjectivity} too.`;
//  console.log(dataresult.innerText = `This phrase is ${result.irony} and it's ${result.subjectivity} too.`);
// };
 export { urlSubmit }