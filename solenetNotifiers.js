 let solenetFactNotif = new Toasted({
    position : 'top-center',
    theme : 'venice',
    duration : '1500',
    fullWidth : "true",
	})	 

// let currentEvent = new Toasted({
//         position : 'top-center',
//         theme : 'bootstrap',
//         icon : 'sensors',
//         fullWidth : true,
//         duration : '10000',
//         action : {
//             text : 'VIEW',
//             onClick : (e, toasted) => {
//                window.open("/Events", "_Self")
//         }
//         },
//         onComplete : () => {
//             console.log('User received event notification')
//             }
//       })

//   function checkforEvent() {
//         var urlEvent = "https://solenet-12bb4-default-rtdb.firebaseio.com/solenetLive/solenetLive.json";
  
//     var xhrEvent = new XMLHttpRequest();
//     xhrEvent.open("GET", urlEvent);
  
//     xhrEvent.onreadystatechange = function () {
//       if (xhrEvent.readyState === 4) {
//           solenetEventStatusData = xhrEvent.responseText;
//           console.log("Event Data Received: " + xhrEvent.status + "-S : " + xhrEvent.responseText + "-D");
//           if(solenetEventStatusData == "true") {
//               console.log("Live event found!")
//               setTimeout(() => {currentEvent.show("An event is live right now!")
// }, 2000);
//           }
//       }};
  
//     xhrEvent.send();
//   }
  
  function updateSaleCount() {
    var url = "https://solenet-12bb4-default-rtdb.firebaseio.com/solenetSales/solenetSales.json";
  
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);
  
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
          solenetSaleCounterData = xhr.responseText;
          document.getElementById("solenetSaleCountDisplay").innerHTML = solenetSaleCounterData;
          console.log("Sale Data Received: " + xhr.status + "-S : " + xhr.responseText + "-D");
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
