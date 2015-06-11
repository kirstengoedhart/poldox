$(function() {
  /********************************************************
                       VARIABLES
  *********************************************************/
  // config
  var onlyOnce = false;

  // Firebase 
  var results = {};       // store results
  var url = 'https://poldox.firebaseio.com/poll';
  var allAnswersRef = new Firebase(url);
  var myAnswerRef = initMyAnswerRef();
  
  // Elements
  var $poll = $('.poll');
  var $buttons = $('.poll button[question]');
  var $result = $('.result');
  var $resultButton = $('.result-button');

  /********************************************************
                       EVENT HANDLERS

                  VANUIT HTML NAAR JAVASCRIPT
  *********************************************************/
  // - submit poll when user clicks button
  $buttons.click(function(ev) {
    var $button = $(ev.target);

    // Update button CSS styling
    $('button[question="' + question + '"]').removeClass('selected');
    $button.addClass('selected');

    // extract relevant information from attributes
    var value = $button.attr('value');
    var question = $button.attr('question');
    
    // call business logic
    submit(question, value);
  });

  // on "klaar" click, show the result
  $resultButton.click(showResults);
  
  // on firebase value, calculate results, update result-html
  allAnswersRef.on('value', function(snapshot) {
    // get data from firebase
    var allAnswers = snapshot.val();
    // will store results in "results" variable 
    calculateResults(allAnswers);
    // will update HTML
    updateResults();
  });
    
  /*******************************************************
                  DISPLAY / HTML FUNCTIONS

                  VAN DATA TERUG NAAR HTML
  ********************************************************/
  // show results
  function showResults() {
    $poll.hide();
    $result.show();
    updateResults();
  }

  function updateResults(){
    //update HTML with latest data
    $.each(results, function(question, answers) {
      updateChart(question,answers);
      $.each(answers,function(value,count){
        $('span[value="' + value + '"]').text(count);
      });
    });
  }

  function updateChart(questionname,answers){
    var columns = [];
    $.each(answers,function(name,count){
      columns.push([name,count]);
    });
    c3.generate({
      bindto:'#'+questionname+'-chart',
      data: {
        type: 'pie',
        columns: columns
      }
    });
  }

  /*******************************************************
                  BUSINESS LOGICA

        ALLE BEREKENINGEN, DATA, ETC (ABSTRACT)
  ********************************************************/
  // submit answer
  function submit(question, answer) {
    myAnswerRef.child(question).set(answer);
    //showResults();
    //localStorage.setItem('answered','ok');
  }

  function calculateResults(allAnswers){
    // store result in global "results" variable
    // ... so we can use "results" when displaying results
    // ... so we can say, "hey, display results when showing results"
    results = {
      // Example:
      
      // sex: {   <-- question object
      //  'm':0,  <-- answer : count pairs
      //  'f':1,
      //  '?':10
      //},
      // 
      // etc
      responses: { // fake question "responses"
        count: 0 // count number of subjects/responses
      }
    };
    // for every response, we iterate over all answers
    $.each(allAnswers, function(index, answers) {
      // for single response, we iterate over all question/answers
      $.each(answers,function(question,answer){ 
        // create question, if not exists!
        if (!results[question]) results[question] = {};
        // create answer, if not exists!
        if(!results[question][answer]) results[question][answer] = 0;
        // count number of answers!
        results[question][answer]++;
      });
      
      // count number of responses
      results.responses.count++;
    });
  }
  /*******************************************************
                       INITIALIZATION
  ********************************************************/
  // initialize function,
  // when starting the poll
  function init() {
    // if we've answered all questions before, show the results on initialization
    var answered = localStorage.getItem('answered') === 'ok';
    if (answered && onlyOnce) {
      showResults();
    }
  }

  // Helper function: Get my ID
  function initMyAnswerRef() {
    // retrieve my ID (random generated string) from localStorage (from a previous visit)
    var myId = localStorage.getItem('id');
    // if we could not retrieve the ID, we're a new visitor!
    if (!myId) {
      // Create a new idea (using firebase' push() ) - this will
      // create a random string
      var myAnswerRef = allAnswersRef.push();
      myId = myAnswerRef.key();
      // Store our new ID, so we can retrieve it next time!
      localStorage.setItem('id', myId);
      return myAnswerRef;
    } else {
      // We've found a stored ID, so we can use an
      // existing firebase location.
      return allAnswersRef.child(myId);
    }
  }

  // initialize the poll
  init();
});