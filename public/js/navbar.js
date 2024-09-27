//lets do a rundown of ts stuff
//we make the navbar and set the marker
//when the navbar a element is selected we take the page content of the href
//we then replace the div with the id content with the content from the page allowing it to stay in one html file
//smart stuff ig
document.addEventListener("DOMContentLoaded", function () {
  var nav = `
    <div class="testnav" id="nav2">
    <a href="/index.html" class="selected" id="home" onclick="location.reload()">Home</a>
    <a href="/apps.html" id="apps" onclick="setTimeout(function() { loada(); }, 100);">Apps</a>
    <a href="/discord.html"id="disc" >Discord</a>
    <a href="/roadmap.html" id="roadMap" onclick="setTimeout(function() { loadroadmaplang() }, 100);">Road Map</a>
    <a href="/settings.html" id="settings" onclick="setTimeout(function() { loadSettings(); loadsettinglang(); filesupload(); }, 100);">Settings</a>
    <a href="/developers.html" id="devs" >Developers</a>
    <div id="marker"></div>
    </div>
    `;

  var navElement = document.getElementById("nav");
  if (navElement) {
    navElement.innerHTML = nav;

    function moveMarker(element) {
      var marker = document.querySelector("#marker");
      marker.style.left = element.offsetLeft + "px";
      marker.style.width = element.offsetWidth + "px";
    }

    function setupNavigation() {
      var items = document.querySelectorAll(".testnav a");

      var homeLink = document.querySelector(".testnav a.selected");
      moveMarker(homeLink);

      items.forEach(function (item) {
        item.addEventListener("click", function (event) {
          event.preventDefault(); 

          items.forEach(function (link) {
            link.classList.remove("selected");
          });

          this.classList.add("selected");

          var targetUrl = this.getAttribute("href");
          fetch(targetUrl)
            .then((response) => response.text())
            .then((html) => {
              document.getElementById("content").innerHTML = html;

              moveMarker(item);
            })
            .catch((error) => console.error("Error fetching page:", error));
        });
      });
    }

    setupNavigation();
  } else {
    console.error("Could not find nav element.");
  }
});

//Building Dingus Script Into here instead of the html

//define them keys
const allowedKeys = {
  68: "d",
  73: "i",
  78: "n",
  71: "g",
  85: "u",
  83: "s",
};

//the code to activiate thingyt
const dingusCode = ["d", "i", "n", "g", "u", "s"];
let dingusCodePosition = 0;

//add the event listener for the keys in order
document.addEventListener("keydown", function (e) {
  const key = allowedKeys[e.keyCode];
  const requiredKey = dingusCode[dingusCodePosition];
  if (key === requiredKey) {
    dingusCodePosition++;
    if (dingusCodePosition === dingusCode.length) {
      dingus();
      dingusCodePosition = 0;
    }
  } else {
    dingusCodePosition = 0;
  }
});

//the dingus function :3
function dingus() {
  console.log("meow :3");
  document.body.style.backgroundImage =
    "url('/backgrounds/dingusbackground.webp')";
  document.body.classList.add("dingus");
  console.log("✅ Themes!");
}

async function loadroadmaplang() {
  const roadMap = document.getElementById("roadtxt");
  const Lang = await fetch("/languages/" + selectedLang + ".json");
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
    </h1>`;
}

//yes yes yes and if your wondering IT COULDVE BEEN SIMPLER
//but my dumbass mind thought this would be the only solution (its not :sob:)
//smh

//might redo this later
async function loadsettinglang() {
  const panel = document.getElementById("paneltxt");
  const panelbutton1 = document.getElementById("panelbutton1");
  const panelbutton2 = document.getElementById("panelbutton2");
  const Lang = await fetch("/languages/" + selectedLang + ".json");
  const data = await Lang.json();

  panel.innerText = data["Settings"];
  panelbutton1.innerText = data["customization"];
  panelbutton2.innerText = data["proxy"];
  document.getElementById("setColorsb").innerText = data["boxcolors"];
  document.getElementById("customizationDescriptionb").innerText =
    data["boxdesc"];
  document.getElementById("cfmbtn").innerText = data["confirm"];
  document.getElementById("backgroundImage").innerText =
    data["backgroundImage"];
  document.getElementById("backgroundImageDescription").innerText =
    data["backgroundImageDescription"];
  document.getElementById("rstbtn").innerText = data["reset"];
  document.getElementById("customizationDescription").innerText =
    data["customizationDescription"];
  document.getElementById("setColors").innerText = data["setColors"];
  document.getElementById("themes").innerText = data["themes"];
  document.getElementById("themesDescription").innerText =
    data["themesDescription"];
  document.getElementById("rstbtn2").innerText = data["reset"];
  document.getElementById("cfmbtn2").innerText = data["confirm"];
  document.getElementById("customization2").innerText = data["customization2"];
  document.getElementById("textColorDescription").innerText =
    data["textColorDescription"];
  document.getElementById("cfmbtn3").innerText = data["confirm"];
  document.getElementById("rstbtn3").innerText = data["reset"];
  document.getElementById("clrbtnt1").innerText = data["dark"];
  document.getElementById("clrbtnt2").innerText = data["blue"];
  document.getElementById("clrbtnt3").innerText = data["red"];
  document.getElementById("clrbtnt4").innerText = data["purple"];
  document.getElementById("clrbtnt5").innerText = data["pink"];
  document.getElementById("clrbtnt6").innerText = data["light"];
  document.getElementById("clrbtnb1").innerText = data["dark"];
  document.getElementById("clrbtnb2").innerText = data["blue"];
  document.getElementById("clrbtnb3").innerText = data["red"];
  document.getElementById("clrbtnb4").innerText = data["purple"];
  document.getElementById("clrbtnb5").innerText = data["pink"];
  document.getElementById("clrbtnb6").innerText = data["light"];
  document.getElementById("clrbtnb7").innerText = data["custom"];
  document.getElementById("setPanicHotkey").innerText = data["setPanicHotkey"];
  document.getElementById("languageSelector").innerText =
    data["languageSelector"];
  document.getElementById("languageSelectorDescription").innerText =
    data["languageSelectorDescription"];
  document.getElementById("proxy").innerText = data["proxy"];
  document.getElementById("cloakTab").innerText = data["cloakTab"];
  document.getElementById("Cloakbtn").innerText = data["cloakTab"];
  document.getElementById("cloakDescription").innerText =
    data["cloakDescription"];
  document.getElementById("setPanicHotkey").innerText = data["setPanicHotkey"];
  document.getElementById("panicDescription").innerText =
    data["panicDescription"];
  document.getElementById("searchEngine").innerText = data["searchEngine"];
  document.getElementById("searchEngineDescription").innerText =
    data["searchEngineDescription"];
  document.getElementById("Cloakbtng").innerText = data["google"];
  document.getElementById("Cloakbtngg").innerText = data["bing"];
  document.getElementById("Cloakbtnggg").innerText = data["ddg"];
  document.getElementById("Cloakbtngggg").innerText = data["brave"];
  document.getElementById("toggleTabs").innerText = data["toggleTabs"];
  document.getElementById("toggleTabsDescription").innerText =
    data["toggleTabsDescription"];
  document.getElementById("logintxt").innerText = data["logintxt"];
  document.getElementById("logintxt1").innerText = data["logintxt1"];
  document.getElementById("Settingstxti").innerText = data["Settingstxti"];
  document.getElementById("Settingstxti1").innerText = data["Settingstxti1"];
  document.getElementById("Settingstxti3").innerText = data["Settingstxti2"];
  document.getElementById("Settingstxti2").innerText = data["Settingstxti3"];

  document.getElementById("backgroundColorb").innerHTML =
    `${data["box1"]} <br><input id="1" class="clrs-select" type="color">`;
  document.getElementById("navbarColorb").innerHTML =
    `${data["box2"]} <br><input id="2" class="clrs-select" type="color">`;
  document.getElementById("hoverPrimaryColorb").innerHTML =
    `${data["box3"]} <br><input id="3" class="clrs-select" type="color"></input>`;
  document.getElementById("hoverSecondaryColorb").innerHTML =
    `${data["box4"]} <br><input id="4" class="clrs-select" type="color">`;
  document.getElementById("hoverSecondaryColorbb").innerHTML =
    `${data["box5"]} <br><input id="5" class="clrs-select" type="color">`;
  document.getElementById("hoverSecondaryColorrbb").innerHTML =
    `${data["box6"]} <br><input id="6" class="clrs-select" type="color">`;
  document.getElementById("textColor").innerHTML =
    `${data["textColor"]} <br><input id="txt" class="clrs-select" type="color">`;
  document.getElementById("hoverSecondaryColor").innerHTML =
    `${data["hoverSecondaryColor"]} <br><input id="hsc" class="clrs-select" type="color">`;
  document.getElementById("hoverPrimaryColor").innerHTML =
    `${data["hoverPrimaryColor"]} <br><input id="set" class="clrs-select" type="color">`;
  document.getElementById("navbarColor").innerHTML =
    `${data["navbarColor"]} <br><input id="navc" class="clrs-select" type="color">`;
  document.getElementById("backgroundColor").innerHTML =
    `${data["backgroundColor"]} <br><input id="bc" class="clrs-select" type="color">`;
}

