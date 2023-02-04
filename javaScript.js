function Confirm(){
  document.getElementById('Confirm').innerHTML = 'your reservation has been successfully confirmed';

}
function age(){
  var ud = document.getElementById('day').value;
  var um =document.getElementById('month').value;
  var date = new Date();
  var d = date.getDate();
  var m =1+ date.getMonth();
  var 	Month = [31, 28,31,30,31,30,31,31,30,31,30,31];
     
      if(ud==d && um==m){
        document.getElementById('BDc').innerHTML='You got the discount !';
      }
      else{
        document.getElementById('BDc').innerHTML='Sorry , today is not your birthday !';
      }
} 

// to get the date og today
function getDate(){
  var today = new Date();

document.getElementById("start").value = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);


}

function Login(){
  var name = document.getElementById('loginname').value;
  var passowrd = document.getElementById('loginpassword').value;
   // عشان نتاكد من البيانات اللي داخله لازم نصير مشتغلين على الداتابيس
  
}

function Signup(){
  var name = document.getElementById('sname').value;
  var passowrd = document.getElementById('spassword').value;
  var email = document.getElementById('semail').value;

  //مفروض تتسجل هذي البيانات في الداتابيس 

}
 
  