 let solenetFactNotif = new Toasted({
    position : 'top-center',
    theme : 'venice',
    duration : '1500',
    fullWidth : "true",
	})	 

function showFact() {
  const solenetFacts = ["💜 SoleNet is run by one person!",
                      "📹 You should follow us on TikTok!",
                      "📱 SoleNet hosts livestreams!",
                      "📍 SoleNet is based in LA!",
                      "📊 Our analytics are publicly visible!",
                      "📱 Our site is built  Instagram!",
                      "📦 Check out our shipping schedule!",
                      "💡 We love hearing your suggestions!",
                      "🚚 We provide detailed shipping statuses for each order!",
                      "💵 We accept a wide variety of payment methods!",
                      "👟 All pairs shown are available!"]

  var chosenFact = solenetFacts[Math.floor(Math.random()*solenetFacts.length)];
  console.log("Fact Displaying:" + chosenFact)   
  solenetFactNotif.show(chosenFact)
}
