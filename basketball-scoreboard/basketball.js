let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

let homeCount = 0
let guestCount = 0



function add1Home(){
    homeCount += 1
    homeScore.textContent = homeCount
    lead()
}
function add2Home(){

    homeCount += 2
    homeScore.textContent = homeCount
    lead()
}
function add3Home(){
    homeCount += 3
    homeScore.textContent = homeCount
    lead()  
}

// Guest functions
function add1Guest(){
    guestCount += 1
    guestScore.textContent = guestCount
    lead()
}

function add2Guest(){
    guestCount += 2
    guestScore.textContent = guestCount
    lead()
}

function add3Guest(){
    guestCount += 3
    guestScore.textContent = guestCount
    lead()
}

// Check leader 
function lead(){
    if (homeCount > guestCount){
        homeScore.style.color = 'green'
        guestScore.style.color = 'red'
    }
    else if(guestCount > homeCount){
        guestScore.style.color = 'green'
        homeScore.style.color = 'red'
    }
    else{
        homeScore.style.color = '#F94F6D'
        guestScore.style.color = '#F94F6D'
    }
}

// Reset function
function reset(){
    homeCount = 0
    guestCount = 0
    homeScore.textContent = homeCount
    guestScore.textContent = guestCount
    homeScore.style.color = '#F94F6D'
    guestScore.style.color = '#F94F6D'
}

