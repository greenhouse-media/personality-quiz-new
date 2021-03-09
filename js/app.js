$(document).ready(function(){
    data = function() {};

    $.get('./data.json', function(response) {
        data = response;

        Utilities.init();
        Navigation.init();
        Questions.init();
        Result.init();
    }, 'json');
});