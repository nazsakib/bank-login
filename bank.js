// deposit area

document.getElementById('deposit-button').addEventListener('click', function () {

    // step - 1 / taking input and show
    const depositInput = document.getElementById('deposit-input');
    const depositAmountShow = depositInput.value;

    // step - 2 / first deposit amount showing
    const depositShow = document.getElementById('deposit-show');
    const previousDepositAmount = depositShow.innerText;

    // step - 3 / adding old and new deposit amount
    const newDepositTotal = parseFloat(depositAmountShow) + parseFloat(previousDepositAmount);

    // step -  4 / showing total depositted amount
    depositShow.innerText = newDepositTotal;

    // step - 6 /  celaring the input
    depositInput.value = '';

    // balance area


    // step -7 / balance input and showing as a number
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const balanceToalNum = parseFloat(balanceTotalText);

    // step - 8 / adding deposit amount and balance amount
    const newBalanceTotal = balanceToalNum + parseFloat(depositAmountShow);

    balanceTotal.innerText = newBalanceTotal;

})

//  withdraw area 

document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputShow = withdrawInput.value;
    const withdrawInputNum = parseFloat(withdrawInputShow);

    const withdrawShow = document.getElementById('withdraw-show'); 
    const previousWithdrawShow = withdrawShow.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawShow);

    const withdrawTotal = withdrawInputNum + previousWithdrawAmount;

    withdrawShow.innerText = withdrawTotal;

    //  balance update after withdraw
    const balanceUpdate = document.getElementById('balance-total');
    const prevBalanceTotal = balanceUpdate.innerText;

    const prevBalanceTotalNum = parseFloat(prevBalanceTotal);

    const newBalanceUpdate = prevBalanceTotalNum - withdrawInputNum;
    
    balanceUpdate.innerText = newBalanceUpdate;



    // clearing the withdraw input
    withdrawInput.value = '';
})

