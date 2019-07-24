
/**
 * Disables the right click menu for the given element.
 */
function disableRightClickContextMenu(element) {
    element.addEventListener('contextmenu', function(e) {
      if (e.button == 2) {
        // Block right-click menu thru preventing default action.
        e.preventDefault();
      }
    });
  }
  
  // Once the page is loaded, disable the right click menu of the canvas.
  $(document).ready(function() {
    disableRightClickContextMenu(document.getElementById('canvas'));
  });