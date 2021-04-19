Result = (function () {
    var timeout = [];
    var duration = 2000;

    var init = function () {
        bindEvents();
    }

    var bindEvents = function () {
        $(document).on('click tap', '.back-to-start', Utilities.resetInteractive);
    }


    var exitCalculate = function () {
        if (timeout) {
            $.each(timeout, function (index, value) {
                clearTimeout(value);
                timeout.splice(index, 1);
            });
        }
        timeout.push(setTimeout(clearCalculate, duration));
    }

    var calculateResults = function () {
        if ($('#calculating').hasClass('fade') || $('#calculating').hasClass('hidden')) {
            Questions.adjustWaterLevel(10);
            $('#calculating').removeClass('fade').removeClass('hidden').addClass('in');
            exitCalculate();

        }
    }

    var redirectResult = function (id) {
        location.href = data.results[id].slug+ '.html';
    }

    var fadeAnimation = function () {
        $('#animation').addClass('fade');
        $('#animation').addClass('hidden');

    }

    var clearCalculate = function () {
        if ($('#calculating').hasClass('in')) {
            $('#calculating').addClass('fade').addClass('hidden').removeClass('in');
        }
    }

    var buildResults = function (id) {
        if ($('#animation').hasClass('fade')) {
            $('#animation').removeClass('fade');
        }

        if ($('#animation').hasClass('hidden')) {
            $('#animation').removeClass('hidden');
        }

        if (id == null || id == 1) {
            sendGAEvent('Results: ' + data.results[0].name);
            $('#result-template-mussel').tmpl(data.results[0]).appendTo('head');
            $('#profile').attr('src', 'assets/images/profiles/1@2x.png');
            $('#animation').load('assets/animations/1.html', function () {
                animationInit();
            });
        } else {
            sendGAEvent('Results: ' + data.results[id - 1].name);
            $('#result-template').tmpl(data.results[id - 1]).appendTo('#results');
            $('#profile').attr('src', 'assets/images/profiles/' + id + '@2x.png');
            $('#animation').load('assets/animations/' + id + '.html', function () {
                animationInit();
            });
        }
        setTimeout(function () {
            fadeAnimation();
        }, 8000);
        $('#results').removeClass('fade').addClass('in');
        //Questions.adjustWaterLevel(10);
        //clearGui();
        $('.logo').addClass('fade').removeClass('in');
        $('#gui').css('height', '0px');

    }

    var clearGui = function () {
        $('#gui').addClass('fade').addClass('hidden');
    }

    var clearResults = function () {
        $('#results').html('');
    }


    return {
        init: init,
        calculateResults: calculateResults,
        clearCalculate: clearCalculate,
        fadeAnimation: fadeAnimation,
        buildResults: buildResults,
        clearResults: clearResults,
        redirectResult: redirectResult

    }
})();
