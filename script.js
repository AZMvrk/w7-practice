const rootElement = document.querySelector("#root")

const fetchUrl = async (url) => {
  const response = await fetch(url)
  return response.json()
}


const init = async () => {
  rootElement.innerHTML = "LOADING..."
  const data = await fetchUrl("Link!!!")
  console.log(data)
}

init()