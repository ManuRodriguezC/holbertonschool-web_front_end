var user = {
    hobby: "Calligraphy",
    favoriteSport: "Hockey",
    astrologicalSing: "Aries",
    firstName: "Buillaume",
    lastName: "Ialva",
    location: "Telaviv",
    occupation: "Engineer",
}

function logWelcomeUser(welcomeString) {
    console.log(`${welcomeString}, ${this.firstName}. Your occupation is: ${this.occupation}`)
}

var bindLogWelcomeUser = logWelcomeUser.bind(user)
bindLogWelcomeUser("Hello")