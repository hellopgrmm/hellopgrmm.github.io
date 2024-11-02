//This script written by Hello Programming 
function strHx(str) {
    var result = '';
    for (var i = 0; i < str.length; i++) {
        result += str.charCodeAt(i).toString(16);
    }
    return result.toUpperCase();
}
 
function hxStr(hex) {
    var result = '';
    for (var i = 0; i < hex.length; i += 2) {
        result += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    }
    return result;
}
function getCPos(element) {
    //This function written by ChatGPT;
  var position = 0;
  if (element.selectionStart) { // W3C standard
    position = element.selectionStart;
  } else if (document.selection) { // IE < 9
    element.focus();
    var range = document.selection.createRange();
    range.moveStart('character', -element.value.length);
    position = range.text.length;
  }
  return position;
}