var numHeads = 0;
var numTails = 0;


document.addEventListener('DOMContentLoaded', function () {
    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools
    console.log('its working')
    document.getElementById("flip").addEventListener('click', () => {
        var randomNumber = Math.round(Math.random())
        if(randomNumber == 0){
            numHeads = numHeads + 1;
            document.getElementById("penny-image").setAttribute("src", "assets/images/penny-heads.jpg")
            document.getElementById("message").innerText = "You Flipped Heads!"
            document.getElementById("heads").innerText = numHeads;
            

        }
        else{
            numTails += 1;
            document.getElementById("penny-image").setAttribute("src", "assets/images/penny-tails.jpg")
            document.getElementById("message").innerText = "You Flipped Tails!"
            document.getElementById("tails").innerText = numTails;
            
        }
        document.getElementById("heads-percent").innerText = Math.round((numHeads/(numHeads+numTails))*100)+"%"
        document.getElementById("tails-percent").innerText = Math.round((numTails/(numHeads+numTails))*100)+"%"
    })
    document.getElementById("clear").addEventListener('click', () => {
        numHeads = 0
        numTails = 0 
        document.getElementById("message").innerText = "Let's Get Rolling!"
        document.getElementById("heads").innerText = numHeads; 
        document.getElementById("tails").innerText = numTails;
        document.getElementById("heads-percent").innerText = "0%"
        document.getElementById("tails-percent").innerText = "0%"


    })
    // TODO: Add event listener and handler for flip and clear buttons

    // Flip Button Click Handler
        // TODO: Determine flip outcome
        // TODO: Update image and status message in the DOM

        // Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell


    // Clear Button Click Handler
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)

})
