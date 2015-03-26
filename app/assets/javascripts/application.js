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

/// new bid form ///

    submitBid = function(){
      var id_data = $(".submit-bid-button").data("advert-id");
      var price_data = $("#new-bid-amount").val();

      console.log(id_data); 
      var bid_data = [id_data, price_data]  
        console.log(bid_data);

      $.ajax({
        url: '/bids',  
        method: 'POST',
        dataType: 'json',
        data: {bid: {amount: price_data, advert_id: id_data}} 

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
    }

    rejectBid = function(id){
      console.log(id); 
      $.ajax({
        url: '/bids/' + id, 
        method: 'PUT',
        dataType: 'json',
        data: {bid: {status: 'rejected'}} 

      }).success(function(data){
        console.log(data); 
      })  
    }



        $( document ).ready(function() {

          $(".new-bid" ).click(function(event) {
            console.log( "key pressed dude");
            $(".bid-form").css({display: "inline"});
          });

          $(".search-button" ).click(function(event) {
            console.log( "search box button pressed");
          });

          $(".submit-bid-button").click(function() {
            console.log( "submit button pressed");
            submitBid()
          })

            $(".accept" ).click(function(event) {
              console.log($(this).data("id"));
              acceptBid($(this).data("id"));
          
          });

            $(".reject" ).click(function(event) {
              console.log($(this).data("id"));
              rejectBid($(this).data("id"));
          
          });  


        });