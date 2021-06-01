let tailleString = function(string){
    return string.length;
}

let textString = function(string){
    return string.replace('e', ' ');
}

let concatenedString = function(string){
    return string.concat(string);
}

let charAtFiveString = function(string){
    return string.charAt(5);
}

let nineFirstCharactersString = function(string){
    return string.substring(0, 9);
}

let upperCaseString = function(string){
    return string.toUpperCase();
}

let lowerCaseString = function(string){
    return string.toLowerCase();
}

let deleteSpaceString = function(string){
    return string.trim();
}

let typeOfString = function(string){
    if (typeof "" === 'string'){
        return true;
    }
}

let typeOfExtension = function(string){
    return string.split('.').pop();
}

let countNumberOfSpace = function(string){
    return string.split(' ').length - 1;
}

let reverseString = function(string){
    return string.split('').reverse().join('');
}