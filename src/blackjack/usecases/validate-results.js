import { printAlert } from './../Views/print-alert.js';


export const validateResults = ( cpuPoints, minimumPoints, turn ) => {

    if ( minimumPoints === 21 && cpuPoints === 21 ) {
        return printAlert( `Is a tie!!!`, 'tie' );
    }
    if ( minimumPoints > 21 ) {
        return printAlert( `Player ${ turn + 1 } You loose!!!`, 'error' );
    }
    if ( cpuPoints === 21 ) {
        return printAlert( `Player ${ turn + 1 } You loose!!!`, 'error' );
    }

    if ( cpuPoints > minimumPoints && cpuPoints < 21 ) {
        return printAlert( `Player ${ turn + 1 } You loose!!!`, 'error' );
    }

    if ( minimumPoints === cpuPoints ) {
        return printAlert( `Player ${ turn + 1 } You loose!!!`, 'error' );
    }
    if ( minimumPoints === cpuPoints ) {
        return printAlert( `Player ${ turn + 1 } You loose!!!`, 'error' );
    }
    if ( cpuPoints > 21 ) {
        return printAlert( `Player ${ turn + 1 } You win!!!` );
    }
    if ( minimumPoints < 21 && cpuPoints > 21 ) {
        return printAlert( `Player ${ turn + 1 } You win!!!` );
    }


}