var text = document.getElementById("text");
var count = document.getElementById("total-counter");

text.addEventListener("keyup", function(e){
    wordCounter(e.target.value);
});

function wordCounter(t){
    var t = text.value.split(" ");
    t = t.filter(item => item);
   /* var wordcount = 0;
    for(var i=0; i <= t.length; i++){
        if(t.charAt(i) == " "){
            wordcount++;
        }
    }*/
    count.innerText = t.length+"/250";
    //count.innerText = wordcount+"/250";
}