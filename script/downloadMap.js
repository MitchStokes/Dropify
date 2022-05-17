const downloadMap = () => {
  let link = document.createElement('a');
  link.download = `dropmap${new Date().toLocaleString()}.png`;
  link.href = document.getElementById('canvas').toDataURL();
  link.click();
}