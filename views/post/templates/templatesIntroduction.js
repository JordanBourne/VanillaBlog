var templatesIntroduction = (function() {
    return {
        addExampleTemplate: function() {
            var templateClone = document.getElementById("testTemplate");
            var destination = document.getElementById("destinationOne");
            destination.appendChild(templateClone.content.cloneNode(true));
        },

        addExampleTwoTemplate: function() {
            var templateClone = document.getElementById("testTemplate");
            var destination = document.getElementById("destinationTwo");
            var inputText = document.getElementById("exampleTwoText");
            templateClone.content.querySelector(".testDiv").textContent = inputText.value;
            destination.appendChild(templateClone.content.cloneNode(true));
        },

        removeExampleTemplates: function(destinationDiv) {
            var destination = document.getElementById(destinationDiv);
            var templates = destination.querySelectorAll(".testDiv");
            templates.forEach(function(template) {
                template.parentNode.removeChild(template);
            });
        }
    };
})();
