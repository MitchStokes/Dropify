let selectedDropType = "";

const setupSelectDropType = (  ) => {
  let dropsTypesList = document.getElementById( "drop-types-list" );

  let listItems = Array.from( dropsTypesList.children );
  listItems.forEach( item => {
    item.onclick = ( e ) => {
      listItems.forEach( tag => {
        tag.classList.remove( "list-item-highlight" );
      } );
      selectedDropType = e.target.innerText;
      e.target.classList.add( "list-item-highlight" );
    }
  } );
}