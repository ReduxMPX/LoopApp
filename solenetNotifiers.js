 let solenetFactNotif = new Toasted({
    position : 'top-center',
    theme : 'venice',
    duration : '1500',
    fullWidth : "true",
	})	 

  let suggestIGWEB = new Toasted({
    position: 'center',
    theme: 'venice',
    icon: 'announcement',
    duration: '3500',
    onComplete: () => {
      console.log('User received IG suggestion')
    }
  })

  const browserAgentRaw = navigator.userAgent;
  if (browserAgentRaw.includes('Instagram')) { 
    console.log("User on Instagram webkit")
  }
  else {
    suggestIGWEB.show("We recommend using the Instagram browser instead for the best experience!")
    console.warn("User not on Instagram webkit, sending Solenet browser change suggestion!")
  }


var intervalID = window.setInterval(showFact, 80000);


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
