Questions = (function() {
    var init = function() {
        bindEvents();
    }

    var buildQuestions = function(id) {

        if (id == null) {
    	   $('#quiz-template').tmpl(data.questions[0]).appendTo('#questions');
           buildOptions(0);
           adjustWaterLevel(0);
        } else {
           clearQuiz();
            $('#quiz-template').tmpl(data.questions[id]).appendTo('#questions');
            buildOptions(id);
            adjustWaterLevel(data.questions[id].step);
        }
    }

    var clearQuiz = function() {
        $('#questions').html('');
    }

    var buildOptions = function(id) {
    	$('#option-template').tmpl(data.questions[id].options).appendTo('#options');
    }

    var nextQuestion = function() {
        var id = $(this).attr('data-next');
        buildQuestions(id-1);
    }

    var getResult = function() {
         var id = $(this).attr('data-result');
        clearQuiz();
        Result.calculateResults(id-1);
        setTimeout(function() { Result.redirectResult(id-1); }, 2500);
    }

    var adjustWaterLevel = function(level) {
        $('#water').attr('data-water-level', level);
        $('#bubbles').attr('data-bubble-height', level);
        $('.raybase').attr('data-raybase-position', level);
        if (level > 4) {
            $('.answer-btn').css('color', '#ffffff').css('z-index', '99');
        }
        if (level > 4) {
            $('.question').css('color', '#ffffff').css('z-index', '99');
        }
    }

    var resetWaterLevel = function() {
        $('#water').attr('data-water-level', 0);
        $('#bubbles').attr('data-bubble-height', 0);
        $('.raybase').attr('data-raybase-position', 0);
    }


    var bindEvents = function() {
        $(document).on('click tap', '.answer-btn[data-next]', nextQuestion);
        $(document).on('click tap', '.answer-btn[data-result]', getResult);
    }

    return {
        init: init,
        buildQuestions: buildQuestions,
        clearQuiz: clearQuiz,
        resetWaterLevel: resetWaterLevel,
        adjustWaterLevel: adjustWaterLevel
    }

})();
