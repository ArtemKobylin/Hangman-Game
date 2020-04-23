//---------------------------------------------------------------
//------------------------GET PUZZLE-----------------------------
//---------------------------------------------------------------
//actual code
const getPuzzleAsync = async (wordCount) => {
    const response = await fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    if (response.status === 200) {
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error("Unable to fetch puzzle")
    }
}


//testing different technologies
// const getPuzzleFetch = (wordCount) => {
//     return fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`, {})
//         .then((response) => {
//             if (response.status === 200) {
//                 return response.json()
//             } else {
//                 throw new Error("Unable to fetch puzzle")
//             }
//         }).then((data) => {
//             return data.puzzle
//         }).catch((error) => {
//             console.log(error)
//         })
// }

// //promise
// const getPuzzlePromise = (wordCount) => new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest()

//     request.addEventListener("readystatechange", (e) => {
//         if (e.target.readyState === 4 && e.target.status === 200) {
//             const data = JSON.parse(e.target.responseText)
//             resolve(data.puzzle)
//         } else if (e.target.readyState === 4) {
//             reject("An error has taken place!")
//         }
//     })

//     request.open("GET", `https://puzzle.mead.io/slow-puzzle?wordCount=${wordCount}`)
//     request.send()
// })

// //callback
// const getPuzzle = (wordCount, callback) => {
//     //Making a HTTP-Request

//     //Constructor function for the request
//     //Its name is depricated. Not only XML data can be parsed
//     //JSON is also allowed
//     const request = new XMLHttpRequest()

//     request.addEventListener("readystatechange", (e) => {
//         //readyState - property that contains one of four Http-request states
//         //0 - client created
//         //1 - open() called
//         //2 - send() called
//         //3 - request download
//         //4 - done
//         if (e.target.readyState === 4 && e.target.status === 200) {
//             //resposeText is a property that contains the response data
//             const data = JSON.parse(e.target.responseText)
//             callback(undefined, data.puzzle)
//         } else if (e.target.readyState === 4) {
//             callback("An error has taken place!", undefined)
//         }
//     })

//     //Set up a Http method and URL
//     request.open("GET", `https://puzzle.mead.io/slow-puzzle?wordCount=${wordCount}`)
//     request.send()
// }

// const getPuzzleSync = () => {
//     //Making a HTTP-Request

//     //Constructor function for the request
//     //Its name is depricated. Not only XML data can be parsed
//     //JSON is also allowed
//     const request = new XMLHttpRequest()

//     //Set up a Http method and URL
//     request.open("GET", "https://puzzle.mead.io/slow-puzzle?wordCount=1", false) //false - switch to synchronous JS
//     request.send()

//     if (request.readyState === 4 && request.status === 200) {
//         //resposeText is a property that contains the response data
//         const data = JSON.parse(request.responseText)
//         return data
//     } else if (request.readyState === 4) {
//         return "An error has taken place!"
//     }
// }

//---------------------------------------------------------------
//------------------------GET COUNTRY NAME-----------------------
//---------------------------------------------------------------

//actual code
const getLocationAsync = async () => {
    const response = await fetch("http://ipinfo.io/json?token=81260d784b72e3")
    if (response.status === 200) {
        return response.json()
    } else {
        throw new Error("Unable to fetch data")
    }
}

const getCountryNameAsync = async (countryCode) => {
    const response = await fetch("https://restcountries.eu/rest/v2/all")
    if (response.status === 200) {
        const data = await response.json()
        return data.find(country => country.alpha2Code === countryCode).name
    } else {
        throw new Error("Unable to fetch country name")
    }
}

const getCurrentCountry = async () => {
    const data = await getLocationAsync()
    return getCountryNameAsync(data.country)
}


//testing different technologies
//promise
// const getCountryNameFetch = (countryCode) => {
//     return fetch("https://restcountries.eu/rest/v2/all", {})
//         .then((response) => {
//             if (response.status === 200) {
//                 return response.json()
//             } else {
//                 throw new Error("Unable to fetch country name")
//             }
//         }).then((data) => data.find(country => country.alpha2Code === countryCode).name)
//         .catch((error) => {
//             console.log(error)
//         })
// }

// const getCountryNamePromise = (countryCode) => new Promise((resolve, reject) => {
//     const countryRequest = new XMLHttpRequest()

//     countryRequest.addEventListener("readystatechange", e => {
//         if (e.target.status === 200 && e.target.readyState === 4) {
//             const data = JSON.parse(e.target.responseText)
//             resolve(data.find(country => country.alpha2Code === countryCode).name)
//         } else if (e.target.readyState === 4) {
//             reject("Unable to fetch data")
//         }
//     })

//     countryRequest.open("GET", "https://restcountries.eu/rest/v2/all")
//     countryRequest.send()
// })
//callback
// const getCountryName = (countryCode, callback) => {
    
//     const countryRequest = new XMLHttpRequest()

//     countryRequest.addEventListener("readystatechange", e => {
//         if (e.target.status === 200 && e.target.readyState === 4) {
//             const data = JSON.parse(e.target.responseText)
//             callback(undefined, data.find(country => country.alpha2Code === countryCode).name)
//         } else if (e.target.readyState === 4) {
//             callback("Unable to fetch data", undefined)
//         }
//     })

//     countryRequest.open("GET", "https://restcountries.eu/rest/v2/all")
//     countryRequest.send()
// }

//get location over ip

// const getLocation = () => {
//     return fetch("http://ipinfo.io/json?token=81260d784b72e3").then((response) => {
//         if (response.status === 200) {
//             return response.json()
//         } else {
//             throw new Error("Unable to fetch data")
//         }
//     })
// }