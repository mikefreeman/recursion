// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
  // your code goes here
  var result = '';
  var type = typeof obj;

  // unsupported types return as empty string
  if (type === 'function' || obj === undefined) {
    return result;
  }

  if (obj == null) {
    return 'null';
  }

  if (type === 'object' && Array.isArray(obj)) {
    type = 'array';
  }
  
  switch(type) {
    case 'object':
      result += '{';
      var properties = Object.keys(obj);
      for (var i = 0; i < properties.length; i++) {
        var value = stringifyJSON(obj[properties[i]]);
        // skip properties with invalid value types
        if (value === '') {
          continue;
        }
        result += '"' + properties[i] + '":' + value;
        if (i !== properties.length - 1) {
          result += ',';
        }
      }
      result += '}'
      break;

    case 'array':
      result += '[';
      for (var i = 0; i < obj.length; i++) {
        result += stringifyJSON(obj[i]);
        if (i !== obj.length - 1) {
          result += ',';
        }
      }
      result += ']';
      break;

    case 'string':
      result += '"' + obj + '"';
      break;

    default:
      result += obj;
      break;
  }

  return result;
};
