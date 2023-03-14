


export const printPlayerCards = ( card, turn ) => {
    const divPlayerCards = document.querySelectorAll( '.divCards' );
    const playerCard = document.createElement( 'img' );

    playerCard.classList.add( 'carta' );
    playerCard.src = `assets/img/${ card }.png`;


    divPlayerCards[ turn ].appendChild( playerCard );
}