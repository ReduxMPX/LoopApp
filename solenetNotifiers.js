 let solenetFactNotif = new Toasted({
    position : 'top-center',
    theme : 'venice',
    duration : '1500',
    fullWidth : "true",
	})	 

  function checkforEvent() {
    var url2 = "https://solenet-12bb4-default-rtdb.firebaseio.com/solenetSales/solenetLive.json";
  
    var xhr2 = new XMLHttpRequest();
    xhr2.open("GET", url2);
  
    xhr2.onreadystatechange = function () {
      if (xhr2.readyState === 4) {
          solenetEventStatus = xhr2.responseText;
          console.log("Event Data Received: " + xhr2.status + "-S : " + xhr2.responseText + "-D");
          if(xhr2.responseText == "{\"solenetLive\":true}") {
            console.log("Solenet is live, showing customer an event notification")
            setTimeout(() => { currentEvent.show("An event is taking place!")}, 3000);
            sessionStorage.setItem("eventMarked", true)
          }
          else {
              var intervalIDEvents = window.setInterval(checkforEvent, 5000);
              console.log("Starting event checker")
          }
      }};
  
    xhr2.send();
  }
  
  function updateSaleCount() {
    var url = "https://solenet-12bb4-default-rtdb.firebaseio.com/solenetSales/solenetSales.json";
  
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);
  
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
          solenetSaleCounterData = xhr.responseText;
          document.getElementById("solenetSaleCountDisplay").innerHTML = solenetSaleCounterData;
          console.log("Sale Data Received: " + xhr.status + "-S : " + xhr.responseText + "-D");
          window.clearInterval(intervalIDEvents)
      }};
  
    xhr.send();
  }
  
function showFact() {
  const solenetFacts = ["💜 SoleNet is run by one person!",
                      "📹 You should follow us on TikTok!",
                      "📱 SoleNet hosts livestreams!",
                      "📍 SoleNet is based in LA!",
                      "📊 Our analytics are publicly visible!",
                      "📱 Our site is built for our Instagram!",
                      "📦 Check out our shipping schedule!",
                      "💡 We love hearing your suggestions!",
                      "🚚 We provide detailed shipping statuses for each order!",
                      "💵 We accept a wide variety of payment methods!",
                      "👟 All pairs shown are available!",
                      "👍🏼 All of our reviews are on our Instagram!"]

  var chosenFact = solenetFacts[Math.floor(Math.random()*solenetFacts.length)];
  console.log("Fact Displaying:" + chosenFact)   
  solenetFactNotif.show(chosenFact)
}

function homeLoad() {
    updateSaleCount()
    checkforEvent()
    showFact()
  }

var intervalIDFact = window.setInterval(showFact, 120000);
var intervalIDSales = window.setInterval(updateSaleCount, 3000);
if (sessionStorage.getItem("eventMarked") != true) {
  var intervalIDEvents = window.setInterval(checkforEvent, 5000);
}


