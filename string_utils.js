exports.containsAny = containsAny;

function containsAny(s, words) {
  var result = false;
  if (words.length > 0) {
  	for (var i = 0; i < words.length; i++) {
      if (s.indexOf(words[i]) >= 0) {
      	result = true;
        break;
      }
    }
  } else {
  	result = true;
  }
  return result;
};   
