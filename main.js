var add;
add = 0;
var balance;
balance = 0;
var withdraw;
withdraw = 0;



function addMoney (){
    add = Number(window.prompt("Enter amount to add"));

    if (add == "" || isNaN(add)){
        alert("Please input a valid Number");
    }else{
        balance = balance + add;
        alert("You have just added N" + add + " to your account.");
    }
 }
    

 function withdrawMoney (){

     balance = balance - withdraw;

     if(balance <= 0){
        alert("Insufficient funds");
     }else if (balance <= 1000){
         alert("Insufficient balance.\nYour balance needs to be greater than N1,000 before any withdrawal can be made.\n\nClick on ADD to add money and start making withdrawals. ");
    }else{
        withdraw =Number(window.prompt("Enter amount to withdraw"));
        
        
    }if(withdraw < balance){
        balance = balance - withdraw;
        alert("You have just withdrawn N" + withdraw + " from your account.");
    }else{
        alert("You exceeded your balance of " + balance);
     
     }

    } 
    

 function checkBalance (){
     alert("You have N" + balance + " left in your account");
   
 }