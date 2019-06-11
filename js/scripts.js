$(document).ready(function(){
//whenever our 'form' is "submitted" we perform a "function"
  $ ('form').submit(function(event){
    event.preventDefault();
    var count = []
    for (var i = 0; i <=  30; i+= 5) {
      console.log(i)
    };
    for (var n = 0; n <= 50; n+= 7) {
      console.log(n)
    }
    $("ol").append("<li>"+[i] + "</li>")
  });
});
