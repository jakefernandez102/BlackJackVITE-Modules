


//CPU turn
export const printCpuCards = ( card, turn ) => {
    const divPlayerCards = document.querySelectorAll( '.divCards' );
    const cpuCard = document.createElement( 'img' );
    cpuCard.classList.add( 'carta' );
    cpuCard.src = `assets/img/${ card }.png`;

    divPlayerCards[ turn ].appendChild( cpuCard );

}