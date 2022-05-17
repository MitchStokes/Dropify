let selectedDrop = "";

const populateDrops = ( dropData ) => {
  let dropsListContainer = document.getElementById( "drops-list" );

  dropData.sort( ( a, b ) => {
    return ( a.name > b.name ) ? 1 : ( ( a.name < b.name ) ? -1 : 0 );
  } );

  dropData.forEach( ( drop ) => {
    let tag = document.createElement( "p" );
    tag.appendChild( document.createTextNode( drop.name ) );
    tag.classList.add( "list-item" );

    tag.onclick = ( e ) => {
      let listItems = Array.from( dropsListContainer.children );
      listItems.forEach( item => {
        item.classList.remove( "list-item-highlight" );
      } );
      selectedDrop = e.target.innerText;
      e.target.classList.add( "list-item-highlight" );
    };

    dropsListContainer.appendChild( tag );
  } );
}