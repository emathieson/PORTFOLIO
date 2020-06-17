

$(document).ready(function(){

    $('#aboutMeLink').click(function() {
        $("#aboutMe").delay(450).animate({opacity:1},700)
        $("#projects").delay(0).animate({opacity:0},400)
        $("#skills").delay(0).animate({opacity:0},400)
        $("#contact").delay(0).animate({opacity:0},400)
        $("#aboutMeLink").css("color", "#E5E5E5");
        $("#projectsLink").css("color", "#8c9b9c");
        $("#skillsLink").css("color", "#8c9b9c");
      //change Z index
        $('#aboutMe').css("z-index", "1");
        $('#projects').css("z-index", "0");
        $('#skills').css("z-index", "0");
      });
    
      $('#projectsLink').click(function() {
        $("#projects").delay(450).animate({opacity:1},700)
        $("#aboutMe").delay(0).animate({opacity:0},400)
        $("#skills").delay(0).animate({opacity:0},400)
        $("#contact").delay(0).animate({opacity:0},400)
        $("#projectsLink").css("color", "#E5E5E5");
        $("#aboutMeLink").css("color", "#8c9b9c");
        $("#skillsLink").css("color", "#8c9b9c");
        //change Z index
        $('#aboutMe').css("z-index", "0");
        $('#projects').css("z-index", "1");
        $('#skills').css("z-index", "0");
      });

      $('#skillsLink').click(function() {
        $("#skills").delay(450).animate({opacity:1},700)
        $("#aboutMe").delay(0).animate({opacity:0},400)
        $("#projects").delay(0).animate({opacity:0},400)
        $("#contact").delay(0).animate({opacity:0},400)
        $("#skillsLink").css("color", "#E5E5E5");
        $("#aboutMeLink").css("color", "#8c9b9c");
        $("#projectsLink").css("color", "#8c9b9c");
        //change Z index
        $('#aboutMe').css("z-index", "0");
        $('#projects').css("z-index", "0");
        $('#skills').css("z-index", "1");
      });

      $('#contactLink').click(function() {
        $("#contact").delay(450).animate({opacity:1},700)
        $("#aboutMe").delay(0).animate({opacity:0},400)
        $("#skills").delay(0).animate({opacity:0},400)
        $("#projects").delay(0).animate({opacity:0},400)
        $("#contactLink").css("color", "#E5E5E5");
        $("#aboutMeLink").css("color", "#8c9b9c");
        $("#projectsLink").css("color", "#8c9b9c");
        $("#skillsLink").css("color", "#8c9b9c");
        //change Z index
        $('#aboutMe').css("z-index", "0");
        $('#projects').css("z-index", "0");
        $('#skills').css("z-index", "0");

      });
    
});