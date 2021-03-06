(function() {
    var $body = document.querySelector('body');
    $body.classList.remove("no-js");
    $body.classList.add("js");
    
    var $btnMenu = document.querySelector(".header__botao__menu");
    $btnMenu.removeAttribute("style");
})();