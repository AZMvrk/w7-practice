const rootElement = document.querySelector("#root")
const api_key = "07cl6tVuzL4NW4jBxao6Bwh01HV8SOuUeSUcoj7h"


const fetchUrl = async (url) => {
  const response = await fetch(url)
  return response.json()
}
   // <input type="date
const apodComponent = (apodData) => `
  <h2>${apodData.title}</h2>
  <h3>${apodData.date}</h3>
  <p>${apodData.explanation}</p>
  <img src=${apodData.url}>
`


const init = async () => {
  rootElement.innerHTML = "LOADING..."
  const data = await fetchUrl(`https://api.nasa.gov/planetary/apod?api_key=${api_key}`)
  console.log(data)

  //rootElement.innerHTML = `<h2>${data.title}</h2>`
  rootElement.insertAdjacentHTML("beforeend", apodComponent(data))

  const arrayData = await fetchUrl(`https://api.nasa.gov/planetary/apod?api_key=${api_key}&count=5`)
  console.log(arrayData)
  
  const dataByDate = await fetchUrl(`https://api.nasa.gov/planetary/apod?api_key=${api_key}&date2010-10-10`)
  console.log(dataByDate)
}

init()