window.cipher = {
    // ...
  //encrypt function
  encode:function() {
      var key = parseInt(document.getElementById("key").value);
      var message = input.value;
      output.innerHTML = "";
      for (var i = 0; i < message.length; i++) {
      var letter = message.charCodeAt(i);
      var newLetter = letter;
      //mayuscula
      if ((letter >= 65 && letter <= 90)
         || (letter >= 97 && letter <= 122)) {
        newLetter += key;
      //minuscula
        if ((newLetter > 90 && newLetter < 97) || newLetter > 122) {
          newLetter -= 26;
        }
      }
      newLetter = String.fromCharCode(newLetter);
      output.innerHTML += newLetter;
    }
    },
  //decrypt function
  decode:function() {
    var message = input.value;
    var key = parseInt(document.getElementById("key").value);
    output.innerHTML = "";
    for (var i = 0; i < message.length; i++) {
      var letter = message.charCodeAt(i);
      var newLetter = letter;

      if ((letter >= 65 && letter <= 90)
         || (letter >= 97 && letter <= 122)) {
        newLetter -= key;
        if ((newLetter > 90 && newLetter < 97) || newLetter < 65) {
          newLetter += 26;
        }
      }
      newLetter = String.fromCharCode(newLetter);
      output.innerHTML += newLetter;
    }
  }
};
