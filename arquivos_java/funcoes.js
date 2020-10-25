/*
$(document).ready(function() {

    $('#saida').load("./paginas/games.html");

});
*/
$(document).ready(function() {
    $("#home").click(function() {
        $('#saida').load('./paginas/home.html');
        //alert("Thanks for visiting!");
    });

    $("#games").click(function() {
        $('#saida').load('./paginas/games.html');
        //alert("Thanks for visiting!");
    });
});