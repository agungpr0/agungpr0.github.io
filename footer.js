var main = document.createElement("script");
main.src = 'main.js';
main.type = 'text/javascript';
document.getElementsByTagName("body")[0].appendChild(main);

/* THANKS! https://stackoverflow.com/questions/10113366/load-jquery-with-javascript-and-use-jquery */
window.onload = function() {
    if (typeof jQuery == 'undefined') {
        var jquery_library = document.createElement("script");
        // jquery_library.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js';
        jquery_library.src = 'jquery.js';
        jquery_library.type = 'text/javascript';
        jquery_library.onload = function() {
            jquery_onload();
        };
        document.getElementsByTagName("head")[0].appendChild(jquery_library);
    } else {
        jquery_onload();
    }
}