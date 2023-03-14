import { askForCard } from './ask-for-card.js';
import { printCpuCards } from './../Views/print-cpu-cards.js';
import { validateResults } from './validate-results';
import { addPointsPlayers } from './add-points-players';

export const turnCPU = ( deck, minimumPoints, turn, playersPoints ) => {
    let cpuPoints = 0;
    do {

        let card = askForCard( deck );

        cpuPoints = addPointsPlayers( card, ( playersPoints.length - 1 ), playersPoints );

        printCpuCards( card, ( playersPoints.length - 1 ) );

    } while ( ( cpuPoints < minimumPoints ) && ( minimumPoints <= 21 ) );
    validateResults( cpuPoints, minimumPoints, turn );
};

