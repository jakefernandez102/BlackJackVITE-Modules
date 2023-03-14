


//Tomando una carta
/**
 * 
 * @param {Array<String>} deck returns the deck created in create-deck.js 
 * @returns {String} returns the last card of the deck
 */
export const askForCard = ( deck ) => {

    if ( !deck ) throw new Error( 'Deck is mandatory as a array of strings' );

    if ( deck.length === 0 ) {
        throw 'There are no more cards'
    }
    let card = deck.pop();

    return card;
};