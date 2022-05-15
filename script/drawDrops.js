let drawDrop = ( drop, color, teamTag ) => {
  // If we don't have  a name for the drop or polygon data, throw an error
  if ( !( "name" in drop ) || !( "polygons" in drop ) || drop.polygons.length < 1 ) {
    throw "Malformed drop input to drawDrops";
  }

  // Context used for drawing to the canvas
  let context = document.getElementById( "canvas" ).getContext( "2d" );
  context.fillStyle = `rgba(${color.join(",")})`;
  
  let cumVertices = [];

  drop.polygons.forEach(polygon => {
    // If we don't have vertices for the current polygon, throw an error
    if ( !( "vertices" in polygon) ) {
      throw "Malformed polygon input to drawDrops";
    }

    // Reset the path and move to the first vertex
    context.beginPath();
    context.moveTo( polygon.vertices[0].x, polygon.vertices[0].y );
    cumVertices.push( polygon.vertices[0] );

    // Iterate through the vertices and connect them all
    for( let i = 1; i < polygon.vertices.length; i++ ) {
      context.lineTo( polygon.vertices[i].x, polygon.vertices[i].y );
      cumVertices.push( polygon.vertices[i] );
    }

    // Close off the path and fill it with the chosen color
    context.closePath();
    context.fill();
  });

  // If we have a team name, we'll draw that too at the average location
  // of the drop spot
  if ( teamTag ) {
    // Crop the text if it's too long
    teamTag = ( teamTag.length > 4 ) ? teamTag.substring( 0, 4 ) : teamTag;
    
    // Find the average location of the vertices
    let cumX = 0;
    let cumY = 0;
    cumVertices.forEach( ( vertex ) => {
      cumX += vertex.x;
      cumY += vertex.y;
    } )
    let meanX = cumX / cumVertices.length;
    let meanY = cumY / cumVertices.length;

    context.font = "30px Impact";
    context.textAlign = "center";
    context.fillStyle = `rgba(${color[0]},${color[1]},${color[2]},1.0)`
    context.fillText( teamTag, meanX, meanY + 10 );
    context.strokeStyle = "black";
    context.strokeText( teamTag, meanX, meanY + 10 );
  }
}