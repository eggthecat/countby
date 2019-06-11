$(document).ready(function(){
//whenever our 'form' is "submitted" we perform a "function"
  $ ('form').submit(function(event){
    event.preventDefault();
    var count = []
    for (i=0; i <=30; i+=5) {
console.log(i);
    };
  });
});
