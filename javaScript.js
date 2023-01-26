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




