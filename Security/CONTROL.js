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