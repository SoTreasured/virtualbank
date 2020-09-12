var add;
add = 0;
var balance;
balance= 0;
var withdraw;
withdraw = 0;
var showBal;
showBal = 0;



function showBalance(){
    showBal = document.getElementById("balance")
    showBal.textContent = "Account Balance : N" + balance;
}

function addMoney (){
    add = Number(window.prompt("Enter amount to add"));

    if (add == "" || isNaN(add)){
        alert("Please input a valid Number");
    }else{
        balance += add;
        showBalance();
        alert("You have just added N" + add + " to your account.");
    }
 }
    

 function withdrawMoney (){
    if(balance <= 0){
        alert("Please make a deposit first");
     }else if (balance <= 1000){
         alert("Insufficient balance.\nYour balance needs to be greater than N1,000 before any withdrawal can be made.\n\nClick on ADD to add money and start making withdrawals. ");
    }else{
        withdraw =Number(window.prompt("Enter amount to withdraw"));
    }if(balance - (withdraw + withdraw * 0.05) <= 1000){
        alert("Oops!\n\nYou must have at least N1,000 in your account after every withdrawals. ");
    }else{
        balance -= withdraw + withdraw * 0.05;
        alert("You have just withdrawn N" + withdraw + " from your account, and a bank charge of 0.5% has been deducted from your account.");
     
     }
     showBalance();
    }
     
    

 function checkBalance (){
     alert("You have N" + balance + " left in your account");
     showBalance();
   
 }