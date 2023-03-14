

/**
 * Returns the value of the taken card in askForCard() in ask-for-card.js 
 * @param {String} card 
 * @returns {Number}
 */
export const cardValue = ( card ) => {

    if ( !card ) throw new Error( 'Card is mandatory as a string' );

    const value = card.substring( 0, ( card.length - 1 ) );
    return ( !isNaN( value ) ) ? value * 1
        : ( value === 'A' ) ? validateAValue( value ) : 10;

};


/**
 * It allow the player to choose the value of A card
 * @param {Number} value 
 * @returns {Number}
 */
export const validateAValue = ( value = 1 ) => {
    value = confirm( 'Value for A: 11 -> confirm or 1 -> cancel' ) ? 11 : 1;
    return value;
};