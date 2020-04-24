//---------------------------------------------------------------
//------------------------GET PUZZLE-----------------------------
//---------------------------------------------------------------
//actual code
const getPuzzleAsync = async (wordCount) => {
    const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    if (response.status === 200) {
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error("Unable to fetch puzzle")
    }
}

//---------------------------------------------------------------
//------------------------GET COUNTRY NAME-----------------------
//---------------------------------------------------------------

//actual code
const getLocationAsync = async () => {
    const response = await fetch("//ipinfo.io/json?token=81260d784b72e3")
    if (response.status === 200) {
        return response.json()
    } else {
        throw new Error("Unable to fetch data")
    }
}

const getCountryNameAsync = async (countryCode) => {
    const response = await fetch("//restcountries.eu/rest/v2/all")
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