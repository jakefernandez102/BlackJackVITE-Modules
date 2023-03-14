
const headerAlert = document.querySelector( '.header' );

export const printAlert = ( message, type = '' ) => {
    const alert = document.createElement( 'p' );
    if ( type == 'error' ) {
        alert.classList.add( 'p-4', 'bg-danger', 'text-center', 'text-light' );
        alert.textContent = message;
    } else if ( type === 'tie' ) {
        alert.classList.add( 'p-4', 'bg-warning', 'text-center', 'text-light' );
        alert.textContent = message;
    } else {
        alert.classList.add( 'p-4', 'bg-success', 'text-center', 'text-light' );
        alert.textContent = message;
    }
    setTimeout( () => {
        alert.remove();
    }, 3000 );
    return headerAlert.appendChild( alert );
};