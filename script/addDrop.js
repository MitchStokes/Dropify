const COLOR_MAIN = [ 255,0,0,0.3 ];
const COLOR_ALT = [ 0,0,255,0.3 ];
const COLOR_MIX = [ 255,255,0,0.3 ];

const setupAddDrop = () => {
  document.getElementById( "add-drop" ).onclick = () => {
    // Get the team tag from the relevant input
    const teamTag = document.getElementById( "team-tag" ).value;

    // Convert drop type string to color array
    let color = null;
    if ( selectedDropType === "Main" ) {
      color = COLOR_MAIN;
    } else if ( selectedDropType === "Alt" ) {
      color = COLOR_ALT;
    } else if ( selectedDropType === "Mixed" ) {
      color = COLOR_MIX;
    }

    // If we have everything, add the drop to the map
    if ( teamTag && color && selectedDropType ) {
      let drop = null;
      erangelData.forEach( item => { // Need to iterate to find the drop data object by name
        if ( item.name === selectedDrop ) {
          drop = item;
        }
      } );
      drawDrop( drop, color, teamTag );

      // Reset team tag input
      document.getElementById( "team-tag" ).value = "";

      // Reset drop selection container
      let dropsListContainer = document.getElementById( "drops-list" );
      let listItems = Array.from( dropsListContainer.children );
      listItems.forEach( item => {
        item.classList.remove( "list-item-highlight" );
      } );

      // Reset drop type selection container
      let dropsTypesList = document.getElementById( "drop-types-list" );
      listItems = Array.from( dropsTypesList.children );
      listItems.forEach( tag => {
        tag.classList.remove( "list-item-highlight" );
      } );

      // Reset state variables
      selectedDrop = "";
      selectedDropType = "";

    // If we don't have all needed inputs, throw an error
    } else {
      alert( "Please input a team tag, select a drop location, and select a drop type." );
    }
  }
}