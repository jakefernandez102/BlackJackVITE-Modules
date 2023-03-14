
import { validatePlayerPoints } from './../usecases/validate-player-points.js';
import { cardValue } from './../usecases/card-value.js';
import { printPlayerCards } from './print-player-card.js'


//*Imprimiendo cartas en el lado del jugador
export const printCardHTML = ( deck, playerTurn, playersPoints, card, turn ) => {
    if ( playerTurn === playersPoints.length - 1 ) {
        playerTurn = 0;
    }
    const playerScore = document.querySelectorAll( 'small' );

    playersPoints[ turn ] += cardValue( card );
    validatePlayerPoints( deck, playersPoints[ turn ], turn, playersPoints );

    playerScore[ turn ].textContent = playersPoints[ turn ];

    printPlayerCards( card, turn );


};