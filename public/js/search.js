
document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById("uv-address")
  const onTabs = localStorage.getItem('onTabs')
  input.addEventListener("keydown", handleInput)

  function handleInput(e) {
    // We only want the function to run if the key pressed is the Enter key
    if (e.key !== 'Enter') return;
      // If it doesn't contain a blocked keyword then proceed
      // Run the formatSearch function on the current value of the input
      const query = formatSearch(input.value)

      //Check if the user is using tabs
      if(onTabs === 'true'){
        //if the user is using tabs
        //default to basic searching
        window.location.href = __uv$config.prefix + __uv$config.encodeUrl(query) 
      }else {
      //if the user is not using tabs 
      // Set LocalStorage to [uv prefix] + [encoded search query]
      localStorage.setItem('url', __uv$config.prefix + __uv$config.encodeUrl(query) )
      window.location.href = 'g.html'
      }
    }

function formatSearch(query) {
  const engine = localStorage.getItem('enginee')
  if (engine === null){
    localStorage.setItem('enginee', 'https://google.com/search?q=')
  }

  try {
    return new URL(query).toString()
  } catch (e) { }

  try {
    const url = new URL(`https://${query}`)
    if (url.hostname.includes('.')) return url.toString()
  } catch (e) { }

  return new URL(engine + `${query}`).toString()
}

})
