$.get("http://DehtyarAlona.github.io/Partial/nav.html",function(data){

$(document).ready(function(){

  $(".container").prepend(data);
  $(".container").fadeIn();


})

})

$.get("http://DehtyarAlona.github.io/Partial/footer.html",function(data){

$(document).ready(function(){

  $(".container").append(data);
  $(".container").fadeIn();


})

})
