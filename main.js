    function hide(id) {
        document.getElementById(id).style.display = 'none'
    }

    function show(id) {
       document.getElementById(id).style.display = 'block'
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
    document.getElementById('welcomeSpace').innerHTML = `Welcome ${localStorage.getItem('username')}!` + "<br>" + "Have Good Luck!"
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
        alert("Incorrect");
        start()
    } else if(document.getElementById('op1').innerHTML == awnser) {
        alert("Correct")
        start();
    }
}

function check2() {
    if(document.getElementById('op2').innerHTML == wrongAwnser1 || document.getElementById('op2').innerHTML == wrongAwnser2 || document.getElementById('op2').innerHTML == wrongAwnser3) {
        alert("Incorrect");
        start()
    } else if(document.getElementById('op2').innerHTML == awnser) {
        alert("Correct")
        start();
    }
}

function check3() {
    if(document.getElementById('op3').innerHTML == wrongAwnser1 || document.getElementById('op3').innerHTML == wrongAwnser2 || document.getElementById('op3').innerHTML == wrongAwnser3) {
        alert("Incorrect");
        start()
    } else if(document.getElementById('op3').innerHTML == awnser) {
        alert("Correct")
        start();
    }
}

function check4() {
    if(document.getElementById('op4').innerHTML == wrongAwnser1 || document.getElementById('op4').innerHTML == wrongAwnser2 || document.getElementById('op4').innerHTML == wrongAwnser3) {
        alert("Incorrect");
        start()
    } else if(document.getElementById('op4').innerHTML == awnser) {
        alert("Correct")
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
    document.getElementById("play").style.display = "inline"
}