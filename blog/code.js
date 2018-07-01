var code = (function() {
    var codeElements = document.querySelectorAll("code");
    console.log(codeElements)

    codeElements.forEach(function(element) {
        colorProperties(element);
    });

    function colorProperties(element) {
        var unformattedHTML = element.innerHTML.split("");
        var formattedHTML = [];
        var currentWord = [];
        var previousWordType = "";
        var isQuoteOpen = false;
        var isEntityOpen = false;
        unformattedHTML.forEach((letter) => {
            // console.log(`Letter: ${letter}, Previous Word: ${previousWordType}`);
            if (letter === "/") {
                formattedHTML.push(letter);
                return currentWord = [];
            }
            if ((letter === " " || letter === "=" || letter === "&") && currentWord.length) {
                if (previousWordType === "elementName") {
                    formattedHTML.push("<span class=\"codeAttributeType\">", currentWord.join(""), "</span>");
                    previousWordType = "attributeType";
                    return currentWord = [letter];
                }

                if (previousWordType === "lessThan") {
                    formattedHTML.push("<span class=\"codeElementName\">", currentWord.join(""), "</span>");
                    previousWordType = "elementName";
                    return currentWord = [letter];
                }
            }

            if (letter === "\"") {
                if (isQuoteOpen) {
                    isQuoteOpen = false;
                    formattedHTML.push("<span class=\"codeAttributeValue\">", currentWord.join(""), "</span>\"");
                    return currentWord = [];
                } else {
                    isQuoteOpen = true;
                    currentWord.push(letter);
                    formattedHTML.push(currentWord.join(""));
                    return currentWord = [];
                }
            }

            if (letter === "&") {
                isEntityOpen = true;
                formattedHTML.push(currentWord.join(""));
                return currentWord = [letter]
            }

            if (letter === ";" && isEntityOpen) {
                isEntityOpen = false;
                currentWord.push(letter);
                currentWord = currentWord.join("")
                formattedHTML.push(currentWord);
                if (currentWord === "&lt;") {
                    previousWordType = "lessThan";
                }
                if (currentWord === "&gt;") {
                    previousWordType = "greaterThan";
                }
                return currentWord = [];
            }

            return currentWord.push(letter);
        });

        formattedHTML.push(currentWord.join(''));
        element.innerHTML = formattedHTML.join("");
        return;
    }

    function colorAttributeTypes() {

    }

    function colorAttributeValues() {

    }

    return {};
})();
