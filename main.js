// Ejercicio 1
// Declara una función que acepte una palabra como parámetro y la devuelva con todos sus caracteres en mayúsculas y separados por espacios. Ejemplo: Para "Ana" devolverá "A N A".

function toUpperCaseAndSplit(text) {
    "Hell"
    const textConverted = text.toUpperCase().replaceAll(" ", "").split("").join(" ")

    const finalMessage = `${text} \n\n |\n |\n V\n\n${textConverted}`

    console.log(finalMessage)
    
    return finalMessage
}

const text = "Neo"

toUpperCaseAndSplit(text)

/* // Output:

Neo 

 |
 |
 V

N E O

*/ 



// Ejercicio 2
// Declara una función que acepte un nombre como parámetro y devuelva el número de palabras que tiene el nombre. Ejemplo: Para "Antonio Alberto Jesús" devolverá 3.
function wordsCounter(text) {
    const arrayWords = text.split(" ")

    // Nuevo array filtrado (quitamos posibles epacios " " extra vacíos)
    const arrayWordsClear = arrayWords.reduce((acc, e)=> {

        // Verificamos que el actual elemento es cierto
        if (e) { 
            acc.push(e);
        }

        return acc;

    }, []);

    const result = `Número de palabras: ${arrayWordsClear.length}` 

    console.log(result)

    return `Número de palabras: ${result}`
}

const text2 = "Fuck Society"
wordsCounter(text2)

