function downloadFile(filename) {
  // Create an anchor element
  var link = document.createElement('a');
  link.setAttribute('href', filename);
  link.setAttribute('download', filename);

  // Append the anchor element to the body
  document.body.appendChild(link);

  // Trigger the click event
  link.click();

  // Remove the anchor element
  document.body.removeChild(link);
}