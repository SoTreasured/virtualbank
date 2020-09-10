var add;
add = 0;
var balance;
balance = 0;
var withdraw;
withdraw = 0;


function addMoney (){
    add = window.prompt("Enter amount to add");

    if (add == "" || isNaN(add)){
        alert("Please input a valid Number");
    }else{
        alert("You have just added N" + add + " to your account.");
        balance = add;
    }
 }
    

 function withdrawMoney (){

     balance = balance - withdraw;

     if(balance == 0){
        alert("Insufficient funds");
     }else if (balance <= 1000){
         alert("Sorry, your have insufficient balance to make any withdrawals.\nYour balance needs to be greater than N1,000 before any withdrawal can be made.\n\nClick on ADD to add money and start making withdrawals. ");
     }else if(balance > withdraw){
        alert("Sorry, your balance is not sufficient enough for such withdrawals.\nCheck your balance to know what amouunt you can withdraw ");
     }else{
        withdraw = window.prompt("Enter amount to withdraw");
        alert("You have just withdrawn N" + withdraw + " from your account.");
     }

      
    }

 function checkBalance (){
     alert("You have N" + balance + " left in your account");
   
 }