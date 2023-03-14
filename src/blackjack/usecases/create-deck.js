import _ from 'underscore';

/**
 * This function create a new deck
 * @param {Array<String>} typeCards Ex: [ 'C', 'D', 'H', 'S' ]
 * @param {Array<String>} specials Ex: [ 'A', 'J', 'Q', 'K' ]
 * @returns {Array<String>}
 */
export const crearDeck = ( typeCards, specials ) => {

    if ( !typeCards || typeCards.length === 0 ) throw new Error( 'TypeCards is mandatory' );
    if ( !specials || specials.length === 0 ) throw new Error( 'specials is mandatory' );



    let deck = [];
    for ( let i = 2; i <= 10; i++ ) {
        for ( const typeCard of typeCards ) {
            deck.push( i + typeCard );
        }
    }
    for ( const typeCard of typeCards ) {
        for ( const special of specials ) {
            deck.push( special + typeCard )
        }
    }

    return _.shuffle( deck );
};