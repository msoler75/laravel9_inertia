// remove accents and optionally remove regional characters
export const  removeAccents = function (str, regional) {
    var mapAccents = {
        'a': 'á|à|ã|â',
        'e': 'é|è|ê',
        'i': 'í|ì|î',
        'o': 'ó|ò|ô|õ',
        'u': 'ú|ù|û|ü',
        'A': 'À|Á|Ã|Â',
        'E': 'É|È|Ê',
        'I': 'Í|Ì|Î',
        'O': 'Ó|Ò|Ô|Õ',
        'U': 'Ú|Ù|Û|Ü',
    };

    var mapRegional = {
        'c': 'ç',
        'n': 'ñ',
         'C': 'Ç',
         'N': 'Ñ'
    };

    for (var pattern in mapAccents) {
        str = str.replace(new RegExp(mapAccents[pattern], 'g'), pattern);
    };

    if(regional)
    for (var pattern in mapRegional) {
        str = str.replace(new RegExp(mapRegional[pattern], 'g'), pattern);
    };

    return str;
};


// capitalize each word
export const  ucFirstAllWords =function(str) {
    var pieces = str.split(" ");
    for (var i = 0; i < pieces.length; i++) {
        var j = pieces[i].charAt(0).toUpperCase();
        pieces[i] = j + pieces[i].substr(1).toLowerCase();
    }
    return pieces.join(" ");
}


//  capitalize first letter of str
export const ucFirst = function(str)  {
    return  str.charAt(0).toUpperCase() + str.slice(1);
}