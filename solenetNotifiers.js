 let solenetFactNotif = new Toasted({
    position : 'top-center',
    theme : 'venice',
    duration : '1500',
    fullWidth : "true",
	})	 

function showFact() {
  const solenetFacts = ["💜 SoleNet is run by one person!",
                      "📹 You should follow us on TikTok @Solenet!",
                      "📱 SoleNet hosts livestreams!",
                      "📍 SoleNet is based in LA!",
                      "📊 Our analytics are publicly visible!",
                      "📱 Our site is built specifically for the Instagram browser!"]

  var chosenFact = solenetFacts[Math.floor(Math.random()*solenetFacts.length)];
  console.log("Fact Displaying:" + chosenFact)   
  solenetFactNotif.show(chosenFact)
}
