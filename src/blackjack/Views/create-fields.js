
const divField = document.querySelector( '.field' );

export const createFields = ( numberOfPlayers = 1 ) => {

    for ( let i = 0; i < numberOfPlayers; i++ ) {

        const field = document.createElement( 'DIV' );
        field.classList.add( 'row', 'container-fluid' );
        field.innerHTML = `
                <div class="col cardField">
                    <h1>Player ${ i + 1 }: <small id="playerScore">0</small></h1>
                    <div id="player-cards" class="divCards">
    
                    </div>
                </div>
            `;
        divField.appendChild( field );
    }
    const fieldCpu = document.createElement( 'DIV' );
    fieldCpu.classList.add( 'row', 'container-fluid' );
    fieldCpu.innerHTML = `
            <div class="col cardField">
                <h1>CPU: <small id="cpuScore">0</small></h1>
                <div id="cpu-cards" class="divCards">

                </div>
            </div>
        `;
    divField.appendChild( fieldCpu );

};