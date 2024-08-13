//WARNING: before you go looking through the code just know
//most of this went of the basis of "if it aint broke dont fix it"

//i know me or someone else in the future and wonder what the fuck this mess was lmfao

//define it
const themeSwitcher = document.getElementById('themeSwitch');
const languageSwitcher = document.getElementById('languageSwitch');
const blur = document.getElementById('blur');
const content = document.getElementById('content');
const panel = document.getElementById('bgPanel');
const form = document.getElementById('backgroundForm');
//search engines
    function google() {
        localStorage.setItem('enginee', 'https://google.com/search?q=')
        location.reload();
    }

    function bing() {
        localStorage.setItem('enginee', 'https://www.bing.com/search?q=')
        location.reload();
    }

    function ddg() {
        localStorage.setItem('enginee', 'https://duckduckgo.com/?t=h_&q=')
        location.reload();
    }

    function brave() {
        localStorage.setItem('enginee', 'https://search.brave.com/search?q=')
        location.reload();
    }

//set backgrounds (i thinK)
    function bjgray() {
        localStorage.setItem('background', 'gray')
        document.body.style.backgroundImage = "url('/backgrounds/BasicGray.webp')";
    }
    function bjblue() {
        localStorage.setItem('background', 'blue')
        document.body.style.backgroundImage = "url('/backgrounds/BasicBlue.webp')";
    }
    function bjred() {
        localStorage.setItem('background', 'red')
        document.body.style.backgroundImage = "url('/backgrounds/BasicRed-01.webp')";
    }
    function bjpurple() {
        localStorage.setItem('background', 'purple')
        document.body.style.backgroundImage = "url('/backgrounds/BasicPurple-01.webp')";
    }
    function bjwhite() {
        localStorage.setItem('background', 'white')
        document.body.style.backgroundImage = "url('/backgrounds/light-sunset.webp')";
    }
    function bjpink() {
        localStorage.setItem('background', 'pink')
        document.body.style.backgroundImage = "url('/backgrounds/BasicPink-01.webp')";
    }

//switch the content
    function switchcontent() {
        const settingpanel1 = document.getElementById('panel');
        const mainpanel = document.getElementById('setting');
        settingpanel1.style.display = 'block'
        mainpanel.style.display = 'none'
    }
    function switchcontent2() {
        const settingpanel1 = document.getElementById('setting');
        const mainpanel = document.getElementById('panel1');
        settingpanel1.style.display = 'none'
        mainpanel.style.display = 'block'
    }
    //themes
    function themeBlue() {
        localStorage.setItem('theme', 'blue')
        document.body.style.backgroundImage = "url('/backgrounds/BasicBlue.webp')";
        document.body.classList.remove('red', 'purple', 'light', 'pink')
        document.body.classList.add('blue')
    }
    function themeGray() {
        localStorage.setItem('theme', '')
        document.body.style.backgroundImage = "url('/backgrounds/BasicGray.webp')";
        document.body.classList.remove('red', 'purple', 'light', 'pink', 'blue')
    }
    function themeWhite() {
        localStorage.setItem('theme', 'light')
        document.body.style.backgroundImage = "url('/backgrounds/light-sunset.webp')";
        document.body.classList.remove('red', 'purple', 'blue', 'pink')
        document.body.classList.add('light')
    }
    function themeRed() {
        localStorage.setItem('theme', 'red')
        document.body.style.backgroundImage = "url('/backgrounds/BasicRed-01.webp')";
        document.body.classList.remove('blue', 'purple', 'light', 'pink')
        document.body.classList.add('red')
    }
    function themePurple() {
        localStorage.setItem('theme', 'purple')
        document.body.style.backgroundImage = "url('/backgrounds/BasicPurple-01.webp')";
        document.body.classList.remove('red', 'blue', 'light', 'pink')
        document.body.classList.add('purple')
    }
    function themePink() {
        localStorage.setItem('theme', 'pink')
        document.body.style.backgroundImage = "url('/backgrounds/BasicPink-01.webp')";
        document.body.classList.remove('red', 'blue', 'light', 'purple')
        document.body.classList.add('pink')
    }
    function customBackground() {
        var url = prompt('What is the Background URL?');
        localStorage.setItem('background2', url)
        localStorage.setItem('background', 'custom')
        localStorage.removeItem('bc')
        location.reload();
    }
    //LANG
    function en() {
        localStorage.setItem('selectedLang', '')
        location.reload()
    }
    function fr() {
        localStorage.setItem('selectedLang', 'fr')
        location.reload()
    }
    function pt() {
        localStorage.setItem('selectedLang', 'pt')
        location.reload()
    }
    function jp() {
        localStorage.setItem('selectedLang', 'jp')
        location.reload()
    }
    function es() {
        localStorage.setItem('selectedLang', 'es')
        location.reload()
    } 
    function tabbs() {
        const ta = localStorage.getItem('tabs')
        if(ta === 'enabled') {
            localStorage.removeItem('tabs')
            window.location.href = '/main.html'
        }else {
        localStorage.setItem('tabs','enabled')
        location.reload()
        }
    }
    // confirm/reset
    function confirm3() {
    const one = document.getElementById('1').value;
    const two = document.getElementById('2').value;
    const three = document.getElementById('3').value;
    const four = document.getElementById('4').value;
    const five = document.getElementById('5').value;
    const six = document.getElementById('6').value;
        localStorage.setItem('boxc', one)
        localStorage.setItem('boxcc', two)
        localStorage.setItem('boxccc', three)
        localStorage.setItem('boxcccc', four)
        localStorage.setItem('boxccccc', five)
        localStorage.setItem('boxcccccc', six)
        location.reload();
    }
    function reset3() {
        localStorage.removeItem('boxc')
        localStorage.removeItem('boxcc')
        localStorage.removeItem('boxccc')
        localStorage.removeItem('boxcccc')
        localStorage.removeItem('boxccccc')
        localStorage.removeItem('boxcccccc')
        location.reload();
    }
    function confirm() {
        const textSelector = document.getElementById('txt');
        localStorage.setItem('txt', textSelector.value);
        location.reload()
    }
    function reset2() {
        localStorage.removeItem('txt');
        location.reload()
    }
    function confirm1() {
        const backgroundSelector = document.getElementById('bc');
        const navbarSelector = document.getElementById('navc');
        const primarySelector = document.getElementById('set');
        const secondarySelector = document.getElementById('hsc');
        if (backgroundSelector.value === "#000000") {
        }else {
        localStorage.setItem('bc', backgroundSelector.value);
        localStorage.removeItem('theme') 
        location.reload();
        };
        if(navbarSelector.value === "#000000") {
        }else {
        localStorage.setItem('nav', navbarSelector.value); 
        localStorage.removeItem('theme') 
        location.reload();
        };
        if(primarySelector === "#000000") {
        }else {
        localStorage.setItem('pr', primarySelector.value); 
        localStorage.removeItem('theme') 
        location.reload();
        };
        if(secondarySelector === "#000000") {
        }else {
        localStorage.setItem('se', secondarySelector.value); 
        localStorage.removeItem('theme') 
        location.reload();
        };
        confirm3()
        confirm()
    }

    async function exportSettings() {
        //export the users settings

        var exportJSON = {
            //box colors
            "Box Color 1" : [color1],
            "Box Color 2" : [color2],
            "Box Color 3" : [color3],
            "Box Color 4" : [color4],
            "Box Color 5" : [color5],
            "Box Color 6" : [color6],
            //customized themes
            "BG" : [bc],
            "nav" : [nav],
            "pr": [pr],
            "se": [se],
            //themes
            "Theme": [theme],
            "Background": [background],
            "Text-color": [textColor],
            //prccy setting
            "Search-engine": [engine],
            "Language": [selectedLang],
            "Panic": [hotkey],
            "Tabs": [tabs],
            "Login": []
        };

        //stringify 
        var stringifyJSON = JSON.stringify(exportJSON);

        //create a picker
        const picker = await window.showSaveFilePicker();
        //make a writable
        const writable = await picker.createWritable();
        //write and close
        await writable.write(stringifyJSON);
        await writable.close();
    }

    function login() {
        localStorage.setItem('skipLogin', 'true')
    }

    function loadSettings() {
        const backgroundSelector = document.getElementById('bc');
        const navbarSelector = document.getElementById('navc');
        const primarySelector = document.getElementById('set');
        const secondarySelector = document.getElementById('hsc');
        const one = document.getElementById('1');
        const two = document.getElementById('2');
        const three = document.getElementById('3');
        const four = document.getElementById('4');
        const five = document.getElementById('5');
        const six = document.getElementById('6');
        const textSelector = document.getElementById('txt');
        const togglelogin = document.getElementById('logincheck')
        const toggletabs = document.getElementById('tabscheck')
        const skiplogin = localStorage.getItem('skipLogin')
        const tabbsb = localStorage.getItem('tabs')

        backgroundSelector.value = localStorage.getItem('bc')
        navbarSelector.value = localStorage.getItem('nav')
        primarySelector.value = localStorage.getItem('pr')
        secondarySelector.value = localStorage.getItem('se')
        one.value = localStorage.getItem('boxc')
        two.value = localStorage.getItem('boxcc')
        three.value = localStorage.getItem('boxccc')
        four.value = localStorage.getItem('boxcccc')
        five.value = localStorage.getItem('boxccccc')
        six.value = localStorage.getItem('boxcccccc')
        textSelector.value = localStorage.getItem('txt')

        if(skiplogin === 'true') {
            togglelogin.checked = 'true'
        }
        if(tabbsb === 'enabled') {
            toggletabs.checked = 'true'
        }
    };

    function panic() {
        function handleKeyDown(event) {
            alert('this is that key you pressed i think dont quote me on that', event.key);
            localStorage.setItem('key', event.key);
            document.removeEventListener('keydown', handleKeyDown);
            location.reload()
          }
          document.addEventListener('keydown', handleKeyDown);
    }

    function reset1() {
        localStorage.removeItem('bc')
        localStorage.removeItem('nav')
        localStorage.removeItem('pr')
        localStorage.removeItem('se')
        location.reload()
    }
    //meow thats the end :3