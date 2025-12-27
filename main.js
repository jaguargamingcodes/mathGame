    if(localStorage.getItem("POINTS") == "null" || localStorage.getItem("POINTS") == null) {
        localStorage.setItem("POINTS",0)
    }  
    
    setPointer = Number(localStorage.getItem("POINTS"));

    function hide(id) {
        document.getElementById(id).style.display = 'none'
    }

    function show(id) {
       document.getElementById(id).style.display = 'block'
    }

    function correct() {
        document.getElementById("AwnserResp").style.color = "rgb(0,255,0)";
        document.getElementById("AwnserResp").textContent = "✅ Correct!"
        document.body.style.backgroundColor = "rgba(11, 90, 0, 1)";
        setPointer++;
        if(Number(localStorage.getItem("POINTS") < setPointer)) {
            localStorage.setItem("POINTS", setPointer)
        }
        document.getElementById("correctPoints").innerHTML = `Correct Points: ${Number(localStorage.getItem("POINTS") < setPointer)}`;
    }

    function incorrect() {
        document.getElementById("AwnserResp").style.color = "rgba(255, 0, 0, 1)";
        document.getElementById("AwnserResp").textContent = "❌ Incorrect"
        document.body.style.backgroundColor = "rgba(90, 0, 0, 1)"
        setPointer--;
        document.getElementById("correctPoints").innerHTML = `Correct Points: ${Number(localStorage.getItem("POINTS") < setPointer)}`;
    }


if (localStorage.getItem('username') === null || localStorage.getItem('username') === 'null') {
    let ask = window.prompt('Please Enter Your Username');
    if(ask.length > 15) {
        throw new Error('Length Too Big');
        document.writeln('Username Length Too Big; Refresh page')
        localStorage.setItem("username",null)
    }

    else if(ask.length < 4) {
        throw new Error('Length Too Small');
        document.writeln('Username Length Too Small; Refresh page')
        localStorage.setItem("username",null)
    }

    else if(ask.length <= 15 && ask.length >= 4) {
        localStorage.setItem('username',ask)
    }
}

if(localStorage.getItem('username') !== null || localStorage.getItem('username') !== "null") {
    document.getElementById('welcomeSpace').innerHTML = `Welcome ${localStorage.getItem('username')}!` + "<br>" + "Good Luck!"
}



// start function 
function start() {
    // section 1
    no1 = Math.floor(Math.random() * 11);
    no2 = Math.floor(Math.random() * 11);

    awnser = no1 * no2;
    wrongAwnser1 = Math.floor(Math.random() * 101);
    wrongAwnser2 = Math.floor(Math.random() * 101);
    wrongAwnser3 = Math.floor(Math.random() * 101);
    // Choosing Section
    function choose() {
        select = undefined;
        d = Math.floor(Math.random() * 4);
        console.log(d)
        if(d == 0) {
            select = "op1"
            document.getElementById("op1").innerHTML = awnser;
            document.getElementById("op2").innerHTML = wrongAwnser1;
            document.getElementById("op3").innerHTML = wrongAwnser2;
            document.getElementById("op4").innerHTML = wrongAwnser3;    
        } else if(d == 1) {
            select = "op2"
            document.getElementById("op2").innerHTML = awnser;
            document.getElementById("op1").innerHTML = wrongAwnser1;
            document.getElementById("op4").innerHTML = wrongAwnser2;
            document.getElementById("op3").innerHTML = wrongAwnser3; 
        } else if(d == 2) {
            select = "op3"
            document.getElementById("op3").innerHTML = awnser;
            document.getElementById("op1").innerHTML = wrongAwnser1;
            document.getElementById("op4").innerHTML = wrongAwnser2;
            document.getElementById("op2").innerHTML = wrongAwnser3; 
        } else if(d == 3) {
            select = "op4"
            document.getElementById("op4").innerHTML = awnser;
            document.getElementById("op1").innerHTML = wrongAwnser1;
            document.getElementById("op3").innerHTML = wrongAwnser2;
            document.getElementById("op2").innerHTML = wrongAwnser3; 
        }
    }
    
    choose();

    document.getElementById('question').innerHTML = `${no1}x${no2}=`
    // Section 3


    hide("bgmain1");
    hide("no2");
    hide("welcomeSpace");
    hide("play");
    //
    show('question')
    document.getElementById("op1").style.display = "inline"
    document.getElementById("op2").style.display = "inline"
    document.getElementById("op3").style.display = "inline"
    document.getElementById("op4").style.display = "inline"
    document.getElementById("exit").style.display = "inline"
    //

}

function check1() {
    if(document.getElementById('op1').innerHTML == wrongAwnser1 || document.getElementById('op1').innerHTML == wrongAwnser2 || document.getElementById('op1').innerHTML == wrongAwnser3) {
        incorrect()
        start()
    } else if(document.getElementById('op1').innerHTML == awnser) {
        correct()
        start();
    }
}

function check2() {
    if(document.getElementById('op2').innerHTML == wrongAwnser1 || document.getElementById('op2').innerHTML == wrongAwnser2 || document.getElementById('op2').innerHTML == wrongAwnser3) {
        incorrect()
        start()
    } else if(document.getElementById('op2').innerHTML == awnser) {
        correct();
        start();
    }
}

function check3() {
    if(document.getElementById('op3').innerHTML == wrongAwnser1 || document.getElementById('op3').innerHTML == wrongAwnser2 || document.getElementById('op3').innerHTML == wrongAwnser3) {
        incorrect()
        start()
    } else if(document.getElementById('op3').innerHTML == awnser) {
        correct();
        start();
    }
}

function check4() {
    if(document.getElementById('op4').innerHTML == wrongAwnser1 || document.getElementById('op4').innerHTML == wrongAwnser2 || document.getElementById('op4').innerHTML == wrongAwnser3) {
        incorrect()
        start()
    } else if(document.getElementById('op4').innerHTML == awnser) {
        correct();
        start();
    }
}

function exitQ() {
    hide("op1");
    hide("op2");
    hide("op3");
    hide("op4");
    hide("question");
    hide("exit")
    //
    document.getElementById("bgmain1").style.display = "block"
    show("no2");
    show("welcomeSpace");
    document.getElementById("play").style.display = "inline";
    document.body.style.backgroundColor = localStorage.getItem("Preferred-Background-Color");
    document.getElementById("AwnserResp").style.display = "none"
}

console.log(setPointer)


document.getElementById("correctPoints").innerHTML = `Correct Points: ${localStorage.getItem("POINTS")}`;

function showConfigs() {
    show("color")
    show("chooser")
    show("usc")
    show("clear")
    show("hideSettings")
}

function chooseBgColor() {
    let choose = window.prompt("Choose Background Color")
    document.body.style.backgroundColor = choose;
    localStorage.setItem("Preferred-Background-Color",choose)
    document.getElementById("chooser").innerHTML = document.body.style.backgroundColor;
}

document.body.style.backgroundColor = localStorage.getItem("Preferred-Background-Color")

function hideSettings() {
    hide("color")
    hide("chooser")
    hide("usc")
    hide("clear")
    hide("hideSettings")
}