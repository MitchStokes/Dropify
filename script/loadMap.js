const loadMap = ( isErangel ) => {
  let context = document.getElementById( "canvas" ).getContext( "2d" );
  let img = new Image;
  img.onload = () => {
    context.drawImage( img, 0, 0, 900, 900 );
  }
  img.src = ( isErangel ) ? "res/Erangel_PNG.png" : "res/Miramar_PNG.png";
  console.log( "test" );
}