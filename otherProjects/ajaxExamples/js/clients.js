$(document).ready(function (){

})

$("#getClients").on("click", function() {

var url ="http://DehtyarAlona.github.io/otherProjects/ajaxExamples/json/clients.json"
$.getJSON(url, function (data){
alert(data);
console.dir(data);
})

})
