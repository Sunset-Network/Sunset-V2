const selectedLang = localStorage.getItem('selectedLang')
const meow = document.getElementById('content')
if (selectedLang === null) {

} else {

addEventListener("DOMContentLoaded", async (event) => {
    async function loadLanguage() {
const Lang = await fetch('/languages/' + selectedLang + '.json' );
const data = await Lang.json();
const home = document.getElementById('home')
const devs = document.getElementById('devs')
const apps = document.getElementById('apps')
const disc = document.getElementById('disc')
const settin = document.getElementById('settings')
const ftext = document.getElementById('abt-txt')
const ftext2 = document.getElementById('abt-txt1')
const ftext3 = document.getElementById('abt-txt2')
const bar = document.getElementById('uv-address')



    console.log('Current Language is ' + selectedLang + "!")

        console.log('Loading Language')
        home.textContent = data["Home"]
        devs.textContent = data["Developers"]
        apps.textContent = data["Apps"]
        disc.textContent = data["Discord"]
        ftext.innerText = data["Text"]
        ftext2.textContent = data["Text2"]
        ftext3.textContent = data["Text3"]
        settin.textContent = data["Settings"]
        bar.placeholder = data['URL']
        console.log('Language Loaded!')
    }

    async function loadroadmaplang() {
        const roadMap = document.getElementById('roadtxt')
        const Lang = await fetch('/languages/' + selectedLang + '.json' );
        const data = await Lang.json();
        roadMap.innerHTML = `
        <div class="rtitle1">${data["title"]}<br id="br1"/>${data["title2"]}</div>

        <div class="rst">${data["base"]}</div>

        <div class="rstst">
        ${data["txt1"]}<br />${data["txt2"]}<br />${data["txt3"]}<br />${data["txt4"]}
        </div>

        <div class="rst">${data["txt5"]}</div>

        <div class="rstst">
        ${data["txt6"]}<br />${data["txt7"]}<br />${data["txt8"]}<br />${data["txt9"]}
        </div>

        <div class="rst">${data["txt10"]}</div>

        <div class="rstst">
        ${data["txt11"]}<br />${data["txt2"]}<br />${data["txt13"]}<br />${data["txt14"]}<br />${data["txt15"]}
        </div>
        </div>
        </h1>`

    }

    async function loadsettinglang() {
        const panel = document.getElementById('paneltxt')
        const panelbutton1 = document.getElementById('panelbutton1')
        const panelbutton2 = document.getElementById('panelbutton2')
        const Lang = await fetch('/languages/' + selectedLang + '.json' );
        const data = await Lang.json();

        panel.innerText = data["Settings"]
        panelbutton1.InnerText = data["customization"]
        panelbutton2.InnerText = data["proxy"]
    }

    await loadLanguage()

    document.getElementById('content').addEventListener("DOMContentLoaded", async (event) => {
        await loadLanguage()
    });
});
}