import { turnCPU } from './turn-cpu';
const btnAskForCard = document.querySelector( '#btn-askCard' ),
    btnAskStop = document.querySelector( '#btn-stop' );

export const validatePlayerPoints = ( deck, points, turn, playersPoints ) => {
    if ( points > 21 ) {

        btnAskForCard.disabled = true;
        btnAskStop.disabled = true;
        turnCPU( deck, points, turn, playersPoints );
    } else if ( points === 21 ) {

        btnAskForCard.disabled = true;
        btnAskStop.disabled = true;
        turnCPU( deck, points, turn, playersPoints );
    }
}