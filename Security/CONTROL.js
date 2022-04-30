function accessSequence() {
    var accessAttempt = window.prompt("RDX MASTER TERMINAL ACCESS CODE")

    if(accessAttempt == "RDXNET22")
    {
        sessionStorage.setItem("accessGranted", "Y");
        var accessStatus = sessionStorage.getItem("accessGranted");

        if(accessStatus == "Y")
        {
            console.log("TERMINAL ACCESS ACCEPTED\nCORRECT PASSCODE PROVIDED")
            
            setTimeout(() => {
            window.open("https://www.loopnews.app/Security/CONTROL", "_self")
            }, "1500")
        }

    }

    else {
        console.error("TERMINAL ACCESS REFUSED\nINCORRECT PASSCODE PROVIDED")
        window.open("https://www.google.com", "_self")
    }
}

function finalSequence() {
    var accessStatus = sessionStorage.getItem("accessGranted");

    if(accessStatus == "Y") {
        console.log("User authentication is valid")
    }
    else {
        console.error("User authentication is invalid")
        window.open("https://loopnews.app/Security/ACCESS", "_self")
    }
}

function emergencyProtocol() {
    alert("INITIATION BLOCKED")
    let urlProtocol = 'https://redux-cyber-systems-default-rtdb.firebaseio.com/emergencyShutdown/emergencyShutdown';

    fetch(urlProtocol)
    .then(res => res.json())
    .then((out) => {
        if(out == "false") {
            // IF EMERGENCY PROTOCOL IS NOT ACTIVE YET...
            console.log("[BEFORE CHANGE] protocol is inactive\n[DEBUG] Return: " + out)
        }
        else {
            // IF IT IS ALREADY ACTIVE
            console.log("[BEFORE CHANGE] protocol is active\n[DEBUG] Return: " + out)
        }
        })
}

function attackStatus() {
    let url = 'https://redux-cyber-systems-default-rtdb.firebaseio.com/attackStatus.json';

    fetch(url)
    .then(res => res.json())
    .then((out) => {
        console.log('Status: ', out);
        alert("CYBER ATTACK STATUS:\n" + out)
        })
}

function accessSite() {
    window.open("https://www.loopnews.app/Security/Canvas")
}


