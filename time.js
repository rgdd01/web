// function  start(){
//     var current = new Date();

//     var day= current.getDate();
//     var month = 1+ current.getMonth();

//     document.getElementById("bbb").innerHTML('<input type=date class=optionStyle id=start name=trip-start value=2023-02-09 min=2023-' + month + '-' + day +' max=2023-12-31></input>');



// }

function getDate(){
    var today = new Date();


document.getElementById("date").value = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);


}