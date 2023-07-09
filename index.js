function writeCards(arrayOfNames) {
    const thankYouCards = [];
    for (let n = 0; n < arrayOfNames.length; n++) {
        thankYouCards.push(`Thank you, ${arrayOfNames[n]}, for the wonderful surprise gift!`);
    } 
    return thankYouCards;
}
function countDown () {
   let countDown = 10 ;
   while (countDown > -1) {
    console.log (countDown--);
   }
}