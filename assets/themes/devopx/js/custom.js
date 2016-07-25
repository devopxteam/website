/* Theme Name: Worthy - Free Powerful Theme by HtmlCoder
 * Author:HtmlCoder
 * Author URI:http://www.htmlcoder.me
 * Version:1.0.0
 * Created:November 2014
 * License: Creative Commons Attribution 3.0 License (https://creativecommons.org/licenses/by/3.0/)
 * File Description: Place here your custom scripts
 */

$(document).ready(function() {

  var date = new Date();
  $("#year").html(date.getFullYear());

  $("#footer-form").submit(function(event) {

    event.preventDefault();

    var createCORSRequest = function(method, url) {
      var xhr = new XMLHttpRequest();
      if ("withCredentials" in xhr) {
        // Most browsers.
        xhr.open(method, url, true);
      } else if (typeof XDomainRequest != "undefined") {
        // IE8 & IE9
        xhr = new XDomainRequest();
        xhr.open(method, url);
      } else {
        // CORS not supported.
        xhr = null;
      }
      return xhr;
    };

    var url = 'https://xkvdd2n68d.execute-api.us-east-1.amazonaws.com/prod/contact';
    var method = 'POST';
    var xhr = createCORSRequest(method, url);

    xhr.onload = function() {
      var response = JSON.parse(this.response);
      if(response.processed){
        $('#successFormSubmit').fadeIn();
      } else {
        $('#errorFormSubmit').fadeIn();
      }
    };

    xhr.onerror = function() {
      if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {
        $('#successFormSubmit').fadeIn();
      } else {
        $('#errorFormSubmit').fadeIn();
      }
    };

    var json = {
        "name": $('#name').val(),
        "email": $('#email').val(),
        "message": $('#message').val(),
    };

    // submit request
    xhr.send(JSON.stringify(json));

  });

});

$(function(){

  $(document).on( 'scroll', function(){

    if ($(window).scrollTop() > 100) {
      $('.scroll-top-wrapper').addClass('show');
    } else {
      $('.scroll-top-wrapper').removeClass('show');
    }
  });

  $('.scroll-top-wrapper').on('click', scrollToTop);

});

function scrollToTop() {
  verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
  element = $('body');
  offset = element.offset();
  offsetTop = offset.top;
  $('html, body').animate({scrollTop: offsetTop}, 500, 'linear');
}
