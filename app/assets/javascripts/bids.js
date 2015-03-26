$( document ).ready(function() {
    console.log( "bids ready!" );

function request(method, url, data){
  return $.ajax({
    url: url,
    method: method,
    dataType: "json",
    data: data
  })
}