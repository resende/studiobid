// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require twitter/bootstrap
//= require turbolinks
//= require_tree .

/// modal view advert ///


/// new bid form ///

submitBid = function(advertId, amount) {

  window.alert("Bid Made");

  $.ajax({
    url: '/bids',  
    method: 'POST',
    dataType: 'json',
    data: {bid: {amount: amount, advert_id: advertId}}
  })
  .done(function(response) {
    console.log(response)
  })
  .fail(function(error) {
    console.log(error)
  })
}



acceptBid = function(id){
  console.log(id); 
  $.ajax({
    url: '/bids/' + id, 
    method: 'PUT',
    dataType: 'json',
    data: {bid: {status: 'accepted'}} 

  }).success(function(data){
    console.log(data); 
  })
  window.alert("Bid Accepted");  
}

rejectBid = function(id){
  console.log(id); 
  $.ajax({
    url: '/bids/' + id, 
    method: 'DELETE',
    dataType: 'json'
  })
  .done(function(data){
    console.log(data); 
  })
  .fail(function(error) {
    console.log(error)
  })
  window.alert("Bid Rejected");
}



$(document).ready(function() {

  $(".new-bid").click(function(event) {
    console.log( "key pressed dude");
    $(".bid-form").css({display: "inline"});
  });

  $(".search-button").click(function(event) {
    console.log( "search box button pressed");
  });

  $(".submit-bid-button").on('click', function() {
    console.log("submit button pressed");
    var advertId = $(this).data('advert-id');
    var amount = $('.new-bid-amount-' + advertId).val();
    submitBid(advertId, amount)
    $(".bid-form").css({display: "none"});
  });

  $('body').on('blur', '#new-bid-amount', function(){
    // console.log($(this).val())
    if ($(this).val() > 0) {
      $('.submit-bid-button').removeClass('disabled');
      //clear entry
    } else {
      $(".submit-bid-button").addClass('disabled');
      //clear entry
    };
  })

  $(".accept" ).click(function(event) {
    console.log($(this).data("id"));
    acceptBid($(this).data("id"));

  });

  $(".reject" ).click(function(event) {
    console.log($(this).data("id"));
    rejectBid($(this).data("id"));
    $(this).parent().remove();   

  });  

  $(".advert-info").click(function(e) { 
    e.preventDefault();
    console.log("button clicked!")
  });  


});