const enableBuildMode = () => {
  data = [];

  document.getElementById( "canvas" ).onmousedown = ( e ) => {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    data.push( { x, y } );
    
    // Pretty printing of data
    let out = "{\n"
    out += "  vertices: [\n";
    data.forEach(element => {
      out += `    { x: ${element.x}, y: ${element.y} },\n`
    });
    out = out.substring( 0, out.length - 2 );
    out += "\n  ]\n";
    out += "}"
    console.log(out);
  }
}