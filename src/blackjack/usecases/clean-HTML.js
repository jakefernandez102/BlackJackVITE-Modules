

export const cleanHTML = ( initDeck ) => {
    const playerScore = document.querySelectorAll( 'small' );
    const divPlayerCards = document.querySelectorAll( '.divCards' );

    playerScore.forEach( elem => elem.textContent = 0 )

    initDeck();

    for ( const i in divPlayerCards ) {

        while ( divPlayerCards[ i ].firstChild ) {
            divPlayerCards[ i ].removeChild( divPlayerCards[ i ].firstChild );
        }
        while ( divPlayerCards[ i ].firstChild ) {
            divPlayerCards[ i ].removeChild( divPlayerCards[ i ].firstChild );
        }
    }
}