var code = (function() {
    var codeElements = document.querySelectorAll("code");

    codeElements.forEach(function(element) {
        if (element.parentNode.className.includes("html")) {
            colorPropertiesHTML(element);
        }
        if (element.parentNode.className.includes("javascript")) {
            colorPropertiesJS(element);
        }
    });

    function colorPropertiesHTML(element) {
        var unformattedHTML = element.innerHTML.split("");
        var formattedHTML = [];
        var currentWord = [];
        var previousWordType = "";
        var isQuoteOpen = false;
        var isEntityOpen = false;
        unformattedHTML.forEach((letter) => {
            if (letter === "/") {
                formattedHTML.push(letter);
                return currentWord = [];
            }
            if ((letter === " " || letter === "=" || letter === "&") && currentWord.length) {
                if (previousWordType === "elementName") {
                    formattedHTML.push("<span class=\"codeAttributeValue\">", currentWord.join(""), "</span>");
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
                    formattedHTML.push("<span class=\"codeString\">", currentWord.join(""), "</span>\"");
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

    function colorPropertiesJS(element) {
        var unformattedJS = element.innerHTML.split("");
        var formattedJS = [];
        var currentWord = [];
        var previousWordType = "";
        var isQuoteOpen = false;
        var isEntityOpen = false;
        var keywords = ["var", "let", "const", "if", "return", "function"];

        unformattedJS.forEach(function(letter) {
            if (/[^A-Za-z0-9]/.test(letter)) {
                var word = currentWord.join("");
                if (letter !== "\"" && isQuoteOpen) {
                    return currentWord.push(letter);
                }
                if (keywords.includes(word)) {
                    formattedJS = addCurrentWord(word, "codeKeyword", letter, formattedJS);
                    return currentWord = [];
                }
                if (letter === ".") {
                    formattedJS = addCurrentWord(word, "codeObject", letter, formattedJS);
                    return currentWord = [];
                }
                if (letter === "(") {
                    formattedJS = addCurrentWord(word, "codeFunction", letter, formattedJS);
                    return currentWord = [];
                }
                if (letter === "\"") {
                    if (isQuoteOpen) {
                        formattedJS = addCurrentWord(word, "codeString", letter, formattedJS);
                    } else {
                        formattedJS.push(letter);
                    }
                    isQuoteOpen = !isQuoteOpen;
                    return currentWord = [];
                }
                if (formattedJS[formattedJS.length - 1] === ".") {
                    formattedJS = addCurrentWord(word, "codeObject", letter, formattedJS);
                    return currentWord = [];
                }

                formattedJS.push(currentWord.join(''));
                formattedJS.push(letter);
                return currentWord = [];
            }

            return currentWord.push(letter);
        });

        formattedJS.push(currentWord.join(''));
        element.innerHTML = formattedJS.join("");
        return;
    }

    function addCurrentWord(word, style, letter, wordList) {
        word = "<span class=\"" + style + "\">" + word + "</span>";
        wordList.push(word);
        wordList.push(letter);
        return wordList;
    }

    return {};
})();
