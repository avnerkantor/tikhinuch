//Buttons Logic

$(document).ready(function () {
    $("#generalBtn").addClass('active');
    $("#lowBtn, #mediumBtn, #highBtn").addClass('general');
});

$(document).on('click', '#generalBtn', function (e) {
   $("#generalBtn").addClass('active');
    $("#maleBtn, #femaleBtn").removeClass('active');
    $("#lowBtn, #mediumBtn, #highBtn").addClass('general').removeClass('male').removeClass('female');
});
//, #lowBtn, #mediumBtn, #highBtn
$(document).on('click', '#maleBtn, #femaleBtn', function (e) {
   $("#generalBtn").removeClass('active');
});

$(document).on('click', '#maleBtn', function (e) {
    $("#lowBtn, #mediumBtn, #highBtn").toggleClass('male');
});

$(document).on('click', '#femaleBtn', function (e) {
    $("#lowBtn, #mediumBtn, #highBtn").toggleClass('female');
});


$(document).on('change', function() {
   //alert($('input[name="Subject"]:checked').val()); 
  $('input[name="Subject"]:not(:checked)').parent().removeClass("active");
  $('input[name="Subject"]:checked').parent().addClass("active");
  
  $('input[name="worldOrIsrael"]:not(:checked)').parent().removeClass("active");
  $('input[name="worldOrIsrael"]:checked').parent().addClass("active");
  
  //TODO: gender and escs
});


$(function() {
    $('#dashboard').affix({
        offset: { 
          top: $('#dashboard').offset().top-40,
          bottom: $('#dashboard--wrap').height($("#dashboard").height())
        }
    });
});

//Set countries width the same width as plots width
$(document).ready(function(){
  $("#Country1, #Country2, #Country3, #Country4, #SurveyYear, #SurveySubject, #SurveyCategory, #SurveySubCategory").css('width', ($("#Country1Plot").width()+'px'));
});
$(window).resize(function(){
    $(".selectize-input").css('width', ($("#Country1Plot").width()+'px'));
});


//jQuery for page scrolling feature - requires jQuery Easing plugin
$(document).ready(function () {
  $('a.page-scroll').bind('click', function(event) {
    // Store hash
    var hash = this.hash;
    
    var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 275
        }, 1500, 'easeInOutExpo');
    // Prevent default anchor click behavior
    event.preventDefault();
   // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });
});

$(document).ready(function () {
   $("#surveyDashboard").hide();
});

$(document).on('activate.bs.scrollspy', function(e) {
   var x = $(".nav li.active > a").attr('href');
  switch (x) {
            case "#proficiency":
                $("#surveyDashboard").hide();
                break;
            case "#expertise":
               $("#surveyDashboard").show();
                break;
            case "#questionnaire":
                $("#surveyDashboard").show();
                break;
            case "#analyze":
                $("#surveyDashboard").show();
                break;
        } 
  var $hash, $node;
  $hash = $("a[href^='#']", e.target).attr("href").replace(/^#/, '');
  $node = $('#' + $hash);
  if ($node.length) {
    $node.attr('id', '');
  }
  document.location.hash = $hash;
  if ($node.length) {
    return $node.attr('id', $hash);
  }
});


// This recieves messages from the server.
Shiny.addCustomMessageHandler('updateSelections', function(data) {
    window.history.pushState('','', data);
});
                   
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip({
        placement : 'bottom'
    });
});

