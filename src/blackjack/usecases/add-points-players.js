import { cardValue } from './card-value';


export const addPointsPlayers = ( card, turn, playersPoints ) => {
    const playerScore = document.querySelectorAll( 'small' );
    playersPoints[ turn ] += cardValue( card );
    playerScore[ turn ].textContent = playersPoints[ turn ];
    return playersPoints[ turn ]
};