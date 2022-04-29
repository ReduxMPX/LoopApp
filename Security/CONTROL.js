function accessSequence() {
    var accessAttempt = window.prompt("RDX MASTER TERMINAL ACCESS CODE")

    if(accessAttempt == "RDXNET22")
    {
        localStorage.setItem("accessGranted", "Y");
        var accessStatus = localStorage.getItem("accessGranted");

        if(accessStatus == "Y")
        {
            console.log("TERMINAL ACCESS ACCEPTED\nCORRECT PASSCODE PROVIDED")
            
            setTimeout(() => {
            window.open("https://www.loopnews.app/Security/CONTROL", "_self")
            }, "4000")
        }

    }

    else {
        console.error("TERMINAL ACCESS REFUSED\nINCORRECT PASSCODE PROVIDED")
        window.open("https://www.google.com", "_self")
    }
}