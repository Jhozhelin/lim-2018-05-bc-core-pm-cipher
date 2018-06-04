window.cipher = {
    encode :  (offset, string) =>  {
        let caracter = '';
        //tamño de cadena y recorido
        for (let i = 0; i < string.length; i++ ) {
            // código Ascii de cada letra de mi texto
            let cAscii = string.charCodeAt(i);
            // fórmula correspondiente y devolver
            if(cAscii >= 65 && cAscii <= 90) {
                let letraM = String.fromCharCode((cAscii - 65 + offset) % 26 + 65);
                caracter += letraM;
            } else if(cAscii >= 97 && cAscii <= 122) {
                let letraS = String.fromCharCode((cAscii - 97 + offset) % 26 + 97);
                caracter += letraS;
            } else if(cAscii >= 48 && cAscii <= 57) {
                let numero = String.fromCharCode((cAscii - 48 + offset) % 10 + 48);
                caracter += numero;
            } else {
                let LCaracter = String.fromCharCode(cAscii)
                caracter += LCaracter;
            }
        }
        return caracter;
    },

    decode : (offset, string) => {
        let caracter = '';
        for (let i = 0; i < string.length; i++ ) {
            let cAscii = string.charCodeAt(i);
            if(cAscii >= 65 && cAscii <= 90) {
                let letraM = String.fromCharCode((cAscii - 90 - offset) % 26 + 90);
                caracter += letraM;
            } else if(cAscii >= 97 && cAscii <= 122) {
                let letraS = String.fromCharCode((cAscii - 122 - offset) % 26 + 122);
                caracter += letraS;
            } else if(cAscii >= 48 && cAscii <= 57) {
                let numero = String.fromCharCode((cAscii - 57 - offset) % 10 + 57);
                caracter += numero;
            } else {
                let LCaracter = String.fromCharCode(cAscii)
                caracter += LCaracter;
            }
        }
        return caracter;
    },

    createCipherWithOffset:(offset)=>{

    return{
      encode:(string) => {return cipher.encode (offset, string) },

      decode:(string) => {return cipher.decode (offset, string) }
  }
  }
}
