/* Theme Name: Worthy - Free Powerful Theme by HtmlCoder
 * Author:HtmlCoder
 * Author URI:http://www.htmlcoder.me
 * Version:1.0.0
 * Created:November 2014
 * License: Creative Commons Attribution 3.0 License (https://creativecommons.org/licenses/by/3.0/)
 * File Description: Place here your custom scripts
 */

$(function() {

  $("#footer-form").submit(function() {

    $.ajaxSetup({
      crossDomain: true
    });

    var url = "https://script.google.com/macros/s/AKfycbyAjDj_8USL00FFUFpxMZOXjIyfvE1lxjkoVjEBPH3QoZwlZos/exec";
    var data = $('#footer-form').serialize();

    // Stop form from submitting normally
    event.preventDefault();

    //send data to server
    $.post(url, data, function(response) {

      if(response.processed){
        $('#successFormSubmit').fadeIn();
      } else {
        $('#errorFormSubmit').fadeIn();
      }

    });

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

document.write("<script type='text/javascript'>var fc_CSS=document.createElement('link');fc_CSS.setAttribute('rel','stylesheet');var isSecured = (window.location && window.location.protocol == 'https:');var rtlSuffix = ((document.getElementsByTagName('html')[0].getAttribute('lang')) === 'ar') ? '-rtl' : '';fc_CSS.setAttribute('type','text/css');fc_CSS.setAttribute('href',((isSecured)? 'https://d36mpcpuzc4ztk.cloudfront.net':'http://assets1.chat.freshdesk.com')+'/css/visitor'+rtlSuffix+'.css');document.getElementsByTagName('head')[0].appendChild(fc_CSS);var fc_JS=document.createElement('script'); fc_JS.type='text/javascript';fc_JS.src=((isSecured)?'https://d36mpcpuzc4ztk.cloudfront.net':'http://assets.chat.freshdesk.com')+'/js/visitor.js';(document.body?document.body:document.getElementsByTagName('head')[0]).appendChild(fc_JS);window.freshchat_setting= 'eyJ3aWRnZXRfc2l0ZV91cmwiOiJzdXBwb3J0LmRldm9weC5jb20iLCJwcm9kdWN0X2lkIjo1MDAwMDA3MDAwLCJuYW1lIjoiZGV2b3BYIiwid2lkZ2V0X2V4dGVybmFsX2lkIjo1MDAwMDA3MDAwLCJ3aWRnZXRfaWQiOiI5YjZmMjhiZS0yMGVhLTRlNDItODljZS1jMzIzMDMzMGIzMjUiLCJzaG93X29uX3BvcnRhbCI6ZmFsc2UsInBvcnRhbF9sb2dpbl9yZXF1aXJlZCI6ZmFsc2UsImlkIjo1MDAwMDgzOTE5LCJtYWluX3dpZGdldCI6ZmFsc2UsImZjX2lkIjoiMzkxZjQ5NDQ3MWUxNzI5OGU0MzU3Y2VkNmI0MjRhYjQiLCJzaG93IjoxLCJyZXF1aXJlZCI6MiwiaGVscGRlc2tuYW1lIjoiR2xvYmFsIElUIFNvbHV0aW9ucyIsIm5hbWVfbGFiZWwiOiJOYW1lIiwibWFpbF9sYWJlbCI6IkVtYWlsIiwibWVzc2FnZV9sYWJlbCI6Ik1lc3NhZ2UiLCJwaG9uZV9sYWJlbCI6IlBob25lIE51bWJlciIsInRleHRmaWVsZF9sYWJlbCI6IlRleHRmaWVsZCIsImRyb3Bkb3duX2xhYmVsIjoiRHJvcGRvd24iLCJ3ZWJ1cmwiOiJnbG9iYWxpdHNvbHV0aW9ucy5mcmVzaGRlc2suY29tIiwibm9kZXVybCI6ImNoYXQuZnJlc2hkZXNrLmNvbSIsImRlYnVnIjoxLCJtZSI6Ik1lIiwiZXhwaXJ5IjowLCJlbnZpcm9ubWVudCI6InByb2R1Y3Rpb24iLCJkZWZhdWx0X3dpbmRvd19vZmZzZXQiOjMwLCJkZWZhdWx0X21heGltaXplZF90aXRsZSI6IkNoYXQgaW4gcHJvZ3Jlc3MiLCJkZWZhdWx0X21pbmltaXplZF90aXRsZSI6IkxldCdzIHRhbGshIiwiZGVmYXVsdF90ZXh0X3BsYWNlIjoiWW91ciBNZXNzYWdlIiwiZGVmYXVsdF9jb25uZWN0aW5nX21zZyI6IldhaXRpbmcgZm9yIGFuIGFnZW50IiwiZGVmYXVsdF93ZWxjb21lX21lc3NhZ2UiOiJIaSEgSG93IGNhbiB3ZSBoZWxwIHlvdSB0b2RheT8iLCJkZWZhdWx0X3dhaXRfbWVzc2FnZSI6Ik9uZSBvZiB1cyB3aWxsIGJlIHdpdGggeW91IHJpZ2h0IGF3YXksIHBsZWFzZSB3YWl0LiIsImRlZmF1bHRfYWdlbnRfam9pbmVkX21zZyI6Int7YWdlbnRfbmFtZX19IGhhcyBqb2luZWQgdGhlIGNoYXQiLCJkZWZhdWx0X2FnZW50X2xlZnRfbXNnIjoie3thZ2VudF9uYW1lfX0gaGFzIGxlZnQgdGhlIGNoYXQiLCJkZWZhdWx0X2FnZW50X3RyYW5zZmVyX21zZ190b192aXNpdG9yIjoiWW91ciBjaGF0IGhhcyBiZWVuIHRyYW5zZmVycmVkIHRvIHt7YWdlbnRfbmFtZX19IiwiZGVmYXVsdF90aGFua19tZXNzYWdlIjoiVGhhbmsgeW91IGZvciBjaGF0dGluZyB3aXRoIHVzLiBJZiB5b3UgaGF2ZSBhZGRpdGlvbmFsIHF1ZXN0aW9ucywgZmVlbCBmcmVlIHRvIHBpbmcgdXMhIiwiZGVmYXVsdF9ub25fYXZhaWxhYmlsaXR5X21lc3NhZ2UiOiJPdXIgYWdlbnRzIGFyZSB1bmF2YWlsYWJsZSByaWdodCBub3cuIFNvcnJ5IGFib3V0IHRoYXQsIGJ1dCBwbGVhc2UgbGVhdmUgdXMgYSBtZXNzYWdlIGFuZCB3ZSdsbCBnZXQgcmlnaHQgYmFjay4iLCJkZWZhdWx0X3ByZWNoYXRfbWVzc2FnZSI6IldlIGNhbid0IHdhaXQgdG8gdGFsayB0byB5b3UuIEJ1dCBmaXJzdCwgcGxlYXNlIHRlbGwgdXMgYSBiaXQgYWJvdXQgeW91cnNlbGYuIiwiYWdlbnRfdHJhbnNmZXJlZF9tc2ciOiJZb3VyIGNoYXQgaGFzIGJlZW4gdHJhbnNmZXJyZWQgdG8ge3thZ2VudF9uYW1lfX0iLCJhZ2VudF9yZW9wZW5fY2hhdF9tc2ciOiJ7e2FnZW50X25hbWV9fSByZW9wZW5lZCB0aGUgY2hhdCIsInZpc2l0b3Jfc2lkZV9pbmFjdGl2ZV9tc2ciOiJUaGlzIGNoYXQgaGFzIGJlZW4gaW5hY3RpdmUgZm9yIHRoZSBwYXN0IDIwIG1pbnV0ZXMuIiwiYWdlbnRfZGlzY29ubmVjdF9tc2ciOiJ7e2FnZW50X25hbWV9fSBoYXMgYmVlbiBkaXNjb25uZWN0ZWQiLCJzaXRlX2lkIjoiMzkxZjQ5NDQ3MWUxNzI5OGU0MzU3Y2VkNmI0MjRhYjQiLCJhY3RpdmUiOnRydWUsIndpZGdldF9wcmVmZXJlbmNlcyI6eyJ3aW5kb3dfY29sb3IiOiIjNzc3Nzc3Iiwid2luZG93X3Bvc2l0aW9uIjoiQm90dG9tIFJpZ2h0Iiwid2luZG93X29mZnNldCI6IjMwIiwibWluaW1pemVkX3RpdGxlIjoiTGV0J3MgdGFsayEiLCJtYXhpbWl6ZWRfdGl0bGUiOiJDaGF0IGluIHByb2dyZXNzIiwidGV4dF9wbGFjZSI6IllvdXIgTWVzc2FnZSIsIndlbGNvbWVfbWVzc2FnZSI6IkhpISBIb3cgY2FuIHdlIGhlbHAgeW91IHRvZGF5PyIsInRoYW5rX21lc3NhZ2UiOiJUaGFuayB5b3UgZm9yIGNoYXR0aW5nIHdpdGggdXMuIElmIHlvdSBoYXZlIGFkZGl0aW9uYWwgcXVlc3Rpb25zLCBmZWVsIGZyZWUgdG8gcGluZyB1cyEiLCJ3YWl0X21lc3NhZ2UiOiJPbmUgb2YgdXMgd2lsbCBiZSB3aXRoIHlvdSByaWdodCBhd2F5LCBwbGVhc2Ugd2FpdC4iLCJhZ2VudF9qb2luZWRfbXNnIjoie3thZ2VudF9uYW1lfX0gaGFzIGpvaW5lZCB0aGUgY2hhdCIsImFnZW50X2xlZnRfbXNnIjoie3thZ2VudF9uYW1lfX0gaGFzIGxlZnQgdGhlIGNoYXQiLCJjb25uZWN0aW5nX21zZyI6IldhaXRpbmcgZm9yIGFuIGFnZW50IiwiYWdlbnRfdHJhbnNmZXJfbXNnX3RvX3Zpc2l0b3IiOiJZb3VyIGNoYXQgaGFzIGJlZW4gdHJhbnNmZXJyZWQgdG8ge3thZ2VudF9uYW1lfX0ifSwicm91dGluZyI6bnVsbCwicHJlY2hhdF9mb3JtIjp0cnVlLCJwcmVjaGF0X21lc3NhZ2UiOiJXZSBjYW4ndCB3YWl0IHRvIHRhbGsgdG8geW91LiBCdXQgZmlyc3QsIHBsZWFzZSB0YWtlIGEgY291cGxlIG9mIG1vbWVudHMgdG8gdGVsbCB1cyBhIGJpdCBhYm91dCB5b3Vyc2VsZi4iLCJwcmVjaGF0X2ZpZWxkcyI6eyJuYW1lIjp7InRpdGxlIjoiTmFtZSIsInNob3ciOiIyIn0sImVtYWlsIjp7InRpdGxlIjoiRW1haWwiLCJzaG93IjoiMiJ9LCJwaG9uZSI6eyJ0aXRsZSI6IlBob25lIE51bWJlciIsInNob3ciOiIwIn0sInRleHRmaWVsZCI6eyJ0aXRsZSI6IlRleHRmaWVsZCIsInNob3ciOiIwIn0sImRyb3Bkb3duIjp7InRpdGxlIjoiRHJvcGRvd24iLCJzaG93IjoiMCIsIm9wdGlvbnMiOlsibGlzdDEiLCJsaXN0MiIsImxpc3QzIl19fSwiYnVzaW5lc3NfY2FsZW5kYXIiOm51bGwsIm5vbl9hdmFpbGFiaWxpdHlfbWVzc2FnZSI6eyJ0ZXh0IjoiT3VyIGFnZW50cyBhcmUgdW5hdmFpbGFibGUgcmlnaHQgbm93LiBTb3JyeSBhYm91dCB0aGF0LCBidXQgcGxlYXNlIGxlYXZlIHVzIGEgbWVzc2FnZSBhbmQgd2UnbGwgZ2V0IHJpZ2h0IGJhY2suIiwidGlja2V0X2xpbmtfb3B0aW9uIjoiZmFsc2UiLCJjdXN0b21fbGlua191cmwiOiIifSwicHJvYWN0aXZlX2NoYXQiOmZhbHNlLCJwcm9hY3RpdmVfdGltZSI6MTUsInNpdGVfdXJsIjoic3VwcG9ydC5kZXZvcHguY29tIiwiZXh0ZXJuYWxfaWQiOjUwMDAwMDcwMDAsImRlbGV0ZWQiOmZhbHNlLCJvZmZsaW5lX2NoYXQiOnsic2hvdyI6IjEiLCJmb3JtIjp7Im5hbWUiOiJOYW1lIiwiZW1haWwiOiJFbWFpbCIsIm1lc3NhZ2UiOiJNZXNzYWdlIn0sIm1lc3NhZ2VzIjp7InRpdGxlIjoiTGVhdmUgdXMgYSBtZXNzYWdlISIsInRoYW5rIjoiVGhhbmsgeW91IGZvciB3cml0aW5nIHRvIHVzLiBXZSB3aWxsIGdldCBiYWNrIHRvIHlvdSBzaG9ydGx5LiIsInRoYW5rX2hlYWRlciI6IlRoYW5rIHlvdSEifX0sIm1vYmlsZSI6dHJ1ZSwiY3JlYXRlZF9hdCI6IjIwMTUtMDktMjNUMTc6NDk6MzIuMDAwWiIsInVwZGF0ZWRfYXQiOiIyMDE1LTA5LTIzVDE3OjQ5OjMyLjAwMFoifQ==';</script>");
