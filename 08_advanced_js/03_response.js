/*  Another way to fetch an API response with the help of fetch() and handle the error: */

fetch('https://api.github.com/users/ayan631')
.then((response) => {
    return response.json()  //return the response object in json format.
})
.then((data) => {
    console.log(data)   //above returned object is printed here.
})
.catch((error) => console.log(error))