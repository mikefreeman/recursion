// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But in stead we're going to implement it from scratch:
var getElementsByClassName = function (className) {
  // your code here
  var result = [];
  var traverse = function(element) {
    if (element.classList && element.classList.contains(className)) {
      result.push(element);
    } else if (element.childNodes) {
      for (var i = 0; i < element.childNodes.length; i++) {
        traverse(element.childNodes[i]);
      }
    }
  };

  traverse(document.body);
  return result;
};
