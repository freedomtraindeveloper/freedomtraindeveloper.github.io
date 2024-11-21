function $(id) {
    return document.getElementById(id);
}

var firstName = $('firstName');
var middleInitial = $('middleInitial');
var lastName = $('lastName');
var message = $('message');

firstName.oninput = function() {
    firstName.value = removeSpaces(firstName.value, false);
}

middleInitial.oninput = function() {
    if(middleInitial.value.length > 1) {
        middleInitial.value = middleInitial.value.split('')[0];
        middleInitial.value = removeSpaces(middleInitial.value, false);
    }
}

lastName.oninput = function() {
    lastName.value = removeSpaces(lastName.value, false);
}

if(message !== null) {
    message.oninput = function() {
        message.value = removeSpaces(message.value, true);
    }
}

function removeSpaces(value, spaceIncluded) {
    var valueFound;
    while (true) {
        try {
            valueFound = spaceIncluded ? value.match(/[$&*<>]/)[0] : value.match(/[,.\/? !@#$%^&*\(\)\[\]\{\}:;\"\'\\1234567890<>\~\`\-\+\_\=]/)[0];
            value = value.replaceAll(valueFound, '');
        } catch (e) {
            break;
        }
    }
    return value;
} 