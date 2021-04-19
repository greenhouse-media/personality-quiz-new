$(document).ready(function(){
    data = function() {};

    $.get('./data.json', function(response) {
        data = response;

        Utilities.init();
        Navigation.init();
        Questions.init();
        Result.init();
    }, 'json');

    var location = window.location.pathname.split("/").pop();
    location = location.replace(".html", "");
    if (location != "personality" && location.length != 0){
      $('#animation').load('assets/animations/' + location + '.html', function () {
          animationInit();
      });
    }
});
