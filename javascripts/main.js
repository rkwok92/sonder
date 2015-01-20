$(document).ready(function() {
	$(function () { 
    var questions = [ "What have you done that nobody has?", "What's your passion?", "What makes you special?", 
		"What's your purpose in life?", "What brought you here?",
		"What have you been up to?", "What drives you?", "What do people know you for?",
		"What's your story?"];
    var qId = 0;
		
    window.setInterval(function () {
        $('#question').html(questions[qId]);
        qId = qId + 1;
        if(qId >= questions.length) { qId = 0; }
    }, 5000);
	});
});