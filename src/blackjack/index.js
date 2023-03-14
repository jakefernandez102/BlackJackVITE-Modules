
import _ from 'underscore';

import { askForCard, cardValue, cleanHTML, crearDeck, turnCPU, validatePlayerPoints } from './usecases';
import { createFields, printCardHTML } from './Views/index.js';


/***
 * 2C c(rubs
 * 2D diamonds
 * 2H hearts
 * 2S spades
 */
//*Lo logre y lo voy a lograr, I am going to be there, where I want to be :)
( () => {
    'use strict'
    const divField = document.querySelector( '.field' );

    const btnAskNewGame = document.querySelector( '#btn-newGame' ),
        btnAskForCard = document.querySelector( '#btn-askCard' ),
        btnAskStop = document.querySelector( '#btn-stop' ),
        btn2Players = document.querySelector( '#btn-2Players' ),
        btn3Players = document.querySelector( '#btn-3Players' ),
        btn4Players = document.querySelector( '#btn-4Players' );

    let deck = [],
        typeCards = [ 'C', 'D', 'H', 'S' ],
        specials = [ 'A', 'J', 'Q', 'K' ],
        playersPoints = [],
        playerTurn = 0;

    //Events
    const initApp = () => {
        document.addEventListener( 'DOMContentLoaded', () => {

            initDeck();
            createFields();
            btn2Players.addEventListener( 'click', () => {
                cleanFields();
                initDeck( 3 );
                createFields( 2 );
            } );
            btn3Players.addEventListener( 'click', () => {
                cleanFields();
                initDeck( 4 );
                createFields( 3 );
            } );
            btn4Players.addEventListener( 'click', () => {
                cleanFields();
                initDeck( 5 )
                createFields( 4 );
            } );

        } );
    };
    initApp();

    const cleanFields = () => {
        while ( divField.firstChild ) {
            divField.removeChild( divField.firstChild )
        }
    }

    btnAskNewGame.addEventListener( 'click', () => {
        btn2Players.disabled = false;
        btn3Players.disabled = false;
        btn4Players.disabled = false;

        btnAskForCard.disabled = false;
        btnAskStop.disabled = false;
        // printCardHTML( askForCard() );
        cleanHTML( initDeck );
        cleanFields();
        createFields();
    } );

    btnAskForCard.addEventListener( 'click', () => {

        btn2Players.disabled = true;
        btn3Players.disabled = true;
        btn4Players.disabled = true;


        let whosNext = giveTurn();
        printCardHTML( deck, playerTurn, playersPoints, askForCard( deck ), whosNext );
    } );

    btnAskStop.addEventListener( 'click', () => {

        btnAskForCard.disabled = true;
        btnAskStop.disabled = true;
        turnCPU( deck, playersPoints[ playerTurn ], playerTurn, playersPoints );

    } );

    const giveTurn = () => {

        validateTurn( playerTurn, playersPoints );

        return playerTurn >= playersPoints.length - 1 ? playerTurn = 0
            : playerTurn >= 0 ? playerTurn++ : playerTurn;

    };
    const validateTurn = ( turn, playersPoints ) => {

        const cardField = document.querySelectorAll( '.cardField > h1' );

        cardField[ turn ].style.color = 'yellow';
        if ( turn > 0 ) {
            cardField[ ( turn - 1 ) ].style.color = 'white';
        }
        if ( turn === 0 ) {
            cardField[ ( playersPoints.length - 2 ) ].style.color = 'white';
        }

    };

    //Creando un nuevo deck
    const initDeck = ( numberOfPlayers = 2 ) => {

        deck = crearDeck( typeCards, specials );
        playersPoints = []
        for ( let i = 0; i < numberOfPlayers; i++ ) {
            playersPoints.push( 0 );
        };
    }

} )();

