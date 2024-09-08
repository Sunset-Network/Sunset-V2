//removed the note because silvereen got mad at me :sob:

//removed another note because silvereen got mad at me :sob:
//defining go brr
const stockSW = "/uv/sw.js";
const swAllowedHostnames = ["localhost", "127.0.0.1"];
const selectedLangs = localStorage.getItem('selectedLang');
const boxc = localStorage.getItem('boxc');
const engine = localStorage.getItem('enginee');
const uvengine = document.getElementById('uv-search-engine');
const background = localStorage.getItem('background');
const theme = localStorage.getItem('theme');
const tabs = localStorage.getItem('tabs');
const ccc = localStorage.getItem('web');
const bac = localStorage.getItem('background2');
const color1 = localStorage.getItem('boxc');
const color2 = localStorage.getItem('boxcc');
const color3 = localStorage.getItem('boxccc');
const color4 = localStorage.getItem('boxcccc');
const color5 = localStorage.getItem('boxccccc');
const color6 = localStorage.getItem('boxcccccc');
const styleElement = document.createElement('style');
const navb = document.getElementById('nav2');
const bc = localStorage.getItem('bc');
const pr = localStorage.getItem('pr');
const se = localStorage.getItem('se');
const nav = localStorage.getItem('nav');
const defaultkey = localStorage.setItem('hotkey', '`')
const cc = 'https://google.com'
const hotkey = localStorage.getItem('key')
const textColor = localStorage.getItem('txt')
const bare = localStorage.getItem('bare')
const firstTime = localStorage.getItem('firstTime')

    //when the content loads
addEventListener("DOMContentLoaded", async (event) => {
    //if the user visits the website for the first time
    if(firstTime === null) {
        runFirstTime();
    }

    //if the user has visited the website before
    if(firstTime === 'No') {

    }

    //set the style element so functions can add onto it later
    styleElement.textContent = `
        :root {
       }
        `

        document.addEventListener('keydown', function(event) {
            if (event.key === hotkey) {
                top.location.replace("https://www.google.com")
                console.log(`Key PRESSED RUN URN RUN`)
            }
          })

    //Run Functions
    document.head.appendChild(styleElement);
    await registerSW();
    uvengine.value = engine;
    setBackground();
    setTheme();
    loadColors();
    });



        //[FUNCTIONS]


    //register the ultraviolet service worker
    async function registerSW() {
    if (!navigator.serviceWorker) {
    if (
        //check if the user is on http protocol
      location.protocol !== "https:" &&
      !swAllowedHostnames.includes(location.hostname)
    )
      throw new Error("Service workers cannot be registered without https.");
    
    throw new Error("Your browser doesn't support service workers.");
    }
    
    await navigator.serviceWorker.register(stockSW);
    console.log('✅ Ultraviolet Loaded!')
    }

    //Cloaker
function cloak() {
    var win = window.open()
    var url = "/"
    var iframe = win.document.createElement('iframe')
    top.location.replace("https://www.google.com/search?client=opera-gx&q=watch+the+sunset&sourceid=opera&ie=UTF-8&oe=UTF-8")

    iframe.style.position = "fixed";
    iframe.style.top = 0;
    iframe.style.bottom = 0;
    iframe.style.left = 0;
    iframe.style.right = 0;
    iframe.style.border  = "none"
    iframe.style.outline = "none";
    iframe.style.width = "100%"
    iframe.style.height = "100%";
    iframe.src = url

    win.document.body.appendChild(iframe)

}

//load the box color
function boxcolor() {
    styleElement.textContent += `
    :root {
.box::before {
    background: repeating-conic-gradient(
      from var(--a),
      ${color1},
      ${color2},
      ${color3},
      ${color4},
      ${color5},
      ${color6}
    )
  }
    .box::after {
    background: repeating-conic-gradient(
      from var(--a),
      ${color1},
      ${color2},
      ${color3},
      ${color4},
      ${color5},
      ${color6}
    );
    })
}`;
  document.head.appendChild(styleElement);
  console.log('complete')
}

function loadcustombj() {
    const backgroundImageC = localStorage.getItem('background2')
    document.body.style.backgroundImage = "url('" + backgroundImageC + "')"
    console.log('Background Set!')
}

function setBackground() {

    switch(background) {
        case "gray":
        document.body.style.backgroundImage = "url('/backgrounds/BasicGray.webp')";    
        break;
        case "blue":
        document.body.style.backgroundImage = "url('/backgrounds/BasicBlue.webp')";
        break;
        case "red":
        document.body.style.backgroundImage = "url('/backgrounds/BasicRed-01.webp')";
        break;
        case "purple":
        document.body.style.backgroundImage = "url('/backgrounds/BasicPurple-01.webp')";
        break;
        case "white":
        document.body.style.backgroundImage = "url('/backgrounds/light-sunset.webp')";
        break;
        case "pink":
        document.body.style.backgroundImage = "url('/backgrounds/BasicPink-01.webp')";
        break; 
        case "custom": 
        loadcustombj();
        break;
    };
    }

    function setTheme() {
    switch(theme) {
        case "blue": 
        document.body.style.backgroundImage = "url('/backgrounds/BasicBlue.webp')";
        document.body.classList.add(theme)
        console.log('✅ Themes!')
        break;
        case "light":
        document.body.style.backgroundImage = "url('/backgrounds/light-sunset.webp')";
        document.body.classList.add(theme)
        console.log('✅ Themes!')
        break;
        case "purple":
        document.body.style.backgroundImage = "url('/backgrounds/BasicPurple-01.webp')";
        document.body.classList.add(theme)
        console.log('✅ Themes!')
        break;
        case "red":
        document.body.style.backgroundImage = "url('/backgrounds/BasicRed-01.webp')";
        document.body.classList.add(theme)
        console.log('✅ Themes!')
        break;
        case "pink":
        document.body.style.backgroundImage = "url('/backgrounds/BasicPink-01.webp')";
        document.body.classList.add(theme)
        console.log('✅ Themes!')
        break;
    };
}

function runFirstTime() {
    if (ccc === null) {
        localStorage.setItem('web', 'https://google.com')
    }

    if (engine === null) {
        uvengine.value = "https://www.google.com/search?q=%s"
        console.log(`✅ Search Engine Loaded!`)
    }

    if (theme === null) {
        localStorage.setItem('theme', 'dark')
        document.body.setAttribute('data-theme', 'dark');
        document.body.style.backgroundImage = "url('/backgrounds/BasicGray.webp')";
    }
    localStorage.setItem('firstTime', 'No')
}

//load the customized theme [Can be simplified later... i think?]
function loadColors() {
    if (boxc === null) {
    }else {
        boxcolor();
    }

    if (textColor === null) {
    }else {
     styleElement.textContent += `
     :root {
         --Text-Main-Color: ${textColor}
    }
     `
    }
    if (bc === '#000000' || bc === null) {
    }else {
        styleElement.textContent += `
        :root {
           --Background-Color: ${bc};
           background-image: url();
       }
        `
        document.body.style.backgroundImage = "url('')"; 
        console.log('Set Background!')  
    };

    if(nav === null) {
        console.log('NULL')
    }else {
        document.getElementById('nav2').style.backgroundColor = nav
        console.log('nav')
        console.log('navbar changed')
    };

    if(se === null) {
    }else {
        styleElement.textContent +=`:root { --Hover-Secondary-Color: ${se}; }`; 
        console.log('secondary changed')
    };

    if(pr === null){
    }else {
        styleElement.textContent +=`:root { --Hover-Primary-Color: ${pr}; }`; 
        console.log(`primary changed`)
    };
}