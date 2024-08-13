//Function to load the apps
async function loada() {
  //get the json responce
    const responce = await fetch('/a.json');
      const Data = await responce.json();
       Data.forEach(data => {
        const i = document.getElementById('Gbox1')
    
        const g = document.createElement('div')
        g.classList.add('Gcontainer')
      g.style.background = "url(" +  data.img + ")"
    
        const gbutton = document.createElement('button')
        gbutton.textContent = 'Play Now!'
        const gtext = document.createElement('h5')
        gtext.textContent = data.Name
        gbutton.classList.add('pn')
        gbutton.setAttribute('onclick', "localStorage.setItem('url', ' " + data.href + "'); " +  "window.location.href = '/g.html';")
        
        g.appendChild(gbutton)
        g.appendChild(gtext)
        i.appendChild(g)
    })
  }