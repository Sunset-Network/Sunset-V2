//removed the note because silvereen got mad at me :sob:

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
    function switchcontent3() {
        const settingpanel1 = document.getElementById('panel');
        const mainpanel = document.getElementById('setting');
        settingpanel1.style.display = 'none'
        mainpanel.style.display = 'block'
        }

        function switchcontent4() {
            const settingpanel1 = document.getElementById('setting');
        const mainpanel = document.getElementById('panel1');
        settingpanel1.style.display = 'block'
        mainpanel.style.display = 'none'
        }
    //themes
    function themeBlue() {
        localStorage.setItem('theme', 'blue')
        document.body.style.backgroundImage = "url('/backgrounds/BasicBlue.webp')";
        document.body.classList.remove('red', 'purple', 'light', 'pink')
        document.body.classList.add('blue')
        localStorage.setItem('boxc', '#0011ff')
        localStorage.setItem('boxcc', '#4558e8')
        localStorage.setItem('boxccc', '#121ca5')
        localStorage.setItem('boxcccc', '#1c68ba')
        localStorage.setItem('boxccccc', '#188ea5')
        localStorage.setItem('boxcccccc', '#00fbff')
    }
    function themeGray() {
        localStorage.setItem('theme', '')
        document.body.style.backgroundImage = "url('/backgrounds/BasicGray.webp')";
        document.body.classList.remove('red', 'purple', 'light', 'pink', 'blue')
        localStorage.setItem('boxc', '#ff9d00')
        localStorage.setItem('boxcc', '#ffff00')
        localStorage.setItem('boxccc', '#fbff2c')
        localStorage.setItem('boxcccc', '#00ffffd2')
        localStorage.setItem('boxccccc', '#3565a9')
        localStorage.setItem('boxcccccc', '#458796')
    }
    function themeWhite() {
        localStorage.setItem('theme', 'light')
        document.body.style.backgroundImage = "url('/backgrounds/light-sunset.webp')";
        document.body.classList.remove('red', 'purple', 'blue', 'pink')
        document.body.classList.add('light')
        localStorage.setItem('boxc', '#ffffff')
        localStorage.setItem('boxcc', '#b8b8b8')
        localStorage.setItem('boxccc', '#949494')
        localStorage.setItem('boxcccc', '#575757')
        localStorage.setItem('boxccccc', '#424242')
        localStorage.setItem('boxcccccc', '#000000')
    }
    function themeRed() {
        localStorage.setItem('theme', 'red')
        document.body.style.backgroundImage = "url('/backgrounds/BasicRed-01.webp')";
        document.body.classList.remove('blue', 'purple', 'light', 'pink')
        document.body.classList.add('red')
        localStorage.setItem('boxc', '#d52538')
        localStorage.setItem('boxcc', '#a21c2a')
        localStorage.setItem('boxccc', '#ff2b33')
        localStorage.setItem('boxcccc', '#cc2228')
        localStorage.setItem('boxccccc', '#99191d')
        localStorage.setItem('boxcccccc', '#ff2929')
    }
    function themePurple() {
        localStorage.setItem('theme', 'purple')
        document.body.style.backgroundImage = "url('/backgrounds/BasicPurple-01.webp')";
        document.body.classList.remove('red', 'blue', 'light', 'pink')
        document.body.classList.add('purple')
        localStorage.setItem('boxc', '#ad5eff')
        localStorage.setItem('boxcc', '#8a4bcc')
        localStorage.setItem('boxccc', '#562e7f')
        localStorage.setItem('boxcccc', '#f65aff')
        localStorage.setItem('boxccccc', '#d65aff')
        localStorage.setItem('boxcccccc', '#e05aff')
    }
    function themePink() {
        localStorage.setItem('theme', 'pink')
        document.body.style.backgroundImage = "url('/backgrounds/BasicPink-01.webp')";
        document.body.classList.remove('red', 'blue', 'light', 'purple')
        document.body.classList.add('pink')
        localStorage.setItem('boxc', '#a92d7a')
        localStorage.setItem('boxcc', '#c5378f')
        localStorage.setItem('boxccc', '#5c2246')
        localStorage.setItem('boxcccc', '#d62c95')
        localStorage.setItem('boxccccc', '#e03fa2')
        localStorage.setItem('boxcccccc', '#ff4fbb')
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
    function confirm1() {
        const textSelector = document.getElementById('txt');
        const backgroundSelector = document.getElementById('bc');
        const navbarSelector = document.getElementById('navc');
        const primarySelector = document.getElementById('set');
        const secondarySelector = document.getElementById('hsc');
        if (backgroundSelector.value === "#000000") {
        }else {
        localStorage.setItem('bc', backgroundSelector.value);
        localStorage.removeItem('theme') 
        };
        if(navbarSelector.value === "#000000") {
        }else {
        localStorage.setItem('nav', navbarSelector.value); 
        localStorage.removeItem('theme') 
        };
        if(primarySelector === "#000000") {
        }else {
        localStorage.setItem('pr', primarySelector.value); 
        localStorage.removeItem('theme') 
        };
        if(secondarySelector === "#000000") {
        }else {
        localStorage.setItem('se', secondarySelector.value); 
        localStorage.removeItem('theme') 
        };
        if(textSelector === '#000000') {
        }else {
        localStorage.setItem('txt', textSelector.value);  
        }
        location.reload();
        confirm3()
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
            const panicForm = document.getElementById('panicForm')
            localStorage.setItem('key', panicForm.value);
            location.reload()
    }

    function reset1() {
        localStorage.removeItem('bc');
        localStorage.removeItem('nav');
        localStorage.removeItem('pr');
        localStorage.removeItem('se');
        localStorage.removeItem('txt');
        location.reload()
    }
    //meow thats the end :3