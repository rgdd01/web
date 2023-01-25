function Confirm(){

   // window.alert("your reservation has been successfully confirmed");
     document.getElementById('Confirm').innerHTML = 'your reservation has been successfully confirmed';

}
function age(){
  var ud = document.getElementById('day').value;
  var um =document.getElementById('month').value;
  var uy = document.getElementById('year').value;
  var date = new Date();
   var d = date.getDay();
   var m =1+ date.getMonth();
   var y = date.getFullYear();
   var 	Month = [31, 28,31,30,31,30,31,31,30,31,30,31];
      if (ud >  d){
          d =  d+ Month[ m-1];
          m =  m - 1;
          }
          if (um >  m){
          m =  m+ 12;
          y = y -1;
          }
      //var Rd= d-ud;
      //var Rm= m-um;
      if(ud==d && um==m){
        document.getElementById('BDc').innerHTML='You got the discount !';
      }
      else{
        document.getElementById('BDc').innerHTML='Sorry , today is not your birthday !';
      }
}  


}

