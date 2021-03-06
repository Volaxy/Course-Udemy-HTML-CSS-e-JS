(function() {
    var $menu = document.getElementById("menu");
    var $html = document.getElementsByTagName("html");
    $html[0].classList.remove("no-js");
    $html[0].classList.add("js");
    $menu.addEventListener("click", function() {
        $html[0].classList.toggle("menu-opened");
    });
})();