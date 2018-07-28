var create = (function() {
    function getPostContents() {
        return {
            title: document.getElementById("title").value,
            link: document.getElementById("link").value,
            body: document.getElementById("body").value
        }
    }
    return {
        createPost: function(form) {
            httpRequest.post(
                "/create/post",
                getPostContents(),
                function (err, res) {
                    console.log(err);
                    console.log(res);
                });
        }
    }
})();
