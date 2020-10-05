// OBJECT
// var student = {
//     "name" : Meet,
//     "surname" : Bhavsar,
//     "endroll" : 007
// }

// Array of Object is JSon
// var studentJson = [
//     {
//         "name" : Meet,
//         "surname" : Bhavsar,
//         "endroll" : 007
//     },
//     {
//         "name" : Rohit,
//         "surname" :Pardarshi,
//         "endroll" : 56
//     },
//     {
//         "name" : Vatsh,
//         "surname" : Gandhi,
//         "endroll" : 007
//     }
// ]

//page index
var page = 1;


//container
var container = document.getElementById("content")

// AJAX
var btn = document.getElementById("btn");
btn.addEventListener("click",function(){

var request = new XMLHttpRequest();
request.open("GET","https://learnwebcode.github.io/json-example/animals-"+page+".json");
request.onload = function (){
    //console.log(request.responseText);
    var data = JSON.parse(request.responseText);
    console.log(data);
    renderToHtml(data)
}

request.onerror = function (){
    console.log("Connection Error");
}

request.send();
page++;
    if(page > 3){
       btn.disabled = true;
    }
});


function renderToHtml(data){
    var htmlstring = "";
    for(i=0;i<data.length;i++){
        htmlstring+="<p>"+data[i].name+" is a "+data[i].species+" and food it likes are ";
        // likes
        for(ii=0;ii<data[i].foods.likes.length;ii++){
            if(ii==0){
                htmlstring+=data[i].foods.likes[ii]+" ";
            }else{
                htmlstring+=" and "+data[i].foods.likes[ii];
            }
        }

        htmlstring+=" and dislikes are ";
        //dislikes
        for(y=0;y<data[i].foods.dislikes.length;y++){
            if(y==0){
                htmlstring+=data[i].foods.dislikes[y]+" ";
            }else{
                htmlstring+=" and "+data[i].foods.dislikes[y];
            }
        }
        htmlstring+="</p>"; 
    }

    container.insertAdjacentHTML("beforeend",htmlstring);
}










